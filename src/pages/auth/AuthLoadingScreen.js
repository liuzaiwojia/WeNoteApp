/*
 * @Author: liujia
 * @Date: 2019-12-10 08:48:35
 * @Last Modified by: liujia
 * @Last Modified time: 2019-12-13 09:01:46
 * @description: 认证加载页面
 */
import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
// import SafeAreaView from 'react-native-safe-area-view';

class AuthLoadingScreen extends React.Component {
  componentDidMount() {
    this._bootstrapAsync();
  }

  _bootstrapAsync = async () => {
    this.props.navigation.navigate('App');
  };
  render() {
    return (
      <SafeAreaView>
        <View>
          <Text>AuthLoadingScreen</Text>
        </View>
      </SafeAreaView>
    );
  }
}

export default AuthLoadingScreen;
