import React, { Component } from 'react'
import { Text, View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import { SearchBar } from 'react-native-elements'

export default class ShippingAddress extends Component {
  constructor (props) {
    super(props)
    this.state = {
      search: ''
    }
  }

  render () {
    console.log(this.state.search)
    return (
      <ScrollView style={styles.scrollViewParent}>
        <View style={styles.viewSearch}>
          <SearchBar style={styles.searchBar} placeholder='Type here...' lightTheme round onChangeText={(search) => this.setState({ search })} />
        </View>
        <View style={styles.viewShippingAddress}>
          <Text style={styles.textShippingAddress}>Shipping address</Text>
        </View>
        <View style={styles.viewGrupCard}>
          <TouchableOpacity style={styles.card}>
            <View style={styles.descript}>
              <View style={styles.viewDirection}>
                <Text style={styles.pName}>Jane Doe</Text>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('ChangeAddress')}>
                  <Text style={styles.change}>Change</Text>
                </TouchableOpacity>
              </View>
              <Text style={styles.pHome}>3 Newbridge Court</Text>
              <Text style={styles.pAddress}>Chino Hills, CA 91709, United States</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.card}>
            <View style={styles.descript}>
              <View style={styles.viewDirection}>
                <Text style={styles.pName}>Jane Doe</Text>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('ChangeAddress')}>
                  <Text style={styles.change}>Change</Text>
                </TouchableOpacity>
              </View>
              <Text style={styles.pHome}>3 Newbridge Court</Text>
              <Text style={styles.pAddress}>Chino Hills, CA 91709, United States</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.card}>
            <View style={styles.descript}>
              <View style={styles.viewDirection}>
                <Text style={styles.pName}>Jane Doe</Text>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('ChangeAddress')}>
                  <Text style={styles.change}>Change</Text>
                </TouchableOpacity>
              </View>
              <Text style={styles.pHome}>3 Newbridge Court</Text>
              <Text style={styles.pAddress}>Chino Hills, CA 91709, United States</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.card}>
            <View style={styles.descript}>
              <View style={styles.viewDirection}>
                <Text style={styles.pName}>Jane Doe</Text>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('ChangeAddress')}>
                  <Text style={styles.change}>Change</Text>
                </TouchableOpacity>
              </View>
              <Text style={styles.pHome}>3 Newbridge Court</Text>
              <Text style={styles.pAddress}>Chino Hills, CA 91709, United States</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.card}>
            <View style={styles.descript}>
              <View style={styles.viewDirection}>
                <Text style={styles.pName}>Jane Doe</Text>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('ChangeAddress')}>
                  <Text style={styles.change}>Change</Text>
                </TouchableOpacity>
              </View>
              <Text style={styles.pHome}>3 Newbridge Court</Text>
              <Text style={styles.pAddress}>Chino Hills, CA 91709, United States</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.card}>
            <View style={styles.descript}>
              <View style={styles.viewDirection}>
                <Text style={styles.pName}>Jane Doe</Text>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('ChangeAddress')}>
                  <Text style={styles.change}>Change</Text>
                </TouchableOpacity>
              </View>
              <Text style={styles.pHome}>3 Newbridge Court</Text>
              <Text style={styles.pAddress}>Chino Hills, CA 91709, United States</Text>
            </View>
          </TouchableOpacity>

          <View style={styles.viewBtnAdd}>
            <TouchableOpacity style={styles.addAddress} onPress={() => this.props.navigation.navigate('AddAddress')}>
              <Text style={styles.textAddNew}>ADD NEW ADDRESS</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  scrollViewParent: {
    flex: 1,
    marginHorizontal: 10
  },
  //   searchBar: {
  //    //  height: 2,
  //    //  borderWidth: 2
  //   },
  viewShippingAddress: {
    marginVertical: 15
  },
  textShippingAddress: {
    fontSize: 15,
    fontWeight: 'bold'
  },
  viewGrupCard: {
    marginVertical: 10
  },
  card: {
    backgroundColor: 'ghostwhite',
    borderRadius: 10,
    alignItems: 'center',
    height: 120,
    //  shadowOpacity: 2
    marginVertical: 10
  },
  descript: {
    width: '100%',
    padding: 10,
    justifyContent: 'center',
    height: '100%'
  },
  viewDirection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10
  },
  pName: {
    fontSize: 16
  },
  change: {
    color: 'red',
    textAlignVertical: 'top'
  },
  viewBtnAdd: {
    height: 100
  },
  addAddress: {
    // backgroundColor: 'transparant',
    borderWidth: 1,
    height: 50,
    width: '100%',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
