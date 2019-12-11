/*
 * @Author: liujia
 * @Date: 2019-12-11 08:57:16
 * @Last Modified by: liujia
 * @Last Modified time: 2019-12-11 10:06:48
 * @description:
 */
import reducer from './reducers/reducer';
import {createStore} from 'redux';

const store = createStore(reducer);

export default store;
