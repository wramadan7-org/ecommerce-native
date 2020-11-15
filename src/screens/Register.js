import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Alert } from 'react-native'
import { connect } from 'react-redux'
import Login from './Login'
import registerActions from '../redux/actions/register'

import { Form } from 'native-base'

class Register extends Component {

  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      password: '',
      alertMsg: ''
    }
  }

  doRegister = (e) => {
    e.preventDefault()
    const {name, email, password} = this.state
    const data = {
      name, email, password
    }
    this.props.register(data)
  }

  showAlert= () => {
    const {alertMsg} = this.props.regis
    if (alertMsg !== this.state.alertMsg) {
      this.setState({alertMsg})
      Alert.alert(alertMsg)
      // this.props.navigation.navigate('Login')
    }
  }

  componentDidUpdate() {
    this.showAlert()
  }  

  render () {
    return (
      <View style={styles.parent}>
        <View style={styles.wrap}>
        <View style={styles.header}>
          <Text style={styles.textHeader}>Sign up</Text>
        </View>
          <Form>
            <View style={styles.form}>
              <View style={styles.inputGroup}>
                <Text style={styles.label}>Name</Text>
                <TextInput style={styles.input} onChangeText={name => this.setState({name})} placeholder='Name' />
              </View>

              <View style={styles.inputGroup}>
                <Text style={styles.label}>Email</Text>
                <TextInput style={styles.input} onChangeText={email => this.setState({email})} placeholder='Email' />
              </View>

              <View style={styles.inputGroup}>
                <Text style={styles.label}>Password</Text>
                <TextInput style={styles.input} onChangeText={password => this.setState({password})} placeholder='Password' secureTextEntry />
              </View>
            </View>
            <Text style={styles.link} onPress={() => this.props.navigation.navigate('Login')} component={Login}>Already have an account? </Text>
            <TouchableOpacity style={styles.btn} onPress={this.doRegister}>
              <Text style={styles.textBtn}>SIGN UP</Text>
            </TouchableOpacity>
          </Form>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    backgroundColor: 'ghostwhite',
    alignItems: 'center',
    // borderWidth: 1
  },
  wrap: {
    justifyContent: 'center',
    width: '80%',
    // borderWidth: 1
  },
  header: {
    height: 100
  },
  textHeader: {
    fontSize: 50,
    fontWeight: 'bold',
    // textAlign: 'left'
  },
  inputGroup: {
    marginVertical: 10,
    height: 80,
    padding: 5,
    justifyContent: 'center',
    // backgroundColor: 'white',
    borderRadius: 5,
    // elevation: 3,
    borderBottomWidth: 1,
    borderBottomColor: 'blue'
  },
  label: {
    color: 'gray',
    fontSize: 13
  },
  input: {
    padding: 2,
    marginVertical: 3,
    fontSize: 16,
    fontFamily: 'times news roman'
  },
  link: {
    color: 'black',
    textAlign: 'right'
  },
  btn: {
    backgroundColor: 'lightblue',
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    marginVertical: 20,
    elevation: 5
  },
  textBtn: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white'
  }
})

const mapStateToProps = state => ({
  regis: state.register
})

const mapDispatchToProps = {
  register: registerActions.register
}

export default connect(mapStateToProps, mapDispatchToProps)(Register)
