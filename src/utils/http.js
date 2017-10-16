/*
 * @Author: Kun
 * @Date: 2017-10-16 12:26:31
 * @Last Modified by: Kun
 * @Last Modified time: 2017-10-16 17:01:48
 */

import axios from 'axios';
// import qs from 'qs';
import api from './api';

// const SERVER = api.server + api.port;

axios.interceptors.request.use(config => config
, error => Promise.reject(error));

axios.interceptors.response.use(response => response
, error => Promise.resolve(error.response));

// function checkStatus(response) {
//     // loading
//     // 状态码正常，直接返回数据
//   if (response && (response.status === 200 || response.status === 304 || response.status === 400)) {
//     // 返回数据
//     return response;
//   }
//   // 项目最后统一返回错误
//   return {
//     status: -404,
//     msg: '网络异常',
//   };
// }

// function checkCode(res) {
//   // 当code异常返还错误
//   if (res.status === -404) {
//     // alert(res.msg);
//   }
//   if (res.data && (!res.data.success)) {
//     // alert(res.data.error_msg);
//   }

//   return res;
// }

export default {
  post(url, data) {
    console.log(url, data);
    console.log(api.server);
    // return axios({
    //   method: 'post',
    // });
  },
};
