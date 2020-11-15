import React, { Component } from 'react'
import {
  View, Text, StyleSheet, TextInput,
  TouchableOpacity, Alert
} from 'react-native'
import {Form} from 'native-base'
//import actions
import authActions from '../redux/actions/auth'
//import connect
import {connect} from 'react-redux'

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
    e.preventDefault()
    const {email, password, alertMsg} = this.state
    const data = {
      email,password
    }
    this.props.login(data)
  }

  showAlert= () => {
    const {alertMsg} = this.props.auth
    if (alertMsg !== this.state.alertMsg) {
      this.setState({alertMsg})
      Alert.alert(alertMsg)
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
            <Text style={styles.textHeader}>Login</Text>
          </View>
          <Form>
          <View style={styles.form}>
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Email</Text>
              <TextInput style={styles.input} onChangeText={email => this.setState({email})} placeholder='Email' />
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>Password</Text>
              <TextInput style={styles.input} onChangeText={password => this.setState({password})} placeholder='Password' secureTextEntry />
            </View>
          </View>
          <Text style={styles.link} onPress={() => this.props.navigation.navigate('Forgot')}>Forget your password?</Text>
          <TouchableOpacity style={styles.btn} onPress={this.doLogin}>
            <Text style={styles.textBtn}>LOGIN</Text>
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
    // justifyContent: 'center',
    alignItems: 'center'
  },
  wrap: {
    justifyContent: 'center',
    width: '80%'
  },
  header: {
    // alignItems: 'center',
    height: 100,
  },
  textHeader: {
    fontSize: 50,
    fontWeight: 'bold'
  },
  inputGroup: {
    marginVertical: 10,
    height: 80,
    padding: 5,
    // backgroundColor: 'white',
    borderBottomWidth: 1,
    borderRadius: 5,
    justifyContent: 'center',
    borderBottomColor: 'blue'
    // elevation: 3
  },
  label: {
    color: 'gray',
    fontSize: 13
  },
  input: {
    padding: 2,
    marginVertical: 3,
    fontSize: 16
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
    elevation: 3
  },
  textBtn: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white'
  },
})

const mapStateToProps = state => ({
  auth: state.auth
})

const mapDispatchToProps = {
  login: authActions.doLogin 
}


export default connect(mapStateToProps, mapDispatchToProps)(Login)
