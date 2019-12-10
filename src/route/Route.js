/*
 * @Author: liujia
 * @Date: 2019-11-28 16:44:54
 * @Last Modified by: liujia
 * @Last Modified time: 2019-12-10 09:10:40
 * @description: 项目路由配置
 */
import React from 'react';
import {Text, View} from 'react-native';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Post from './Post';
import AuthLoadingScreen from '../pages/auth/AuthLoadingScreen';
import Auth from './Auth';

class BookScreen extends React.Component {
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>书单</Text>
      </View>
    );
  }
}

class TopicScreen extends React.Component {
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>话题</Text>
      </View>
    );
  }
}

class MessageScreen extends React.Component {
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>消息</Text>
      </View>
    );
  }
}

class ContactScreen extends React.Component {
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>通讯录</Text>
      </View>
    );
  }
}

const bottomTabNavigator = createBottomTabNavigator(
  {
    PostScreen: Post,
    BookScreen: BookScreen,
    TopicScreen: TopicScreen,
    MessageScreen: MessageScreen,
    ContactScreen: ContactScreen,
  },
  // {
  //   tabBarComponent: () => null,
  // },
);

const switchNavigator = createSwitchNavigator({
  AuthLoading: AuthLoadingScreen,
  App: bottomTabNavigator,
  Auth: Auth,
});

export default createAppContainer(switchNavigator);
