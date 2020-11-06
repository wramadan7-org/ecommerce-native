import React, { Component } from 'react'
import {
  View, Text, StyleSheet, ScrollView, Image, ImageBackground
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { TouchableOpacity } from 'react-native-gesture-handler'

import { connect } from 'react-redux'
import productActions from '../redux/actions/products'

// imageBackground
const img = { uri: 'https://reactjs.org/logo-og.png' }

class Home extends Component {
  componentDidMount () {
    console.log('aa', this.props.auth)
    console.log('produc', this.props.products)
    console.log('HAHA', this.props.getProducts())
  }

  render () {
    const { isLoading, isError, alertMsg, data } = this.props.products
    return (
      <ScrollView style={styles.scrollParent}>
        <View style={styles.parent}>
          <View style={styles.header}>
            {/* this background **/}
            <ImageBackground source={img} style={styles.imgHeader}>
              <TouchableOpacity style={styles.btnIcon}>
                <Icon name='bell' size={30} />
              </TouchableOpacity>
              <View style={styles.viewTextHeader}>
                <Text style={styles.textHeader}>Secret clothes</Text>
              </View>
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
                {!isLoading && !isError && data.length > 0 && data.map(o => (
                  <TouchableOpacity style={styles.card} onPress={() => this.props.navigation.navigate('Detail', { id_item: o.id_item })} key={o.id_item}>
                    <View style={styles.imgCard}>
                      <Image style={styles.tinyLogo} source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }} />
                    </View>
                    {/* <Text>{o.id_item}</Text> */}
                    <View style={styles.textCard}>
                      <Text style={styles.bintang}>Bintang</Text>
                      <Text style={styles.tipe}>{o.category}</Text>
                      <Text style={styles.boldCard}>{o.name}</Text>
                      <Text style={styles.boldCard}>Rp {o.price}</Text>
                    </View>
                  </TouchableOpacity>
                ))}
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
                {!isLoading && !isError && data.length > 0 && data.map(o => (
                  <TouchableOpacity style={styles.card} onPress={() => this.props.navigation.navigate('Detail', { id_item: o.id_item })} key={o.id_item}>
                    <View style={styles.imgCard}>
                      <Image style={styles.tinyLogo} source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }} />
                    </View>
                    <Text style={styles.bintang}>Bintang</Text>
                    <Text style={styles.tipe}>{o.category}</Text>
                    <Text style={styles.boldCard}>{o.name}</Text>
                    <Text style={styles.boldCard}>Rp {o.price}</Text>
                  </TouchableOpacity>
                ))}
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
    flex: 1
  },
  header: {
    // flex: 1,
    height: 400
  },
  btnIcon: {
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end'
  },
  viewTextHeader: {
    // borderWidth: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    flex: 1
  },
  textHeader: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
    //  backgroundColor: 'yellow',
    // position: 'absolute',
    paddingBottom: 10
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
    width: 130,
    height: 320,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderRadius: 10,
    marginHorizontal: 5,
    // marginVertical: 5,
    backgroundColor: 'white',
    elevation: 2
  },
  imgCard: {
    borderRadius: 20,
    height: 170
    // borderWidth: 1
  },
  tinyLogo: {
    width: '100%',
    height: '100%',
    alignSelf: 'center',
    borderRadius: 20
  },
  textCard: {
    padding: 5
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
    resizeMode: 'cover'
    // justifyContent: 'flex-end'
  }
})

const mapStateToProps = state => ({
  auth: state.auth,
  products: state.products
})

const mapDispatchToProps = {
  getProducts: productActions.getProducts
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
