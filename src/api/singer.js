import jsonp from 'common/utils/jsonp'
import {commonParam, options} from './config'

export function getSingerList() {
  const url = 'https://c.y.qq.com/v8/fcg-bin/v8.fcg'
  const data = Object.assign({}, commonParam, {
    channel: 'singer',
    page: 'list',
    key: 'all_all_all',
    pagesize: 100,
    pagenum: 1,
    format: 'jsonp'
  })
  return jsonp(url, data, options)
}

export function getSingerDetail(singerId) {
  const url = 'https://c.y.qq.com/v8/fcg-bin/fcg_v8_singer_track_cp.fcg'
  const data = Object.assign({}, commonParam, {
    singermid: singerId,
    order: 'listen',
    begin: 0,
    num: 100,
    songstatus: 1,
    format: 'jsonp'
  })
  return jsonp(url, data, options)
}