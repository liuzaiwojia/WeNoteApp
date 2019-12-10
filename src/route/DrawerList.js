/*
 * @Author: liujia
 * @Date: 2019-12-10 09:38:38
 * @Last Modified by: liujia
 * @Last Modified time: 2019-12-10 11:28:58
 * @description: 弹出层的路由
 */
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Post from './Post';
import Book from './Book';
import Topic from './Topic';
import Message from './Message';
import Contact from './Contact';
import Setting from './Setting';

const bottomTabNavigator = createBottomTabNavigator({
  PostScreen: Post,
  BookScreen: Book,
  TopicScreen: Topic,
  MessageScreen: Message,
  ContactScreen: Contact,
});

const Drawer = createDrawerNavigator({
  tabDrawer: bottomTabNavigator,
  setDrawer: Setting,
});

export default Drawer;
