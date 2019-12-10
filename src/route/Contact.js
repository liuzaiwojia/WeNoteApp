/*
 * @Author: liujia
 * @Date: 2019-12-10 10:54:59
 * @Last Modified by: liujia
 * @Last Modified time: 2019-12-10 11:18:51
 * @description: 书单板块的路由栈
 */
import {createStackNavigator} from 'react-navigation-stack';
import ContactListScreen from '../pages/contact/ContactListScreen';

const Contact = createStackNavigator({
  ContactListScreen: ContactListScreen,
});

export default Contact;
