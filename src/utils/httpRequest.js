/*
 * @Author: liujia
 * @Date: 2019-12-11 19:34:35
 * @Last Modified by: liujia
 * @Last Modified time: 2019-12-11 19:37:13
 * @description: 封装系统的http请求
 */
import axios from 'axios';
import {backendHost} from '../config';

const operateUrl = (url = '') => {
  // 以"/"开头
  if (/^\/.*/g.test(url)) {
    return `${backendHost}${url}`;
  }
  return `${backendHost}/${url}`;
};

/**
 * @description 项目中的get请求
 * @param {String} url 请求的url
 * @param {Object} params 参数
 */
const get = (url, params = {}) => {
  return axios({
    method: 'get',
    url: operateUrl(url),
    params: params,
  });
};

/**
 * @description 项目中的通用post请求
 * @param {String} url 请求的url
 * @param {Object} params 请求参数
 * @param {Object} config axios配置
 */
const post = (url, params = {}, config = {}) => {
  return axios({
    method: 'post',
    url: operateUrl(url),
    data: params,
    ...config,
  });
};

/**
 * @description 项目中的通用put请求
 * @param {String} url 请求的url
 * @param {Object} params 请求参数
 * @param {Object} config axios配置
 */
const put = (url, params = {}, config = {}) => {
  return axios({
    method: 'put',
    url: operateUrl(url),
    data: params,
    ...config,
  });
};

/**
 * @description 项目中的通用delete请求
 * @param {String} url 请求的url
 * @param {Object} params 请求参数
 * @param {Object} config axios配置
 */
const deleteRequst = (url, params = {}, config = {}) => {
  return axios({
    method: 'delete',
    url: operateUrl(url),
    data: params,
    ...config,
  });
};

// eslint-disable-next-line prettier/prettier
export {
  get,
  post,
  put,
  deleteRequst,
};
