import React, { Component } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

// import screens
import Landpage from './src/screens/Landpage'
import Login from './src/screens/Login'
import Register from './src/screens/Register'
import Home from './src/screens/Home'

const Stack = createStackNavigator()

class App extends Component {
  render () {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name='Landpage'
            component={Landpage}
            options={{
              headerShown: false,
              title: 'Landpage',
              headerStyle: {
                backgroundColor: 'ghostwhite',
                height: 100,
                elevation: 0
              },
              headerTitleStyle: {
                fontSize: 50
              }
            }}
          />
          <Stack.Screen
            name='Home'
            component={Home}
            options={{
              headerShown: false,
              title: 'Home',
              headerStyle: {
                backgroundColor: 'ghostwhite',
                height: 100,
                elevation: 0
              },
              headerTitleStyle: {
                fontSize: 50
              }
            }}
          />
          <Stack.Screen
            name='Login'
            component={Login}
            options={{
              title: '\n Login',
              headerStyle: {
                backgroundColor: 'ghostwhite',
                height: 100,
                elevation: 0
              },
              headerTitleStyle: {
                fontSize: 50
              }
            }}
          />
          <Stack.Screen
            name='Register'
            component={Register}
            options={{
              title: '\n Register',
              headerStyle: {
                backgroundColor: 'ghostwhite',
                height: 100,
                elevation: 0
              },
              headerTitleStyle: {
                fontSize: 50
              }
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}

export default App
