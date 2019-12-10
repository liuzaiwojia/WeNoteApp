/*
 * @Author: liujia
 * @Date: 2019-12-10 08:48:35
 * @Last Modified by: liujia
 * @Last Modified time: 2019-12-10 14:03:41
 * @description: 认证加载页面
 */
import React from 'react';
import {View, Text} from 'react-native';

class AuthLoadingScreen extends React.Component {
  componentDidMount() {
    this._bootstrapAsync();
  }

  _bootstrapAsync = async () => {
    this.props.navigation.navigate('App');
  };
  render() {
    return (
      <View>
        <Text>AuthLoadingScreen</Text>
      </View>
    );
  }
}

export default AuthLoadingScreen;
