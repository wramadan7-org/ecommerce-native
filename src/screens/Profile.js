import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {APP_URL} from '@env';
import photoDefault from '../assets/images/default.jpg';
// import connect
import {connect} from 'react-redux';
import moment from 'moment';

// import actions
import authActions from '../redux/actions/auth';
import profileActions from '../redux/actions/profile';
import ImagePicker from 'react-native-image-picker';

class Profile extends Component {
  constructor(props) {
    super(props);
    console.log('props', props);
    this.state = {
      alertMsg: '',
      avatar: null,
      sourceImage: null,
    };
  }

  async choose() {
    let options = {
      mediaType: 'photo',
      noData: true,
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    await ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
        // eslint-disable-next-line no-alert
        alert(response.customButton);
      } else {
        const source = {
          uri: response.uri,
          type: response.type,
          name: response.fileName,
        };
        this.setState({avatar: source.name});
        this.setState({sourceImage: source});
        const fm = new FormData();
        fm.append('name', this.props.profileState.data.name);
        fm.append('email', this.props.profileState.data.email);
        fm.append(
          'birthdate',
          this.props.profileState.data.date?.length > 0
            ? moment(this.props.profileState.data.date).format('Y-MM-DD')
            : '',
        );
        fm.append(
          'gender',
          this.props.profileState.data.gender?.length > 0
            ? this.props.profileState.data.gender
            : '',
        );
        fm.append(
          'phone',
          this.props.profileState.data.phone?.length > 0
            ? this.props.profileState.data.phone
            : '',
        );
        fm.append('photo', source);
        const updated = this.props.dispatchPhoto(
          this.props.authState.token,
          fm,
        );
        if (updated && this.props.updatePhotoState.status) {
          Alert.alert('Success', 'Data has ben updated');
          this.props.profile(this.props.authState.token);
        } else {
          Alert.alert('Fail', 'Fill column correctly');
        }
      }
    });
  }

  componentDidMount() {
    this.props.profile(this.props.authState.token);
  }

  logout = async () => {
    this.props.logout();
    await Alert.alert('Success', 'Logout successfully!');
  };

  render() {
    const {isLoading, isError, data, alertMsg} = this.props.profileState;
    return (
      <ScrollView style={styles.scrollParent}>
        <View style={styles.parent}>
          {isLoading && !isError && (
            <ActivityIndicator size="large" color="blue" />
          )}
          {this.props.updatePhotoState.isLoading &&
            !this.props.updatePhotoState.isError && (
              <ActivityIndicator size="large" color="blue" />
            )}
          <View style={styles.icon}>
            {/* <TouchableOpacity>
              <Icon name="search" size={20} />
            </TouchableOpacity> */}
          </View>
          {!isLoading && !isError && data && (
            <>
              <Text style={styles.textHeader}>My profile</Text>
              <View style={styles.pp}>
                <TouchableOpacity onPress={() => this.choose()}>
                  <Image
                    style={styles.tinyLogo}
                    source={
                      data.image?.length
                        ? {uri: `${APP_URL}${data.image}`}
                        : photoDefault
                    }
                  />
                </TouchableOpacity>
                <View style={styles.textGroupPP}>
                  <Text style={styles.nameProfile}>{data.name}</Text>
                  <Text style={styles.emailProfile}>{data.email}</Text>
                </View>
              </View>
            </>
          )}
          <View style={styles.groupBtn}>
            <TouchableOpacity
              style={styles.btn}
              onPress={() => this.props.navigation.navigate('MyOrder')}>
              <View>
                <Text>My orders</Text>
                <Text>Already have 12 orders</Text>
              </View>
              <View>
                <Icon name="chevron-right" />
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.btn}
              onPress={() => this.props.navigation.navigate('ShippingAddress')}>
              <View>
                <Text>Shipping address</Text>
                {this.props.addressState.dataAddress?.length > 0 ? (
                  <Text>
                    {this.props.addressState.dataAddress.length} address
                  </Text>
                ) : (
                  <Text>0 address</Text>
                )}
              </View>
              <View>
                <Icon name="chevron-right" />
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.btn}
              onPress={() => this.props.navigation.navigate('Settings')}>
              <View>
                <Text>Setting</Text>
                <Text>Notifications, password</Text>
              </View>
              <View>
                <Icon name="chevron-right" />
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn} onPress={() => this.logout()}>
              <View>
                <Text>Logout</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  scrollParent: {
    // height: 1,
    // borderWidth: 2,
    // borderColor: 'red'
    // borderWidth: 10
  },
  parent: {
    padding: 5,
    flex: 1,
  },
  textHeader: {
    fontSize: 35,
    fontWeight: 'bold',
  },
  tinyLogo: {
    width: 70,
    height: 70,
    borderRadius: 100,
  },
  pp: {
    flexDirection: 'row',
    marginVertical: 15,
    alignItems: 'center',
  },
  textGroupPP: {
    marginLeft: 10,
  },
  groupBtn: {
    marginVertical: 20,
  },
  btn: {
    backgroundColor: 'ghostwhite',
    // marginVertical: 10,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  nameProfile: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  emailProfile: {
    color: 'gray',
    fontSize: 12,
  },
});

const mapStateToProps = (state) => ({
  authState: state.auth,
  profileState: state.profile,
  updatePhotoState: state.editProfile,
  addressState: state.address,
});

const mapDispatchToProps = {
  logout: authActions.logout,
  profile: profileActions.myProfile,
  dispatchPhoto: profileActions.updatePhotoProfile,
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
