/*
 * @Author: liujia
 * @Date: 2019-12-10 14:04:25
 * @Last Modified by: liujia
 * @Last Modified time: 2019-12-10 14:05:01
 * @description: 文章板块的路由栈
 */
import {createStackNavigator} from 'react-navigation-stack';
import PostListScreen from '../pages/post/PostListScreen';

export default createStackNavigator({
  PostScreen: {
    screen: PostListScreen,
    navigationOptions: () => {
      return {
        header: () => null,
      };
    },
  },
});
