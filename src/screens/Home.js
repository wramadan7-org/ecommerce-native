import React, { Component } from 'react'
import {
  View, Text, StyleSheet, ScrollView, Image, ImageBackground
} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
// imageBackground
const img = { uri: 'https://reactjs.org/logo-og.png' }

class Home extends Component {
  render () {
    // for bacground
    return (
      <ScrollView style={styles.scrollParent}>
        <View style={styles.parent}>
          <View style={styles.header}>
            {/* this background **/}
            <ImageBackground source={img} style={styles.imgHeader}>
              <Text style={styles.textHeader}>Fashion sale</Text>
            </ImageBackground>
          </View>

          <View style={styles.body}>
            {/* <ScrollView style={styles.scrollBody}> */}
            <View style={styles.textGroupHome}>
              <View style={styles.textBody}>
                <Text style={styles.titleBody}>New</Text>
                <Text style={styles.subtitleBody}>You've never seen it before</Text>
              </View>

              <View style={styles.viewAll}>
                <Text style={styles.textViewAll}>View all</Text>
              </View>
            </View>
            <ScrollView style={styles.scrollCard} horizontal>
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
            <ScrollView style={styles.scrollCard} horizontal>
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
              </View>
            </ScrollView>
            {/* </ScrollView> */}
          </View>
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  scrollParent: {
    flex: 1
  },
  parent: {
    flex: 1,
    height: 1000
    // backgroundColor: 'gray'
  },
  header: {
    flex: 8
  },
  textHeader: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
    //  backgroundColor: 'yellow',
    position: 'absolute'
  },
  body: {
    // flex: 6,
    backgroundColor: 'white',
    padding: 20
  },
  textGroupHome: {
    //  backgroundColor: 'red',
    flexDirection: 'row',
    marginVertical: 10
  },
  textBody: {
    // flex: 1
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
    // backgroundColor: 'yellow',
    flexDirection: 'row',
    justifyContent: 'flex-start'
  },
  card: {
    //  backgroundColor: 'red',
    // borderWidth: 1,
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
    // backgroundColor: 'gray',
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
  imgHeader: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'flex-end'
  }
})

export default Home
