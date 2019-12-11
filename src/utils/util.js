/*
 * @Author: liujia
 * @Date: 2019-12-11 18:08:24
 * @Last Modified by: liujia
 * @Last Modified time: 2019-12-11 19:38:56
 * @description: 系统工具方法
 */
import {AsyncStorage} from 'react-native';
import * as httpRequest from './httpRequest';

/**
 * @description 本地存储数据
 * @param {String}} key 保存的键值
 * @param {String} value 保存的值
 */
const setStorageData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (error) {
    console.log(error);
  }
};

/**
 * @description 从本地存储中读取数据
 * @param {String} key 要读取数据的键值
 */
const getStorageData = async key => {
  try {
    const value = await AsyncStorage.getItem(key);
    return value;
  } catch (error) {
    console.log(error);
  }
};

/**
 * @description 从本地存储中删除数据
 * @param {String} key 要删除数据的键值
 */
const removeStorageData = async key => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (error) {
    console.log(error);
  }
};

// eslint-disable-next-line prettier/prettier
export {
  setStorageData,
  getStorageData,
  removeStorageData,
  httpRequest,
};
