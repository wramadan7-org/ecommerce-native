import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Alert,
  ActivityIndicator,
  ScrollView,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Formik} from 'formik';
import * as yup from 'yup';
import {useSelector, useDispatch} from 'react-redux';
import addressActions from '../redux/actions/address';

const ChangeAddress = ({route}) => {
  const {token} = useSelector((state) => state.auth);
  const addressState = useSelector((state) => state.address);

  let {id} = route.params;
  console.log('id dari luar', id);
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(addressActions.addressByParams(token, id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const addressSchema = yup.object().shape({
    homeAddress: yup.string().required('Please enter city or subdistrict'),
    recepientsName: yup.string().required('Please enter your name'),
    recepientsNumber: yup.string().required('Please enter your phone number'),
    address: yup.string().required('Please enter your address'),
    postalCode: yup.string().required('Please enter your postal code'),
    city: yup.string().required('Please enter your city'),
  });

  const changed = (values) => {
    console.log(values);
  };

  return (
    <View>
      <ScrollView>
        <View>
          <Formik
            validationSchema={addressSchema}
            initialValues={{
              homeAddress: '',
              recepientsName:
                addressState.paramsAddress?.length > 0
                  ? addressState.paramsAddress[0].recepients_name
                  : '',
              recepientsNumber:
                addressState.paramsAddress?.length > 0
                  ? addressState.paramsAddress[0].recepients_number
                  : '',
              address:
                addressState.paramsAddress?.length > 0
                  ? addressState.paramsAddress[0].address
                  : '',
              postalCode:
                addressState.paramsAddress?.length > 0
                  ? addressState.paramsAddress[0].postal_code
                  : '',
              city:
                addressState.paramsAddress?.length > 0
                  ? addressState.paramsAddress[0].city
                  : '',
            }}
            onSubmit={console.log('APAPAPAp')}>
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
                <View style={styles.grup}>
                  <Text style={styles.label}>
                    Save address as (ex: home, address, office, address)
                  </Text>
                  <TextInput placeholder="Ex" style={styles.textInput} />

                  <Text style={styles.label}>Recepient's name</Text>
                  <TextInput
                    style={styles.textInput}
                    placeholder="Recepient Name"
                    value={values.recepientsName}
                    onChangeText={handleChange('recepientsName')}
                    onBlur={handleBlur('recepientsName')}
                  />
                  {errors.recepientsName && touched.recepientsName && (
                    <Text style={styles.errorsText}>
                      {errors.recepientsName}
                    </Text>
                  )}
                </View>

                <View style={styles.grup}>
                  <Text style={styles.label}>Address</Text>
                  <TextInput
                    style={styles.textInput}
                    placeholder="Address"
                    value={values.address}
                    onChangeText={handleChange('address')}
                    onBlur={handleBlur('address')}
                  />
                  {errors.address && touched.address && (
                    <Text style={styles.errorsText}>{errors.address}</Text>
                  )}

                  <Text style={styles.label}>City or Subdistrict</Text>
                  <TextInput
                    style={styles.textInput}
                    placeholder="City"
                    value={values.city}
                    onChangeText={handleChange('city')}
                    onBlur={handleBlur('city')}
                  />
                  {errors.city && touched.city && (
                    <Text style={styles.errorsText}>{errors.city}</Text>
                  )}

                  <Text style={styles.label}>Postal code</Text>
                  <TextInput
                    style={styles.textInput}
                    placeholder="Code"
                    value={values.postalCode.toString()}
                    onChangeText={handleChange('postalCode')}
                    onBlur={handleBlur('postalCode')}
                    keyboardType="numeric"
                  />
                  {errors.postalCode && touched.postalCode && (
                    <Text style={styles.errorsText}>{errors.postalCode}</Text>
                  )}
                </View>

                <View style={styles.grup}>
                  <Text style={styles.label}>Recepient's telephone number</Text>
                  <TextInput
                    style={styles.textInput}
                    placeholder="Phone"
                    value={values.recepientsNumber}
                    onChangeText={handleChange('recepientsNumber')}
                    onBlur={handleBlur('recepientsNumber')}
                    keyboardType="numeric"
                  />
                  {errors.recepientsNumber && touched.recepientsNumber && (
                    <Text style={styles.errorsText}>
                      {errors.recepientsNumber}
                    </Text>
                  )}
                </View>

                <TouchableOpacity
                  style={styles.btn}
                  onPress={() => handleSubmit}>
                  <Text style={styles.txtBtn}>SAVE ADDRESS</Text>
                </TouchableOpacity>
              </>
            )}
          </Formik>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  grup: {
    marginVertical: 20,
    marginHorizontal: 16,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
  },
  btn: {
    height: 50,
    backgroundColor: '#DB3022',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    marginHorizontal: 10,
    elevation: 3,
  },
  txtBtn: {
    color: 'white',
    fontWeight: '500',
    fontSize: 14,
  },
  textInput: {
    borderBottomWidth: 1,
    marginBottom: 20,
    fontSize: 14,
    lineHeight: 20,
    color: 'black',
  },
  label: {
    color: 'grey',
    fontSize: 10,
  },
  errorsText: {
    fontSize: 13,
    marginVertical: 5,
    color: 'red',
  },
});

export default ChangeAddress;
