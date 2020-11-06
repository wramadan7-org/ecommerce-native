import React, { Component } from 'react'
// import { View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/FontAwesome'

import Home from './Home'
import Shop from './Shop'
import Bag from './Bag'
import Favorites from './Favorites'
import Profile from './Profile'

const Tab = createBottomTabNavigator()

class TabNavigation extends Component {
  render () {
    return (
      <Tab.Navigator>
        <Tab.Screen name='Home' component={Home} />
        <Tab.Screen name='Shop' component={Shop} />
        <Tab.Screen name='Bag' component={Bag} />
        <Tab.Screen name='Favorites' component={Favorites} />
        <Tab.Screen name='Profile' component={Profile} />

      </Tab.Navigator>
    )
  }
}

export default TabNavigation
