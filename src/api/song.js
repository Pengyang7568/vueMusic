const axios = require('axios')
import {commonParam} from './config'

export function getLyric(songmid) {
  const url = '/api/getLyric'
  const data = Object.assign({}, commonParam, {
    pcachetime: +new Date(),
    songmid: songmid
  })
  return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  }).catch((err) => {
    return Promise.reject(err)
  })
}