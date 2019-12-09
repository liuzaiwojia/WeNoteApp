import React from 'react';
import {View, Text} from 'react-native';
import {createStackNavigator} from 'react-navigation-stack';

class PostScreen extends React.Component {
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>文章</Text>
      </View>
    );
  }
}

export default createStackNavigator({
  PostScreen: {
    screen: PostScreen,
    navigationOptions: () => {
      return {
        header: () => null,
      };
    },
  },
});
