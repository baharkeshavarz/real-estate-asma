import axios from "../../lib/axios"

const getCountriesCode = () => {
  return axios.get("/api/v1/common/getCountryCodeList")
}

const getCountriesList = () => {
  return axios.get("/api/v1/common/getCountryList")
}
const getProvinceList = (id: any) => {
  return axios.get("/api/v1/common/getProvinceList", {
    params: {
      countryId: id
    }
  })
}

const getNationalityList = () => {
  return axios.get("/api/v1/common/getNationalityList")
}

const getCityList = (id: any) => {
  return axios.get("/api/v1/common/getCityList", {
    params: {
      provinceId: id
    }
  })
}

const getAllTypeByGroupId = (id: any) => {
  return axios.get("/api/v1/common/getAllTypeByGroupId", {
    params: {
      id: id
    }
  })
}

const CommonServices = {
  getCountriesCode,
  getCountriesList,
  getNationalityList,
  getProvinceList,
  getCityList,
  getAllTypeByGroupId
}

export default CommonServices
