/*
 * @Author: liujia
 * @Date: 2019-11-28 16:44:54
 * @Last Modified by: liujia
 * @Last Modified time: 2019-12-10 13:50:04
 * @description: 项目路由配置
 */
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import AuthLoadingScreen from '../pages/auth/AuthLoadingScreen';
import Auth from './Auth';
import Drawer from './Drawer';

const switchNavigator = createSwitchNavigator({
  AuthLoading: AuthLoadingScreen,
  App: Drawer,
  Auth: Auth,
});

export default createAppContainer(switchNavigator);
