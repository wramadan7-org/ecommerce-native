import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Alert,
} from 'react-native';
import {Formik} from 'formik';
import * as yup from 'yup';
import {useSelector, useDispatch} from 'react-redux';
import addressActions from '../redux/actions/address';
import profileActions from '../redux/actions/profile';

function AddAddress({navigation}) {
  const {token} = useSelector((state) => state.auth);

  const addressSchema = yup.object().shape({
    homeAddress: yup
      .string()
      .required('Please enter your state/provincie/region'),
    recepientsName: yup.string().required('Plese enter your name'),
    recepientsNumber: yup
      .string()
      .min(11, ({min}) => `Phone number minimal ${min} characters`)
      // .matches(/([0-9])/, 'Enter a valid phone number')
      .required('Please enter your phone number'),
    address: yup.string().required('Please enter your address'),
    postalCode: yup
      .number()
      .min(5, ({min}) => `Please enter minimal ${min} character`)
      .required('Please enter your zip code / postal code'),
    city: yup.string().required('Please enter your city'),
  });

  const dispatch = useDispatch();

  const doAddAddress = async (values) => {
    // console.log(values);
    const dispatchAddAddress = await dispatch(
      addressActions.addAddress(token, values),
    );
    if (dispatchAddAddress.action.payload.data.success) {
      Alert.alert('Success', 'Shipping address has been added', [
        {
          text: 'OK',
          onPress: () => navigation.navigate('ShippingAddress'),
        },
      ]);
      dispatch(profileActions.myProfile(token));
    } else {
      Alert.alert('Fail', dispatchAddAddress.action.payload.data.alertMsg);
    }
  };

  return (
    <View style={styles.parent}>
      <ScrollView style={styles.viewForm}>
        <Formik
          initialValues={{
            homeAddress: '',
            recepientsName: '',
            recepientsNumber: '',
            address: '',
            postalCode: '',
            city: '',
          }}
          validationSchema={addressSchema}
          onSubmit={(values) => doAddAddress(values)}>
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
              <View style={styles.fild}>
                <Text style={styles.label}>Full name</Text>
                <TextInput
                  style={styles.inputan}
                  name="fullname"
                  placeholder="Full name"
                  onChangeText={handleChange('recepientsName')}
                  onBlur={handleBlur('recepientsName')}
                />
              </View>
              {errors.recepientsName && touched.recepientsName && (
                <Text style={styles.errorText}>{errors.recepientsName}</Text>
              )}
              <View style={styles.fild}>
                <Text style={styles.label}>Address</Text>
                <TextInput
                  style={styles.inputan}
                  name="address"
                  placeholder="Address"
                  onChangeText={handleChange('address')}
                  onBlur={handleBlur('address')}
                />
              </View>
              {errors.address && touched.address && (
                <Text style={styles.errorText}>{errors.address}</Text>
              )}
              <View style={styles.fild}>
                <Text style={styles.label}>City</Text>
                <TextInput
                  style={styles.inputan}
                  name="city"
                  placeholder="City"
                  onChangeText={handleChange('city')}
                  onBlur={handleBlur('city')}
                />
              </View>
              {errors.city && touched.city && (
                <Text style={styles.errorText}>{errors.city}</Text>
              )}
              <View style={styles.fild}>
                <Text style={styles.label}>State</Text>
                <TextInput
                  style={styles.inputan}
                  name="state"
                  placeholder="State/Province/Region"
                  onChangeText={handleChange('homeAddress')}
                  onBlur={handleBlur('homeAddress')}
                />
              </View>
              {errors.homeAddress && touched.homeAddress && (
                <Text style={styles.errorText}>{errors.homeAddress}</Text>
              )}
              <View style={styles.fild}>
                <Text style={styles.label}>Zip Code (Postal Code)</Text>
                <TextInput
                  style={styles.inputan}
                  name="postalcode"
                  placeholder="Postal Code"
                  onChangeText={handleChange('postalCode')}
                  onBlur={handleBlur('postalCode')}
                  keyboardType="numeric"
                />
              </View>
              {errors.postalCode && touched.postalCode && (
                <Text style={styles.errorText}>{errors.postalCode}</Text>
              )}
              <View style={styles.fild}>
                <Text style={styles.label}>Country</Text>
                <TextInput
                  style={styles.inputan}
                  name="country"
                  placeholder="Country"
                  value="Indonesia"
                />
              </View>
              <View style={styles.fild}>
                <Text style={styles.label}>Phone number</Text>
                <TextInput
                  style={styles.inputan}
                  name="recepientsNumber"
                  placeholder="Phone number"
                  onChangeText={handleChange('recepientsNumber')}
                  onBlur={handleBlur('recepientsNumber')}
                  keyboardType="number-pad"
                />
              </View>
              {errors.recepientsNumber && touched.recepientsNumber && (
                <Text style={styles.errorText}>{errors.recepientsNumber}</Text>
              )}
              <TouchableOpacity style={styles.submit} onPress={handleSubmit}>
                <Text style={styles.txtSubmit}>SAVE ADDRESS</Text>
              </TouchableOpacity>
            </>
          )}
        </Formik>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  parent: {
    flex: 1,
  },
  viewForm: {
    marginHorizontal: 10,
  },
  fild: {
    backgroundColor: 'white',
    marginVertical: 20,
    height: 64,
    borderRadius: 8,
    padding: 10,
  },
  label: {
    fontSize: 12,
    color: 'gray',
  },
  inputan: {
    fontSize: 14,
    color: 'black',
    lineHeight: 21,
    fontFamily: 'Metropolis',
  },
  submit: {
    backgroundColor: '#DB3022',
    marginVertical: 10,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    elevation: 3,
  },
  txtSubmit: {
    fontSize: 14,
    color: 'white',
  },
  errorText: {
    fontSize: 15,
    color: 'red',
  },
});

export default AddAddress;
