import React from 'react';
import {
  View,
  Text,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import successBackground from '../assets/logo/success.png';

const Success = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ImageBackground source={successBackground} style={styles.background}>
        <View style={styles.viewInsideBackground}>
          <View style={styles.viewSuccess}>
            <Text style={styles.txtSuccess}>Success</Text>
          </View>

          <View style={styles.viewDesc}>
            <Text style={styles.txtDesc}>
              Your order will be delivered soon.
            </Text>

            <Text style={styles.txtDesc}>Thank you for choosing our app!</Text>
          </View>

          <View style={styles.viewBtn}>
            <TouchableOpacity
              style={styles.btn}
              onPress={() => navigation.navigate('Category')}>
              <Text style={styles.txtBtn}>Continue shopping</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
    alignItems: 'center',
  },
  viewInsideBackground: {
    alignItems: 'center',
    marginTop: 121,
  },
  viewSuccess: {
    marginVertical: 16,
    height: 34,
  },
  txtSuccess: {
    fontSize: 34,
    lineHeight: 34,
    fontWeight: 'bold',
  },
  viewDesc: {
    height: 48,
    width: 262,
    marginVertical: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  txtDesc: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '500',
  },
  viewBtn: {
    width: 160,
    height: 36,
    marginVertical: 16,
    justifyContent: 'center',
  },
  btn: {
    backgroundColor: '#DB3022',
    borderRadius: 100,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  txtBtn: {
    color: 'white',
    fontSize: 14,
    lineHeight: 20,
  },
});

export default Success;
