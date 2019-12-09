/*
 * @Author: liujia
 * @Date: 2019-11-28 16:44:54
 * @Last Modified by: liujia
 * @Last Modified time: 2019-12-09 20:23:26
 * @description: 项目路由配置
 */
import React from 'react';
import {Text, View} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import PostScreen from './Post';

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

const TabNavigator = createBottomTabNavigator(
  {
    PostScreen: PostScreen,
    BookScreen: BookScreen,
    TopicScreen: TopicScreen,
    MessageScreen: MessageScreen,
    ContactScreen: ContactScreen,
  },
  // {
  //   tabBarComponent: () => null,
  // },
);

export default createAppContainer(TabNavigator);
