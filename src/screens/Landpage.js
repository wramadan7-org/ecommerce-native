import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
// import image
import logo from '../assets/images/logo.png'
class Landpage extends Component {
  render () {
    return (
      <View style={styles.parent}>

        <View style={styles.viewLogo}>
          {/* <Text style={styles.logo}>R</Text> */}
          <Image source={logo} style={styles.logo} />
        </View>

        <TouchableOpacity style={styles.btn} onPress={() => this.props.navigation.navigate('Login')}>
          <Text style={styles.textBtn}>LOGIN</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn} onPress={() => this.props.navigation.navigate('Register')}>
          <Text style={styles.textBtn}>REGISTER</Text>
        </TouchableOpacity>

        {/* <TouchableOpacity style={styles.btn} onPress={() => this.props.navigation.navigate('Home')}>
          <Text>Home</Text>
        </TouchableOpacity> */}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    backgroundColor: 'ghostwhite',
    justifyContent: 'center',
    alignItems: 'center'
  },
  viewLogo: {
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#757575',
    width: 150,
    height: 150,
    borderRadius: 100,
    marginVertical: 50
  },
  logo: {
    // fontSize: 145,
    // fontWeight: 'bold',
    // color: 'white'
    width: 160,
    height: 160
  },
  btn: {
    backgroundColor: 'lightblue',
    width: '70%',
    height: 45,
    margin: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    marginVertical: 10,
    elevation: 4
  },
  textBtn: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'white'
  }
})

export default Landpage
