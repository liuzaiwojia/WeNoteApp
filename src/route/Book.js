/*
 * @Author: liujia
 * @Date: 2019-12-10 10:54:59
 * @Last Modified by: liujia
 * @Last Modified time: 2019-12-10 11:09:40
 * @description: 书单板块的路由栈
 */
import {createStackNavigator} from 'react-navigation-stack';
import BookListScreen from '../pages/book/BookListScreen';

const Book = createStackNavigator({
  BookListScreen: BookListScreen,
});

export default Book;
