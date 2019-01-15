import axios from 'axios'

let uInfoString = localStorage.getItem('userInfo');
let ACCESS_TOKEN = uInfoString
  ? JSON.parse(uInfoString)
  : '';

export default (token = ACCESS_TOKEN) => {
  return {
    httpGet(url, params) {
      let searches = new URLSearchParams('');
      let assignedParams = Object.assign({token}, params)
      for (let k in assignedParams) {
        searches.append(k, assignedParams[k])
      }
      let paramsString = searches.toString()
      return axios.get(`${url}?${paramsString}`).then(res => res)
    },
    httpPost(url, params) {
      let assignedParams = Object.assign({token}, params)
      return axios.post(url, params).then(res => res)
    }
  }
}