/*
 * @Author: liujia
 * @Date: 2019-11-28 16:49:30
 * @Last Modified by: liujia
 * @Last Modified time: 2019-12-11 10:09:20
 * @description: 项目主入口
 */
import React from 'react';
import AppContainer from './src/route/Route';
import store from './src/redux/store';
import {Provider} from 'react-redux';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}
