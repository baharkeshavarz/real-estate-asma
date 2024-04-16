import axios from "../../lib/axios"

// Login Service
const doLogin = (data: any) => {
  return axios.post("/api/v1/account/sendLoginOtp", {
    userName: data
  })
}

// Register Service
const doRegister = (userData: any) => {
  return axios.post("/api/v1/account/register", userData)
}

const verifyLogin = (data: any) => {
  return axios.post("/api/v1/account/loginByOtp", data)
}

const verifyRegister = (data: any) => {
  return axios.post("/api/v1/account/registerVerify", data)
}

const doLogout = (refreshToken: any) => {
  return axios.post("/api/v1/account/logout", { refreshToken })
}

const refreshToken = (token: any) => {
  return axios.post("/api/v1/account/loginByRefreshToken", {
    refreshToken: token
  })
}

const resendRegisterOtp = (number: string) => {
  return axios.post("/api/v1/account/resendRegisterOtp", {
    mobileNumber: number
  })
}


const verifyEmtaLogin = (data: any) => {
  return axios.post("/api/v1/account/emtaConfirm", data)
}

const Authentication = {
  doLogin,
  doRegister,
  verifyLogin,
  verifyRegister,
  doLogout,
  refreshToken,
  resendRegisterOtp,
  verifyEmtaLogin
}

export default Authentication
