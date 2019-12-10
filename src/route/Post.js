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
