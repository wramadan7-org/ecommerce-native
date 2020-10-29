import React, { Component } from 'react'
import {
  View, Text, StyleSheet, ScrollView, Image, ImageBackground
} from 'react-native'
// import { Card, CardItem } from 'native-base'

class Home extends Component {
  render () {
    const image = { uri: 'https://reactnative.dev/img/tiny_logo.png' }
    return (
      <View style={styles.parent}>
        <View style={styles.header}>
          <ImageBackground source={image} style={styles.image} />
          <Text style={styles.textHeader}>Fashion sale</Text>
        </View>

        <View style={styles.body}>
          <ScrollView style={styles.scrollBody}>
            <View style={styles.textGroupHome}>
              <View style={styles.textBody}>
                <Text style={styles.titleBody}>New</Text>
                <Text style={styles.subtitleBody}>You've never seen it before</Text>
              </View>

              <View style={styles.viewAll}>
                <Text style={styles.textViewAll}>View all</Text>
              </View>
            </View>
            <ScrollView style={styles.scrollCard}>
              <View style={styles.listCard}>
                <View style={styles.card}>
                  <View style={styles.imgCard}>
                    <Image style={styles.tinyLogo} source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }} />
                  </View>
                  <Text style={styles.bintang}>Bintang</Text>
                  <Text style={styles.tipe}>OVS</Text>
                  <Text style={styles.boldCard}>Blouse</Text>
                  <Text style={styles.boldCard}>$ 13</Text>
                </View>
                <View style={styles.card}>
                  <View style={styles.imgCard}>
                    <Image style={styles.tinyLogo} source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }} />
                  </View>
                  <Text style={styles.bintang}>Bintang</Text>
                  <Text style={styles.tipe}>OVS</Text>
                  <Text style={styles.boldCard}>Blouse</Text>
                  <Text style={styles.boldCard}>$ 13</Text>
                </View>
              </View>
            </ScrollView>

            <View style={styles.textGroupHome}>
              <View style={styles.textBody}>
                <Text style={styles.titleBody}>Popular</Text>
                <Text style={styles.subtitleBody}>You've never seen it before</Text>
              </View>

              <View style={styles.viewAll}>
                <Text style={styles.textViewAll}>View all</Text>
              </View>
            </View>
            <ScrollView style={styles.scrollCard}>
              <View style={styles.listCard}>
                <View style={styles.card}>
                  <View style={styles.imgCard}>
                    <Image style={styles.tinyLogo} source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }} />
                  </View>
                  <Text style={styles.bintang}>Bintang</Text>
                  <Text style={styles.tipe}>OVS</Text>
                  <Text style={styles.boldCard}>Blouse</Text>
                  <Text style={styles.boldCard}>$ 13</Text>
                </View>

                <View style={styles.card}>
                  <View style={styles.imgCard}>
                    <Image style={styles.tinyLogo} source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }} />
                  </View>
                  <Text style={styles.bintang}>Bintang</Text>
                  <Text style={styles.tipe}>OVS</Text>
                  <Text style={styles.boldCard}>Blouse</Text>
                  <Text style={styles.boldCard}>$ 13</Text>
                </View>

                <View style={styles.card}>
                  <View style={styles.imgCard}>
                    <Image style={styles.tinyLogo} source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }} />
                  </View>
                  <Text style={styles.bintang}>Bintang</Text>
                  <Text style={styles.tipe}>OVS</Text>
                  <Text style={styles.boldCard}>Blouse</Text>
                  <Text style={styles.boldCard}>$ 13</Text>
                </View>
              </View>
            </ScrollView>
          </ScrollView>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    backgroundColor: 'gray'
  },
  header: {
    flex: 2
  },
  textHeader: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
    //  backgroundColor: 'yellow',
    position: 'absolute',
    marginTop: 150
  },
  scrollBody: {
    //  margin: 2
    //  backgroundColor: 'green'
  },
  body: {
    flex: 4,
    backgroundColor: 'white',
    padding: 20
  },
  textGroupHome: {
    //  backgroundColor: 'red',
    flexDirection: 'row',
    marginVertical: 10
  },
  textBody: {
    flex: 1
    //  backgroundColor: 'blue'
  },
  titleBody: {
    fontSize: 25,
    fontWeight: 'bold'
  },
  subtitleBody: {
    color: 'gray',
    fontSize: 12
  },
  viewAll: {
    justifyContent: 'center',
    alignItems: 'flex-end',
    flex: 1
  },
  listCard: {
    //  backgroundColor: 'yellow',
    flexDirection: 'row',
    justifyContent: 'flex-start'
  },
  card: {
    //  backgroundColor: 'red',
    borderWidth: 1,
    borderColor: 'gray',
    width: 130,
    borderRadius: 10,
    marginHorizontal: 5
  },
  imgCard: {
    borderRadius: 10,
    height: 150,
    borderWidth: 1
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

export default Home
