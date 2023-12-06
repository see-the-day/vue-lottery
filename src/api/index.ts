import request from '@/service'
import config from '@/utils/config'
import configData from '../../public/config'
export default {
  /* 1、登录 */
  login: data =>
    request({
      method: 'post',
      url: config.login.url,
      data
    }),

  /* 2、检测登陆状态 */
  check: () =>
    request({
      method: 'get',
      url: config.login.checkUrl
    }),

  /* 3、获取数据 */
  getData: () => {
    return new Promise(res => res(configData))
  },
  // request({
  //   method: 'get',
  //   url: config.onload.url
  // }),

  /* 4、回传抽中数据 */
  postData: data =>
    request({
      method: 'post',
      url: config.lottery.url,
      data
    })
}
