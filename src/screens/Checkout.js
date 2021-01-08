import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import {CheckBox} from 'react-native-elements';
import mastercardImg from '../assets/logo/mastercard.png';
import posIndonesiaImg from '../assets/logo/posIndonesia.jpg';
import gopayImg from '../assets/logo/gopay.jpg';

export default class Checkout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      check: false,
    };
  }

  checklistBox = () => {
    const {check} = this.state;
    if (check === false) {
      this.setState({check: true});
    } else {
      this.setState({check: false});
    }
  };

  render() {
    return (
      <ScrollView style={styles.scrollParent}>
        <View style={styles.viewShippingAddress}>
          <Text style={styles.textShippingaddress}>Shipping address</Text>
        </View>
        <View style={styles.viewCard}>
          <TouchableOpacity style={styles.card}>
            <View style={styles.viewTextCard}>
              <View>
                <View style={styles.textCardDirections}>
                  <Text style={styles.textName}>Jane Doe</Text>
                </View>
                <View>
                  <Text>3 Newbridge Court</Text>
                  <Text>Chino Hills, CA 91709, United States</Text>
                </View>
              </View>
              <View style={styles.viewBtnChange}>
                <TouchableOpacity
                  onPress={() =>
                    this.props.navigation.navigate('ChangeAddress')
                  }>
                  <Text style={styles.textChange}>Change</Text>
                </TouchableOpacity>
              </View>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.viewPayment}>
          <Text style={styles.textPayment}>Payment</Text>
        </View>
        <View style={styles.listPayment}>
          <View style={styles.logoPayment}>
            <Image style={styles.tinyLogo} source={mastercardImg} />
            <Text style={styles.methodPayment}>Mastercard</Text>
          </View>
          <CheckBox checked={this.state.check} onPress={this.checklistBox} />
        </View>

        <View style={styles.listPayment}>
          <View style={styles.logoPayment}>
            <Image style={styles.tinyLogo} source={posIndonesiaImg} />
            <Text style={styles.methodPayment}>Pos Indonesia</Text>
          </View>
          <CheckBox checked={this.state.check} onPress={this.checklistBox} />
        </View>

        <View style={styles.listPayment}>
          <View style={styles.logoPayment}>
            <Image style={styles.tinyLogo} source={gopayImg} />
            <Text style={styles.methodPayment}>Gopay</Text>
          </View>
          <CheckBox checked={this.state.check} onPress={this.checklistBox} />
        </View>

        <View style={styles.footer}>
          <View style={styles.textGroupFooter}>
            <Text style={styles.textFooter}>Order:</Text>
            <Text style={styles.priceFooter}>112$</Text>
          </View>
          <View style={styles.textGroupFooter}>
            <Text style={styles.textFooter}>Delivery:</Text>
            <Text style={styles.priceFooter}>112$</Text>
          </View>
          <View style={styles.textGroupFooter}>
            <Text style={styles.textFooter}>Summary:</Text>
            <Text style={styles.priceFooter}>112$</Text>
          </View>
          <TouchableOpacity
            style={styles.btnFooter}
            onPress={() => this.props.navigation.navigate('Success')}>
            <Text style={styles.checkout}>CHECK OUT</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  scrollParent: {
    flex: 1,
    marginHorizontal: 10,
  },
  viewShippingAddress: {
    marginVertical: 15,
  },
  textShippingaddress: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  viewCard: {
    marginVertical: 10,
    //  borderWidth: 1
  },
  card: {
    padding: 10,
    backgroundColor: 'white',
    height: 108,
    justifyContent: 'center',
    borderRadius: 10,
  },
  viewTextCard: {
    flexDirection: 'row',
  },
  textName: {
    fontWeight: 'bold',
    fontSize: 15,
  },
  textChange: {
    color: 'red',
    fontSize: 15,
  },
  textCardDirections: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  viewPayment: {
    marginVertical: 15,
  },
  textPayment: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  listPayment: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 15,
  },
  logoPayment: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  tinyLogo: {
    width: 64,
    height: 38,
    //   resizeMode: 'cover',
    justifyContent: 'center',
    borderRadius: 6,
  },
  methodPayment: {
    fontSize: 21,
    lineHeight: 21,
    fontWeight: '400',
    marginLeft: 29,
    color: 'black',
  },
  footer: {
    backgroundColor: 'ghostwhite',
    height: 231,
  },
  textGroupFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 15,
    marginHorizontal: 10,
  },
  textFooter: {
    color: 'gray',
    fontSize: 14,
  },
  priceFooter: {
    fontWeight: 'bold',
    fontSize: 16,
    color: 'black',
  },
  btnFooter: {
    backgroundColor: '#DB3022',
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    marginHorizontal: 10,
    height: 48,
    elevation: 3,
    marginVertical: 20,
  },
  checkout: {
    color: 'white',
    fontSize: 14,
    lineHeight: 20,
  },
  viewBtnChange: {
    flex: 1,
    alignItems: 'flex-end',
  },
});
