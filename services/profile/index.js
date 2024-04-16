import axios from "../../lib/axios"

const getProfileData = () => {
  return axios.get("/api/v1/account/getProfile")
}

const getWalletList = () => {
  return axios.get("/api/v1/account/getWalletList")
}

const profileServices = { getProfileData, getWalletList }

export default profileServices
