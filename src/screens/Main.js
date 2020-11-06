import React, { Component } from 'react'
import { View, Text, Alert } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { connect } from 'react-redux'

// screens
import Landpage from './Landpage'
import Login from './Login'
import Register from './Register'
import Category from './Category'
import Detail from './DetailProduct'
import ShippingAddress from './ShippingAddress'
import MyOrder from './MyOrder'
import Checkout from './Checkout'
import ChangeAddress from './ChangeAddress'
import AddAddress from './AddAddress'

// import tab
import TabNavigation from './TabNavigation'

// create stack
const Stack = createStackNavigator()

class Main extends Component {
  componentDidMount () {
    console.log('main', this.props.auth)
  }

  render () {
    return (
      <NavigationContainer>
        {!this.props.auth.token.length ? (
          <Stack.Navigator>
            <Stack.Screen
              name='Landpage'
              component={Landpage}
              options={{
                headerShown: false,
                title: 'Landpage'
              }}
            />
            <Stack.Screen
              name='Login'
              component={Login}
              options={{
                title: '',
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
                title: '',
                headerStyle: {
                  backgroundColor: 'ghostwhite',
                  height: 100,
                  elevation: 0
                }
                // headerTitleStyle: {
                //   fontSize: 50,
                //   alignSelf: 'flex-start',
                // }
              }}
            />
          </Stack.Navigator>
        ) : (
          <Stack.Navigator>

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
            <Stack.Screen
              name='Checkout'
              component={Checkout}
              options={{
                title: 'Checkout'
              }}
            />
            <Stack.Screen
              name='ChangeAddress'
              component={ChangeAddress}
              options={{
                title: 'ChangeAddress'
              }}
            />
            <Stack.Screen
              name='AddAddress'
              component={AddAddress}
              options={{
                title: 'Add Shipping Address'
              }}
            />
          </Stack.Navigator>
        )}

      </NavigationContainer>
    )
  }
}

const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(mapStateToProps, null)(Main)
