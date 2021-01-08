import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Alert,
} from 'react-native';
import {connect} from 'react-redux';
import Login from './Login';
import registerActions from '../redux/actions/register';
import {Formik} from 'formik';
import * as yup from 'yup';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      alertMsg: '',
    };
  }

  doRegister = (data) => {
    this.props.register(data);
  };

  showAlert = () => {
    const {alertMsg, success} = this.props.regis;
    if (alertMsg !== this.state.alertMsg) {
      this.setState({alertMsg});
      if (success) {
        Alert.alert('Success', 'Register successfully', [
          {
            text: 'OK',
            onPress: () => this.props.navigation.navigate('Login'),
          },
        ]);
      } else {
        Alert.alert('Fail', alertMsg);
      }
      // this.props.navigation.navigate('Login')
    }
  };

  componentDidUpdate() {
    this.showAlert();
  }

  render() {
    const registerValidationSchema = yup.object().shape({
      name: yup.string().required('Name is required'),
      email: yup
        .string()
        .email('Please enter valid email')
        .required('Email address is Required'),
      password: yup
        .string()
        .min(8, ({min}) => `Password must be at least ${min} characters`)
        .required('Password is required'),
    });

    return (
      <View style={styles.parent}>
        <View style={styles.wrap}>
          <View style={styles.header}>
            <Text style={styles.textHeader}>Sign up</Text>
          </View>
          <Formik
            validationSchema={registerValidationSchema}
            initialValues={{
              name: '',
              email: '',
              password: '',
            }}
            onSubmit={(data) => this.doRegister(data)}>
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              errors,
              touched,
              isValid,
            }) => (
              <>
                <View style={styles.form}>
                  <View style={styles.inputGroup}>
                    <Text style={styles.label}>Name</Text>
                    <TextInput
                      style={styles.input}
                      onChangeText={handleChange('name')}
                      placeholder="Name"
                    />
                    {errors.name && touched.name && (
                      <Text style={styles.errorText}>{errors.name}</Text>
                    )}
                  </View>

                  <View style={styles.inputGroup}>
                    <Text style={styles.label}>Email</Text>
                    <TextInput
                      style={styles.input}
                      onChangeText={handleChange('email')}
                      placeholder="Email"
                      keyboardType="email-address"
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
                  onPress={() => this.props.navigation.navigate('Login')}
                  component={Login}>
                  Already have an account?
                </Text>
                <TouchableOpacity
                  style={styles.btn}
                  onPress={handleSubmit}
                  disabled={!isValid}>
                  <Text style={styles.textBtn}>SIGN UP</Text>
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
    alignItems: 'center',
    // borderWidth: 1
  },
  wrap: {
    justifyContent: 'center',
    width: '80%',
    // borderWidth: 1
  },
  header: {
    height: 100,
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
    backgroundColor: 'white',
    borderRadius: 5,
    elevation: 1,
    // borderBottomWidth: 1,
    // borderBottomColor: 'blue',
  },
  label: {
    color: 'gray',
    fontSize: 13,
  },
  input: {
    padding: 2,
    marginVertical: 3,
    fontSize: 16,
    fontFamily: 'times news roman',
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
    elevation: 5,
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
  regis: state.register,
});

const mapDispatchToProps = {
  register: registerActions.register,
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
