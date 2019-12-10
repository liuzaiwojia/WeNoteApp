/*
 * @Author: liujia
 * @Date: 2019-12-10 10:54:59
 * @Last Modified by: liujia
 * @Last Modified time: 2019-12-10 11:18:23
 * @description: 书单板块的路由栈
 */
import {createStackNavigator} from 'react-navigation-stack';
import TopicListScreen from '../pages/topic/TopicListScreen';

const Topic = createStackNavigator({
  TopicListScreen: TopicListScreen,
});

export default Topic;
