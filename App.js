import React, { Component } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

// import screens
import Landpage from './src/screens/Landpage'
import Login from './src/screens/Login'
import Register from './src/screens/Register'
import Home from './src/screens/Home'
import Shop from './src/screens/Shop'
import Category from './src/screens/Category'
import Bag from './src/screens/Bag'
import Favorites from './src/screens/Favorites'
import Profile from './src/screens/Profile'
import Detail from './src/screens/DetailProduct'
import ShippingAddress from './src/screens/ShippingAddress'
import MyOrder from './src/screens/MyOrder'

// import icon
import Icon from 'react-native-vector-icons'

// import tab
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

// import iconSearch

// const searchButton = () => {
//   return (
//     <TouchableOpacity>
//       <Icon name='magnify' />
//     </TouchableOpacity>
//   )
// }
const Tab = createBottomTabNavigator()

function TabNavigation () {
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

// create stack stack
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
          <Stack.Screen
            name='Home'
            component={TabNavigation}
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
            name='Category'
            component={Category}
            options={{
              // headerShown: false,
              title: 'Category',
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
            name='Detail'
            component={Detail}
            options={{
              title: 'Detail'
            }}
          />
          <Stack.Screen
            name='ShippingAddress'
            component={ShippingAddress}
            options={{
              title: 'Shipping Address'
            }}
          />
          <Stack.Screen
            name='MyOrder'
            component={MyOrder}
            options={{
              // headerRight: () => <Icon name='magnify' size={10} />
              title: 'MyOrder'
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}

export default App
