import React, { Component } from 'react'
import {
  View, Text, StyleSheet, TextInput, TouchableOpacity, Alert
} from 'react-native'

// import logoPuma from '../assets/images/puma.jpg'

class Login extends Component {

  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      alertMsg: ''
    }
  }

  doLogin = (e) => {
    const {email, password, alertMsg} = this.state
    e.preventDefault()
    if (email === 'admin' && password === 'admin') {
      Alert.alert(
        'Success',
        'Login success',
        [
          {
            text: 'OK',
            onPress: () => this.props.navigation.navigate('Home')
          }
        ],
        {cancelable: false}
      )
      
    } else {
      Alert.alert(
        'Fail',
        'Username or password wrong'
      )
      console.log('Fail')
    }
    // console.log(this.state)
  }

  render () {
    return (
      <View style={styles.parent}>
        <View style={styles.wrap}>
          <View style={styles.header}>
            {/* <Image style={{ width: 10, height: 50 }} source={logoPuma} /> */}
          </View>
          <View style={styles.form}>
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Email</Text>
              <TextInput style={styles.input} onChangeText={(email) => this.setState({email})} placeholder='Email' />
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>Password</Text>
              <TextInput style={styles.input} onChangeText={(password) => this.setState({password})} placeholder='Password' secureTextEntry />
            </View>
          </View>
          <Text style={styles.link} onPress={() => this.props.navigation.navigate('Forgot')}>Forget your password?</Text>
          <TouchableOpacity style={styles.btn} onPress={this.doLogin}>
            <Text>Login</Text>
          </TouchableOpacity>
        </View>
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
  wrap: {
    justifyContent: 'center',
    width: '80%'
  },
  header: {
    alignItems: 'center'
  },
  inputGroup: {
    marginVertical: 10,
    padding: 5,
    backgroundColor: 'white',
    borderRadius: 5
  },
  label: {
    color: 'gray',
    fontSize: 10
  },
  input: {
    padding: 2,
    marginVertical: 3,
    fontSize: 15
  },
  link: {
    color: 'black',
    textAlign: 'right'
  },
  btn: {
    backgroundColor: 'gray',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    marginVertical: 20
  }
})

export default Login
