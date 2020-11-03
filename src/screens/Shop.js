import React, { Component } from 'react'
import { Text, View, ScrollView, StyleSheet, Image, TouchableOpacity } from 'react-native'

class Shop extends Component {
  render () {
    return (
      <ScrollView style={styles.scrollAll}>
        <View style={styles.header}>
          <Text>HEADER</Text>
          <Text onPress={() => this.props.navigation.navigate('Category')}>See all category</Text>
        </View>
        <View style={styles.body}>
          <View style={styles.listCard}>
            <TouchableOpacity style={styles.card} onPress={() => this.props.navigation.navigate('Detail')}>
              <View style={styles.imgCard}>
                <Image style={styles.tinyLogo} source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }} />
              </View>
              <Text style={styles.bintang}>Bintang</Text>
              <Text style={styles.tipe}>OVS</Text>
              <Text style={styles.boldCard}>Blouse</Text>
              <Text style={styles.boldCard}>$ 13</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.card} onPress={() => this.props.navigation.navigate('Detail')}>
              <View style={styles.imgCard}>
                <Image style={styles.tinyLogo} source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }} />
              </View>
              <Text style={styles.bintang}>Bintang</Text>
              <Text style={styles.tipe}>OVS</Text>
              <Text style={styles.boldCard}>Blouse</Text>
              <Text style={styles.boldCard}>$ 13</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.card} onPress={() => this.props.navigation.navigate('Detail')}>
              <View style={styles.imgCard}>
                <Image style={styles.tinyLogo} source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }} />
              </View>
              <Text style={styles.bintang}>Bintang</Text>
              <Text style={styles.tipe}>OVS</Text>
              <Text style={styles.boldCard}>Blouse</Text>
              <Text style={styles.boldCard}>$ 13</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.card} onPress={() => this.props.navigation.navigate('Detail')}>
              <View style={styles.imgCard}>
                <Image style={styles.tinyLogo} source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }} />
              </View>
              <Text style={styles.bintang}>Bintang</Text>
              <Text style={styles.tipe}>OVS</Text>
              <Text style={styles.boldCard}>Blouse</Text>
              <Text style={styles.boldCard}>$ 13</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.card} onPress={() => this.props.navigation.navigate('Detail')}>
              <View style={styles.imgCard}>
                <Image style={styles.tinyLogo} source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }} />
              </View>
              <Text style={styles.bintang}>Bintang</Text>
              <Text style={styles.tipe}>OVS</Text>
              <Text style={styles.boldCard}>Blouse</Text>
              <Text style={styles.boldCard}>$ 13</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.card} onPress={() => this.props.navigation.navigate('Detail')}>
              <View style={styles.imgCard}>
                <Image style={styles.tinyLogo} source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }} />
              </View>
              <Text style={styles.bintang}>Bintang</Text>
              <Text style={styles.tipe}>OVS</Text>
              <Text style={styles.boldCard}>Blouse</Text>
              <Text style={styles.boldCard}>$ 13</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    height: 100
  },
  body: {
    // backgroundColor: 'gray',
    borderWidth: 2,
    alignContent: 'center'
  },
  listCard: {
    // backgroundColor: 'yellow',
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
    justifyContent: 'space-around'
  },
  card: {
    //  backgroundColor: 'red',
    // borderWidth: 1,
    backgroundColor: 'white',
    width: 140,
    height: 270,
    borderRadius: 10,
    margin: 10,
    marginVertical: 10
  },
  imgCard: {
    borderRadius: 10,
    height: 150
    // borderWidth: 1
  },
  tinyLogo: {
    width: '100%',
    height: '100%',
    alignSelf: 'center'
  },
  scrollCard: {
    //  backgroundColor: 'gray',
    //  borderWidth: 2,
    height: 250
  },
  bintang: {
    color: 'gray'
  },
  tipe: {
    color: 'gray',
    fontSize: 12
  },
  boldCard: {
    fontWeight: 'bold',
    fontSize: 15
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center'
  }
})

export default Shop
