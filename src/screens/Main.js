import React, {Component} from 'react';
// import { View, Text, Alert } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {connect} from 'react-redux';
import SplashScreen from 'react-native-splash-screen';

// screens
import Landpage from './Landpage';
import Login from './Login';
import Register from './Register';
import Shop from './Shop';
import Detail from './DetailProduct';
import ShippingAddress from './ShippingAddress';
import MyOrder from './MyOrder';
import Checkout from './Checkout';
import ChangeAddress from './ChangeAddress';
import AddAddress from './AddAddress';
import Settings from './Settings';
import EditProfile from './EditProfile';
import ForgotPassword from './ForgotPassword';
import ProductByCategory from './ProductByCategory';
import Success from './Success';

// import tab
import TabNavigation from './TabNavigation';

// import header
import Header from '../components/Header';

// create stack
const Stack = createStackNavigator();

class Main extends Component {
  componentDidMount() {
    this.props.auth;
    console.log('main', this.props.auth);
    SplashScreen.hide();
  }

  render() {
    return (
      <NavigationContainer>
        {!this.props.auth.isLogin ? (
          <Stack.Navigator>
            <Stack.Screen
              name="Landpage"
              component={Landpage}
              options={{
                headerShown: false,
                title: 'Landpage',
              }}
            />
            <Stack.Screen
              name="Login"
              component={Login}
              options={{
                title: '',
                headerStyle: {
                  backgroundColor: 'ghostwhite',
                  height: 100,
                  elevation: 0,
                },
                headerTitleStyle: {
                  fontSize: 50,
                },
              }}
            />
            <Stack.Screen
              name="Register"
              component={Register}
              options={{
                title: '',
                headerStyle: {
                  backgroundColor: 'ghostwhite',
                  height: 100,
                  elevation: 0,
                },
                // headerTitleStyle: {
                //   fontSize: 50,
                //   alignSelf: 'flex-start',
                // }
              }}
            />
            <Stack.Screen
              name="ForgotPassword"
              component={ForgotPassword}
              options={{
                title: '',
                headerStyle: {
                  backgroundColor: 'ghostwhite',
                  height: 100,
                  elevation: 0,
                },
                headerTitleStyle: {
                  fontSize: 50,
                },
              }}
            />
          </Stack.Navigator>
        ) : (
          <Stack.Navigator>
            <Stack.Screen
              name="Home"
              component={TabNavigation}
              options={{
                headerShown: false,
                title: 'Home',
                headerStyle: {
                  backgroundColor: 'ghostwhite',
                  height: 100,
                  elevation: 0,
                },
                headerTitleStyle: {
                  fontSize: 50,
                },
              }}
            />
            <Stack.Screen
              name="Shop"
              component={Shop}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="Detail"
              component={Detail}
              options={{
                title: 'Detail',
              }}
            />
            <Stack.Screen
              name="ShippingAddress"
              component={ShippingAddress}
              options={{
                title: 'Shipping Address',
              }}
            />
            <Stack.Screen
              name="MyOrder"
              component={MyOrder}
              options={{
                // headerRight: () => <Icon name='magnify' size={10} />
                title: 'MyOrder',
              }}
            />
            <Stack.Screen
              name="Checkout"
              component={Checkout}
              options={{
                title: 'Checkout',
              }}
            />
            <Stack.Screen
              name="ChangeAddress"
              component={ChangeAddress}
              options={{
                title: 'ChangeAddress',
              }}
            />
            <Stack.Screen
              name="AddAddress"
              component={AddAddress}
              options={{
                title: 'Add Shipping Address',
              }}
            />
            <Stack.Screen
              name="Settings"
              component={Settings}
              options={{
                title: '',
                headerStyle: {
                  elevation: 0,
                },
              }}
            />
            <Stack.Screen
              name="EditProfile"
              component={EditProfile}
              options={{
                title: '',
                headerStyle: {
                  elevation: 0,
                },
              }}
            />
            <Stack.Screen
              name="ProductByCategory"
              component={ProductByCategory}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="Success"
              component={Success}
              options={{
                headerShown: false,
              }}
            />
          </Stack.Navigator>
        )}
      </NavigationContainer>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, null)(Main);
