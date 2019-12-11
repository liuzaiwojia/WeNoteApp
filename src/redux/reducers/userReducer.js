/*
 * @Author: liujia
 * @Date: 2019-12-11 08:26:14
 * @Last Modified by: liujia
 * @Last Modified time: 2019-12-11 10:08:56
 * @description: user相关的信息
 */
import {SET_USER_INFO} from '../actionTypes/userType';
import {combineReducers} from 'redux';

const userInfo = (state = null, action) => {
  switch (action.type) {
    case SET_USER_INFO:
      return action.userInfo;
    default:
      return state;
  }
};

export default combineReducers({userInfo});
