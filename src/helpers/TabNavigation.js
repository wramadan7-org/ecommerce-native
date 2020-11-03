import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Home from '../screens/Home'

const Tab = createBottomTabNavigator()

class TabNavigation extends Component {
  render () {
    return (
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name='Home' component={Home} />
          <Tab.Screen name='Home' component={Home} />
          <Tab.Screen name='Home' component={Home} />
        </Tab.Navigator>
      </NavigationContainer>
    )
  }
}

export default TabNavigation
