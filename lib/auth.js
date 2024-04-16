import { toast } from "react-toastify"
import Authentication from "../services/authentication"
import profileServices from "../services/profile"
import { clearTimeout } from "timers"
import { ServerLanguage } from "@/constants/languages"

export const BACK_TO_KEY = "backTo"

export function setBackToAfterLogin(pageAddress) {
  localStorage.setItem(BACK_TO_KEY, pageAddress)
}

class AuthHandler {
  #accessToken = ""
  #refreshToken = ""
  #language = ""
  #user = undefined

  constructor() {
    if (typeof window === "undefined") return
    this.#language = localStorage.getItem("language")
    this.#accessToken = localStorage.getItem("access_token")
    this.#refreshToken = localStorage.getItem("refresh_token")
    try {
      this.#user = JSON.parse(localStorage.getItem("user"))
      //useStoreCredit.setCredit(this.#user?.score || 0)
    } catch (e) {}
  }

  loadUser(t) {
    if (!this.isLoggedIn) return Promise.reject("")
    return profileServices
      .getProfileData()
      .then(res => {
        if (res?.status === 200) {
          if (!res?.data?.succeed) {
            const err = res?.data?.message || t.errors.errorHappened
            toast.error(err)
            throw err
          } else {
            const user = res?.data?.value
            user.lastUpdate = Date.now()
            //useStoreCredit.setCredit(user.score)
            refreshCredit()
            localStorage.setItem("user", JSON.stringify(user))
            this.#user = user
            return user
          }
        }
      })
      .catch(err => {
        toast.error(err || t.errors.errorHappened)
        throw err
      })
  }

  login(lang, responseValue) {
    const { access_token, refresh_token } = responseValue
    localStorage.setItem("language", ServerLanguage[lang])
    localStorage.setItem("access_token", access_token)
    localStorage.setItem("refresh_token", refresh_token)
    this.#language = ServerLanguage[lang]
    this.#accessToken = access_token
    this.#refreshToken = refresh_token
  }
  
  backToBeforeLogin(lang, router) {
    const backTo = localStorage.getItem(BACK_TO_KEY)
    router.push(backTo || `/${lang}/dashboard/requests`)
    if (backTo) {
      localStorage.removeItem(BACK_TO_KEY)
    }
  }

  get user() {
    return this.#user
  }

  get language() {
    return this.#language
  }

  get accessToken() {
    return this.#accessToken
  }
  get refreshToken() {
    return this.#refreshToken
  }

  get isLoggedIn() {
    return !!this.#accessToken
  }

  refresh() {
    return Authentication.refreshToken(this.#refreshToken).then(response => {
      if (response?.status !== 200 || !response?.data?.succeed) {
        this.logout()
        throw "failed"
      } else {
        this.login(response?.data?.value)
      }
    })
  }

  logout(lang, router) {
    return Authentication.doLogout(this.#refreshToken).then(async response => {
      if (response?.status === 200) {
        if (!response?.data?.succeed) {
          toast.error(response?.data?.message)
        } else {

          this.#language = ""
          this.#accessToken = ""
          this.#refreshToken = ""
          this.#user = null
          localStorage.removeItem("access_token")
          localStorage.removeItem("refresh_token")
          localStorage.removeItem("user")
          // useScoreStore.setCredit(0)
          if (router) {
            return router.push(`/${lang}/login`)
          } else {
            location.href = `/en/login`  //todo
          }
        }
      }
    })
  }

setLanguage(lang) {
    localStorage.setItem("language", ServerLanguage[lang])
    this.#language = ServerLanguage[lang]
  }
}

const FIVE_MIN = 5 * 60 * 1000
let refreshTimeout
function refreshCredit() {
  clearTimeout(refreshTimeout)
  refreshTimeout = setTimeout(() => {
    refreshCredit()
    authHandler.loadUser()
  }, FIVE_MIN)
}

const authHandler = new AuthHandler()
refreshCredit()
export default authHandler
