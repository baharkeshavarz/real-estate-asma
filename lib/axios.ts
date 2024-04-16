import axios from "axios"
import { toast } from "react-toastify"
import auth from "./auth"

const publicPaths = [
  "/api/v1/account/register",
  "/api/v1/account/registerVerify",
  "/api/v1/account/sendLoginOtp",
  "/api/v1/account/loginByOtp",
  "/api/v1/common/getCountryCodeList",
  "/api/v1/common/getCountryList",
  "/api/v1/common/getNationalityList",
]
const API_URL = "https://api.inflous.net"
// const API_URL = "http://10.1.10.171:5001"

const config = {
  baseURL: API_URL,
  timeout: 5 * 60 * 1000, //5 mins
  headers: {
    "Access-Control-Allow-Credentials": true,
    "Content-Type": "application/json; charset=utf-8",
    "Access-Control-Allow-Origin": API_URL,
    "Accept-Language": auth.language || "en-UN",
    'Timezone-Offset': Intl.DateTimeFormat().resolvedOptions().timeZone
  }
}

const _axios = axios.create(config)
// Interceptor to add IP address to headers
_axios.interceptors.request.use(
  async function (config) {
    if (!publicPaths.includes(config.url!)) {
      config.headers.Authorization = `Bearer ${auth.accessToken}`
	    }

    // Change Accept-Language header to the desired language
    config.headers["Accept-Language"] = auth.language;
    return config
  }
)

_axios.interceptors.response.use(
  next => {
    return Promise.resolve(next)
  },
  error => {
    if (error?.response?.status === 401) {
      if (!auth.isLoggedIn) return auth.logout()
      return auth
        .refresh()
        .then(() => {
          error.config.headers["Authorization"] = "Bearer " + auth.accessToken
          return axios.request(error.config)
        })
        .catch(e => {
          console.error(e)
        })
    } else {
      if (error?.data?.message) {
        toast.error(error?.data?.message)
      }
    }
    return Promise.reject("")
  }
)

export default _axios
