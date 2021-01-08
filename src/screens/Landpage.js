import React, {Component, createRef} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import Animated from 'react-native-reanimated';
import BottomSheet from 'reanimated-bottom-sheet';

// import image
import logo from '../assets/logo/logo.png';
class Landpage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      snapPoints: [0, 0, 0],
    };
  }

  renderContent = () => (
    <View style={styles.viewBottomSheet}>
      <View style={styles.viewTitleBottomSheet}>
        <Text style={styles.textTitleBottomSheet}>Select size</Text>
      </View>
      <View style={styles.viewBtnBottomSheet}>
        <TouchableOpacity style={styles.btnBottomSheet}>
          <Text style={styles.textBtnBottomSheet}>XS</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnBottomSheet}>
          <Text style={styles.textBtnBottomSheet}>S</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnBottomSheet}>
          <Text style={styles.textBtnBottomSheet}>M</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnBottomSheet}>
          <Text style={styles.textBtnBottomSheet}>L</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnBottomSheet}>
          <Text style={styles.textBtnBottomSheet}>XL</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  render() {
    const sheetRef = createRef(null);
    return (
      <View style={styles.parent}>
        <View style={styles.viewLogo}>
          {/* <Text style={styles.logo}>R</Text> */}
          <Image source={logo} style={styles.logo} />
        </View>

        <TouchableOpacity
          style={styles.btn}
          onPress={() => this.props.navigation.navigate('Login')}>
          <Text style={styles.textBtn}>LOGIN</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.btn}
          onPress={() => this.props.navigation.navigate('Register')}>
          <Text style={styles.textBtn}>REGISTER</Text>
        </TouchableOpacity>

        {/* <TouchableOpacity
          style={styles.btn}
          onPress={() => {
            sheetRef.current.snapTo(null),
              this.setState({snapPoints: [500, 500, 0]});
          }}>
          <Text style={styles.textBtn}>Bottom Sheet</Text>
        </TouchableOpacity> */}
        <BottomSheet
          ref={sheetRef}
          snapPoints={this.state.snapPoints}
          borderRadius={10}
          renderContent={this.renderContent}
          enabledContentTapInteraction={false}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    backgroundColor: 'ghostwhite',
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewLogo: {
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#757575',
    width: 150,
    height: 150,
    borderRadius: 100,
    marginVertical: 50,
  },
  logo: {
    // fontSize: 145,
    // fontWeight: 'bold',
    // color: 'white'
    width: 160,
    height: 160,
  },
  btn: {
    backgroundColor: '#DB3022',
    width: '70%',
    height: 45,
    margin: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    marginVertical: 10,
    // elevation: 4
  },
  textBtn: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'white',
  },
  viewBottomSheet: {
    backgroundColor: 'gray',
    padding: 15,
    height: 450,
  },
  viewTitleBottomSheet: {
    margin: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textTitleBottomSheet: {
    fontFamily: 'times news roman',
    fontWeight: '800',
    fontSize: 17,
  },
  viewBtnBottomSheet: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    // justifyContent: 'space-between'
  },
  btnBottomSheet: {
    backgroundColor: 'white',
    width: 110,
    height: 50,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    // marginHorizontal: 10,
    margin: 5,
  },
  textBtnBottomSheet: {
    color: 'black',
    fontFamily: 'times news roman',
    fontSize: 15,
    fontWeight: '600',
  },
});

export default Landpage;
