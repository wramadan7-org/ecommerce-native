import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
// import { connect } from 'react-redux'
class Landpage extends Component {
  render () {
    return (
      <View style={styles.parent}>
        <TouchableOpacity style={styles.btn} onPress={() => this.props.navigation.navigate('Login')}>
          <Text>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn} onPress={() => this.props.navigation.navigate('Register')}>
          <Text>Register</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn} onPress={() => this.props.navigation.navigate('Home')}>
          <Text>Home</Text>
        </TouchableOpacity>
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
  btn: {
    backgroundColor: 'gray',
    width: '70%',
    padding: 10,
    margin: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100
  }
})

export default Landpage
