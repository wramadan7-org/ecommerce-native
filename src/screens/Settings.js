import React, {useState, useRef, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Switch,
  Alert,
} from 'react-native';
import {Formik} from 'formik';
import * as yup from 'yup';
import BottomSheet from 'reanimated-bottom-sheet';
import {useSelector, useDispatch} from 'react-redux';
import profileActions from '../redux/actions/profile';
import moment from 'moment';

function Settings({navigation}) {
  // for notif switch
  const [isSales, setIsSales] = useState(false);
  const toggleSwitchSales = () => setIsSales((previousState) => !previousState);

  const [isArrival, setIsArrival] = useState(false);
  const toggleSwitchArrival = () =>
    setIsArrival((previousState) => !previousState);

  const [isDelivery, setIsDelivery] = useState(false);
  const toggleSwitchDelivery = () =>
    setIsDelivery((previousState) => !previousState);

  // selec state from index reducer
  const selectorAuth = useSelector((state) => state.auth);
  const selectorDataProfile = useSelector((state) => state.profile);
  const {isLoading, isError, data, alertMsg} = selectorDataProfile;
  const changePasswordState = useSelector((state) => state.changePassword);
  const changeDataProfileState = useSelector((state) => state.editProfile);

  const dispatch = useDispatch();

  // inside bottom sheets
  const [snapPoints, setSnapPoints] = useState([0, 0, 0]);

  // bottom sheet
  const sheetRef = useRef(null);

  const editValidationSchema = yup.object().shape({
    name: yup.string().required('Name is required'),
    email: yup
      .string()
      .email('Please enter valid email')
      .required('Email Address is Required'),
    date: yup.date().required('Date is Required'),
    password: yup.string().required(),
  });

  useEffect(() => {
    dispatch(profileActions.myProfile(selectorAuth.token));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [changePasswordState, changeDataProfileState]);

  // inside bottom sheets
  const renderContent = () => {
    const changePasswordSchema = yup.object().shape({
      oldPassword: yup
        .string()
        .min(8, ({min}) => `Old password must be at least ${min} characters`)
        .required('Old password is required'),
      newPassword: yup
        .string()
        .min(8, ({min}) => `New password must be at least ${min} characters`)
        .required(),
      confirmPassword: yup
        .string()
        .oneOf([yup.ref('newPassword')], 'Password do not match')
        .min(
          8,
          ({min}) => `Confirm password must be at least ${min} characters`,
        )
        .required('Confirm password is required'),
    });

    const change = async (values) => {
      console.log('password', changePasswordState);
      const pressChange = await dispatch(
        profileActions.changePassword(selectorAuth.token, values),
      );
      // console.log('ssssssssss', pressChange);
      if (pressChange.action.payload.data.success) {
        await Alert.alert('Success', 'Password has been change', [
          {
            text: 'OK',
            onPress: () => navigation.navigate('Profile'),
          },
        ]);
        // await dispatch(profileActions.clearPassword());
      } else {
        await Alert.alert('Fail', pressChange.action.payload.data.message);
      }
      // await dispatch(profileActions.clearPassword());
    };

    return (
      <View style={styles.bgBottomSheet}>
        <Formik
          initialValues={{
            oldPassword: '',
            newPassword: '',
            confirmPassword: '',
          }}
          validationSchema={changePasswordSchema}
          onSubmit={(values) => change(values)}>
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
              <View>
                <Text>Password Change</Text>
              </View>

              <View style={styles.inputGroup}>
                <TextInput
                  style={styles.input}
                  placeholder="Old Password"
                  onBlur={handleBlur('oldPassword')}
                  onChangeText={handleChange('oldPassword')}
                  autoCapitalize="none"
                  secureTextEntry
                />
              </View>
              {errors.oldPassword && touched.oldPassword && (
                <Text style={styles.errorText}>{errors.oldPassword}</Text>
              )}

              <View style={styles.viewForgot}>
                <Text style={styles.textForgot}>Forgot Password?</Text>
              </View>

              <View style={styles.inputGroup}>
                <TextInput
                  style={styles.input}
                  placeholder="New Password"
                  onBlur={handleBlur('newPassword')}
                  onChangeText={handleChange('newPassword')}
                  autoCapitalize="none"
                  secureTextEntry
                />
              </View>
              {errors.newPassword && touched.newPassword && (
                <Text style={styles.errorText}>{errors.newPassword}</Text>
              )}

              <View style={styles.inputGroup}>
                <TextInput
                  style={styles.input}
                  placeholder="Repeat New Password"
                  onBlur={handleBlur('confirmPassword')}
                  onChangeText={handleChange('confirmPassword')}
                  autoCapitalize="none"
                  secureTextEntry
                />
              </View>
              {errors.confirmPassword && touched.confirmPassword && (
                <Text style={styles.errorText}>{errors.confirmPassword}</Text>
              )}

              <TouchableOpacity
                style={styles.btn}
                onPress={handleSubmit}
                disabled={!isValid}>
                <Text style={styles.textBtn}>SAVE PASSWORD</Text>
              </TouchableOpacity>
            </>
          )}
        </Formik>
      </View>
    );
  };

  return (
    <View style={styles.parent}>
      <ScrollView style={styles.scrollParent}>
        <View style={styles.viewHeader}>
          <Text style={styles.textHeader}>Settings</Text>
        </View>
        <View style={styles.viewTitle}>
          <Text style={styles.title}>Personal Information</Text>
          <TouchableOpacity onPress={() => navigation.navigate('EditProfile')}>
            <Text style={styles.textChange}>Change</Text>
          </TouchableOpacity>
        </View>
        {!isLoading && !isError && data && (
          <Formik
            validationSchema={editValidationSchema}
            initialValues={{
              name: data.name,
              date: data.date,
              email: data.email,
              image: data.image,
              password: data.password,
            }}
            onSubmit={(values) => console.log(values)}>
            {({
              handleBlur,
              handleChange,
              handleSubmit,
              values,
              errors,
              isValid,
              touched,
            }) => (
              <>
                <View style={styles.inputGroup}>
                  <TextInput
                    style={styles.input}
                    onChangeText={handleChange('name')}
                    onBlur={handleBlur('name')}
                    value={values.name}
                    placeholder="Full name"
                    editable={false}
                  />
                  {errors.name && touched.name && (
                    <Text style={styles.errorText}>{errors.name}</Text>
                  )}
                </View>

                <View style={styles.inputGroup}>
                  <Text style={styles.label}>Date of Birth</Text>
                  <TextInput
                    style={styles.input}
                    onChangeText={handleChange('date')}
                    onBlur={handleBlur('date')}
                    value={moment(values.date).format('Y-MM-DD')}
                    placeholder="Date of Birth"
                    editable={false}
                  />
                </View>

                <View style={styles.viewTitle}>
                  <Text style={styles.title}>Password</Text>
                  <TouchableOpacity
                    onPress={() => {
                      sheetRef.current.snapTo(0), setSnapPoints([450, 0, 0]);
                    }}>
                    <Text style={styles.textChange}>Change</Text>
                  </TouchableOpacity>
                </View>

                <View style={styles.inputGroup}>
                  <Text style={styles.label}>Password</Text>
                  <TextInput
                    style={styles.input}
                    onChangeText={handleChange('password')}
                    onBlur={handleBlur('password')}
                    value={'password'}
                    placeholder="Password"
                    secureTextEntry
                    editable={false}
                  />
                  {/* {(errors.password && touched.password) &&
                           <Text style={styles.errorText}>{errors.password}</Text>
                        } */}
                </View>

                <View style={styles.viewNotif}>
                  <Text style={styles.title}>Notifications</Text>

                  <View style={styles.viewSwitch}>
                    <View>
                      <Text style={styles.textInNotif}>Sales</Text>
                    </View>
                    <View>
                      <Switch
                        trackColor={{false: '#767577', true: '#ff6d00 '}}
                        thumbColor={isSales ? '#32CD32' : '#f4f3f4'}
                        onValueChange={toggleSwitchSales}
                        value={isSales}
                      />
                    </View>
                  </View>

                  <View style={styles.viewSwitch}>
                    <View>
                      <Text style={styles.textInNotif}>New arrivals</Text>
                    </View>
                    <View>
                      <Switch
                        trackColor={{false: '#767577', true: '#ff6d00 '}}
                        thumbColor={isArrival ? '#32CD32' : '#f4f3f4'}
                        onValueChange={toggleSwitchArrival}
                        value={isArrival}
                        style={styles.switch}
                      />
                    </View>
                  </View>

                  <View style={styles.viewSwitch}>
                    <View>
                      <Text style={styles.textInNotif}>
                        Delivery status change
                      </Text>
                    </View>
                    <View>
                      <Switch
                        trackColor={{false: '#767577', true: '#ff6d00 '}}
                        thumbColor={isDelivery ? '#32CD32' : '#f4f3f4'}
                        onValueChange={toggleSwitchDelivery}
                        value={isDelivery}
                      />
                    </View>
                  </View>

                  {/* <TouchableOpacity
                    style={styles.btn}
                    onPress={handleSubmit}
                    disabled={!isValid}>
                    <Text style={styles.textBtn}>EDIT</Text>
                  </TouchableOpacity> */}
                </View>
              </>
            )}
          </Formik>
        )}
      </ScrollView>

      {/* bottom sheet */}
      <BottomSheet
        ref={sheetRef}
        snapPoints={snapPoints}
        borderRadius={10}
        renderContent={renderContent}
        enabledContentTapInteraction={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    // padding: 10,
  },
  scrollParent: {
    flex: 1,
    padding: 10,
  },
  viewHeader: {
    height: 100,
    width: 200,
    // borderWidth: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  textHeader: {
    fontWeight: 'bold',
    // fontFamily: 'times new roman',
    fontSize: 35,
  },
  title: {
    fontWeight: '900',
    fontSize: 17,
    marginVertical: 10,
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
    // elevation: 1,
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
  viewTitle: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 30,
    //  borderWidth: 1,
    justifyContent: 'space-between',
  },
  textChange: {
    fontSize: 15,
    color: 'grey',
  },
  viewNotif: {
    marginVertical: 20,
  },
  viewSwitch: {
    justifyContent: 'space-between',
    alignItems: 'center',
    // borderWidth: 1,
    flexDirection: 'row',
    height: 50,
  },
  textInNotif: {
    fontSize: 15,
  },
  bgBottomSheet: {
    backgroundColor: 'lightgrey',
    padding: 16,
    height: 450,
    elevation: 1,
  },
  viewForgot: {
    marginVertical: 10,
    alignItems: 'flex-end',
  },
  textForgot: {
    color: 'darkgrey',
    fontSize: 15,
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
    fontSize: 10,
    color: 'red',
  },
});

export default Settings;
