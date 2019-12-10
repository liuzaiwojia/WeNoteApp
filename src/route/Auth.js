/*
 * @Author: liujia
 * @Date: 2019-12-10 09:09:36
 * @Last Modified by: liujia
 * @Last Modified time: 2019-12-10 09:09:58
 * @description: 认证部分的路由
 */
import SignInScreen from '../pages/auth/SignInScreen';
import {createStackNavigation} from 'react-navigation-stack';

const Auth = createStackNavigation({
  SignInScreen: SignInScreen,
});

export default Auth;
