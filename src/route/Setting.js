/*
 * @Author: liujia
 * @Date: 2019-12-10 10:54:59
 * @Last Modified by: liujia
 * @Last Modified time: 2019-12-10 11:28:06
 * @description: 设置板块的路由栈
 */
import {createStackNavigator} from 'react-navigation-stack';
import SettingScreen from '../pages/setting/SettingScreen';

const Setting = createStackNavigator({
  Setting: SettingScreen,
});

export default Setting;
