import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Alert,
} from 'react-native';
import {DatePicker} from 'native-base';
import {Formik} from 'formik';
import * as yup from 'yup';
import base64 from 'react-native-base64';
import {connect} from 'react-redux';
import moment from 'moment';

// import actions
import editProfileActions from '../redux/actions/profile';

class EditProfile extends Component {
  updateData = async (values) => {
    console.log(values);
    console.log('aaa', this.props.profileEdit);
    console.log(this.props.profile.data.image);
    const actionUpdate = await this.props.dispatchProfile(
      this.props.auth.token,
      values,
    );
    if (actionUpdate.action.payload.data.success) {
      Alert.alert('Success', 'Data has ben updated', [
        {
          text: 'OK',
          onPress: () => this.props.navigation.navigate('Profile'),
        },
      ]);
    } else {
      Alert.alert('Fail', 'Fill column correctly', [
        {
          text: 'OK',
          onPress: () => this.props.navigation.navigate('EditProfile'),
        },
      ]);
    }
    // }
  };

  componentDidMount() {
    this.props.dispatchGetProfile(this.props.auth.token);
  }

  render() {
    const editValidationSchema = yup.object().shape({
      name: yup.string().required('Name is required'),
      email: yup
        .string()
        .email('Please enter valid email')
        .required('Email Address is Required'),
      gender: yup.string().required(),
      birthdate: yup.date().required(),
      phone: yup.number().required(),
    });

    return (
      <View style={styles.parent}>
        <ScrollView>
          <Formik
            validationSchema={editValidationSchema}
            initialValues={{
              name: this.props.profile.data.name,
              email: this.props.profile.data.email,
              birthdate: moment(this.props.profile.data.date).format('Y-MM-DD'),
              gender: this.props.profile.data.gender,
              phone: this.props.profile.data.phone,
              // photo: this.props.profile.data.image,
            }}
            onSubmit={(values) => this.updateData(values)}>
            {({
              handleBlur,
              handleChange,
              handleSubmit,
              values,
              errors,
              touched,
              isValid,
            }) => (
              <>
                <View style={styles.header}>
                  <Text style={styles.txtHeader}>Edit Profile</Text>
                </View>
                <View style={styles.inputGroup}>
                  <Text style={styles.label}>Full name</Text>
                  <TextInput
                    style={styles.input}
                    onChangeText={handleChange('name')}
                    value={values.name}
                    placeholder="Full name"
                  />
                </View>
                {errors.name && touched.name && (
                  <Text style={styles.errorText}>{errors.name}</Text>
                )}

                <View style={styles.inputGroup}>
                  <Text style={styles.label}>Email</Text>
                  <TextInput
                    style={styles.input}
                    onChangeText={handleChange('email')}
                    value={values.email}
                    placeholder="Email"
                    keyboardType="email-address"
                    autoCapitalize="none"
                  />
                </View>
                {errors.email && touched.email && (
                  <Text style={styles.errorText}>{errors.email}</Text>
                )}

                <View style={styles.inputGroup}>
                  <Text style={styles.label}>Date of Birth</Text>
                  <TextInput
                    style={styles.input}
                    onChangeText={handleChange('birthdate')}
                    value={values.birthdate}
                    placeholder="YYY-MM-dd"
                    keyboardType="numeric"
                  />
                </View>
                {errors.birthdate && touched.birthdate && (
                  <Text style={styles.errorText}>{errors.birthdate}</Text>
                )}

                <View style={styles.inputGroup}>
                  <Text style={styles.label}>Gender</Text>
                  <TextInput
                    style={styles.input}
                    onChangeText={handleChange('gender')}
                    value={values.gender}
                    placeholder="Gender"
                    autoCapitalize="none"
                  />
                </View>
                {errors.gender && touched.gender && (
                  <Text style={styles.errorText}>{errors.gender}</Text>
                )}

                <View style={styles.inputGroup}>
                  <Text style={styles.label}>Phone</Text>
                  <TextInput
                    style={styles.input}
                    onChangeText={handleChange('phone')}
                    value={values.phone}
                    placeholder="Phone"
                    keyboardType="numeric"
                  />
                </View>
                {errors.phone && touched.phone && (
                  <Text style={styles.errorText}>{errors.phone}</Text>
                )}

                <TouchableOpacity
                  style={styles.btn}
                  onPress={handleSubmit}
                  // disabled={!isValid}
                >
                  <Text style={styles.textBtn}>EDIT</Text>
                </TouchableOpacity>
              </>
            )}
          </Formik>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  parent: {
    padding: 10,
  },
  header: {
    height: 100,
    justifyContent: 'center',
  },
  txtHeader: {
    fontSize: 45,
    fontWeight: 'bold',
  },
  inputGroup: {
    marginVertical: 10,
    height: 70,
    padding: 5,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderRadius: 5,
    justifyContent: 'center',
    borderColor: 'grey',
    elevation: 2,
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
  btn: {
    backgroundColor: '#DB3022',
    height: 48,
    margin: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    marginVertical: 10,
    elevation: 3,
  },
  textBtn: {
    fontWeight: '800',
    fontSize: 18,
    color: 'white',
  },
  errorText: {
    fontSize: 15,
    color: 'red',
  },
});

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile,
  profileEdit: state.editProfile,
});

const mapDispatchToProps = {
  dispatchProfile: editProfileActions.updateProfile,
  dispatchGetProfile: editProfileActions.myProfile,
  dispatchProfileWithPhoto: editProfileActions.updatePhotoProfile,
};

export default connect(mapStateToProps, mapDispatchToProps)(EditProfile);
