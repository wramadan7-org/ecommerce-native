import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Main from './Main';
// import actions
import {doLogin, logout} from '../redux/actions/auth';
import {myProfile} from '../redux/actions/profile';
// import connect
import {connect} from 'react-redux';

class Profile extends Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     logout: ''
  //   }
  // }

  // logout = () => {
  //   this.props.logout()
  // }

  // componentDidMount() {
  // if (this.props.auth.isLogin === false) {
  //   this.props.navigation.navigate(<Main />)
  // }
  // }

  render() {
    return (
      <ScrollView>
        <View style={styles.parent}>
          <View style={styles.icon}>
            <TouchableOpacity>
              <Icon name="search" size={20} />
            </TouchableOpacity>
          </View>
          <Text style={styles.textHeader}>My profile</Text>
          <View style={styles.pp}>
            <View>
              <Image
                style={styles.tinyLogo}
                source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}
              />
            </View>
            <View style={styles.textGroupPP}>
              <Text style={styles.nameProfile}>Matilda Brown</Text>
              <Text style={styles.emailProfile}>matildabrown@gmail.com</Text>
            </View>
          </View>
          <View style={styles.groupBtn}>
            <TouchableOpacity
              style={styles.btn}
              onPress={() => this.props.navigation.navigate('MyOrder')}>
              <View>
                <Text>My orders</Text>
                <Text>Already have 12 orders</Text>
              </View>
              <View>
                <Text> > </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.btn}
              onPress={() => this.props.navigation.navigate('ShippingAddress')}>
              <View>
                <Text>Shipping address</Text>
                <Text>3 address</Text>
              </View>
              <View>
                <Text> > </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn}>
              <View>
                <Text>Setting</Text>
                <Text>Notifications, password</Text>
              </View>
              <View>
                <Text> > </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn}>
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
  parent: {
    padding: 5,
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
    marginVertical: 5,
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
  icon: {
    alignSelf: 'flex-end',
    marginVertical: 10,
  },
});

// const mapStateToProps = state => ({
//   auth: state.auth,
//   profile: state.profile
// })

// const mapDispatchToProps = {
//   doLogin, logout, myProfile
// }

export default Profile;
