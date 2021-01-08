import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from 'react-native';
import {Formik} from 'formik';
import * as yup from 'yup';

//import actions
import authActions from '../redux/actions/auth';
//import connect
import {connect} from 'react-redux';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // email: '',
      // password: '',
      alertMsg: '',
    };
  }

  doLogin = (data) => {
    this.props.login(data);
  };

  showAlert = () => {
    const {alertMsg, isLogin} = this.props.auth;
    if (alertMsg !== this.state.alertMsg) {
      this.setState({alertMsg});
      if (isLogin) {
        Alert.alert('Success', alertMsg);
      } else {
        Alert.alert('Fail', alertMsg);
      }
    }
  };

  componentDidMount() {
    this.props.auth;
  }

  componentDidUpdate() {
    this.showAlert();
  }

  render() {
    const loginValidationSchema = yup.object().shape({
      email: yup
        .string()
        .email('Please enter valid email')
        .required('Email Address is Required'),
      password: yup
        .string()
        .min(8, ({min}) => `Password must be at least ${min} characters`)
        .required('Password is required'),
    });

    const {isLoading} = this.props.auth;

    return (
      <View style={styles.parent}>
        <View style={styles.wrap}>
          {isLoading && <ActivityIndicator />}
          <View style={styles.header}>
            <Text style={styles.textHeader}>Login</Text>
          </View>
          <Formik
            validationSchema={loginValidationSchema}
            initialValues={{
              email: '',
              password: '',
            }}
            onSubmit={(values) => this.doLogin(values)}>
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              errors,
              isValid,
              touched,
            }) => (
              <>
                <View style={styles.form}>
                  <View style={styles.inputGroup}>
                    <Text style={styles.label}>Email</Text>
                    <TextInput
                      style={styles.input}
                      onChangeText={handleChange('email')}
                      onBlur={handleBlur('email')}
                      value={values.email}
                      keyboardType="email-address"
                      placeholder="Email"
                      autoCapitalize="none"
                    />
                    {errors.email && touched.email && (
                      <Text style={styles.errorText}>{errors.email}</Text>
                    )}
                  </View>

                  <View style={styles.inputGroup}>
                    <Text style={styles.label}>Password</Text>
                    <TextInput
                      style={styles.input}
                      onChangeText={handleChange('password')}
                      onBlur={handleBlur('password')}
                      value={values.password}
                      placeholder="Password"
                      autoCapitalize="none"
                      secureTextEntry
                    />
                    {errors.password && touched.password && (
                      <Text style={styles.errorText}>{errors.password}</Text>
                    )}
                  </View>
                </View>
                <Text
                  style={styles.link}
                  onPress={() => this.props.navigation.navigate('Forgot')}>
                  Forget your password?
                </Text>
                <TouchableOpacity
                  style={styles.btn}
                  onPress={handleSubmit}
                  disabled={!isValid}>
                  <Text style={styles.textBtn}>LOGIN</Text>
                </TouchableOpacity>
              </>
            )}
          </Formik>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    backgroundColor: 'ghostwhite',
    // justifyContent: 'center',
    alignItems: 'center',
  },
  wrap: {
    justifyContent: 'center',
    width: '80%',
  },
  header: {
    // alignItems: 'center',
    height: 100,
  },
  textHeader: {
    fontSize: 50,
    fontWeight: 'bold',
  },
  inputGroup: {
    marginVertical: 10,
    height: 80,
    padding: 5,
    backgroundColor: 'white',
    borderRadius: 5,
    justifyContent: 'center',
    elevation: 1,
  },
  label: {
    color: 'gray',
    fontSize: 13,
  },
  input: {
    padding: 2,
    marginVertical: 3,
    fontSize: 16,
  },
  link: {
    color: 'black',
    textAlign: 'right',
  },
  btn: {
    backgroundColor: '#DB3022',
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    marginVertical: 20,
    elevation: 3,
  },
  textBtn: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  errorText: {
    fontSize: 10,
    color: 'red',
  },
});

const mapStateToProps = (state) => ({
  auth: state.auth,
});

const mapDispatchToProps = {
  login: authActions.doLogin,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
