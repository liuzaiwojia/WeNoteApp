/*
 * @Author: liujia
 * @Date: 2019-12-11 08:34:35
 * @Last Modified by: liujia
 * @Last Modified time: 2019-12-11 08:36:30
 * @description:
 */
import {SET_USER_INFO} from '../actionTypes/userType';

const setUserInfo = userInfo => {
  return {
    type: SET_USER_INFO,
    userInfo: userInfo,
  };
};

export {setUserInfo};
