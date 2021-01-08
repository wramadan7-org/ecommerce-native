import React, {Component} from 'react';
// import { View } from 'react-native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

import Home from './Home';
import Category from './Category';
import Bag from './Bag';
import Favorites from './Favorites';
import Profile from './Profile';

const Tab = createBottomTabNavigator();

class TabNavigation extends Component {
  render() {
    return (
      <Tab.Navigator tabBarOptions={{style: {backgroundColor: 'white'}}}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            // tabBarLabel: 'Home',
            tabBarIcon: ({color, size}) => (
              <Icon name="home" size={30} color="black" />
            ),
          }}
        />
        <Tab.Screen
          name="Category"
          component={Category}
          options={{
            title: 'Shop',
            // tabBarLabel: 'Shop',
            tabBarIcon: ({color, size}) => (
              <Icon name="shopping-cart" size={30} color="black" />
            ),
          }}
        />
        <Tab.Screen
          name="Bag"
          component={Bag}
          options={{
            // tabBarLabel: 'Bag',
            tabBarIcon: ({color, size}) => (
              <Icon name="shopping-bag" size={30} color="black" />
            ),
          }}
        />
        <Tab.Screen
          name="Favorites"
          component={Favorites}
          options={{
            // tabBarLabel: 'Favorites',
            tabBarIcon: ({color, size}) => (
              <Icon name="heart" size={30} color="black" />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            // tabBarLabel: 'Profile',
            tabBarIcon: ({color, size}) => (
              <Icon name="user" size={30} color="black" />
            ),
          }}
        />
      </Tab.Navigator>
    );
  }
}

export default TabNavigation;
