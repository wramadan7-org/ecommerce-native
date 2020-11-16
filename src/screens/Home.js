import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  ImageBackground,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {TouchableOpacity} from 'react-native-gesture-handler';

import {connect} from 'react-redux';
import productActions from '../redux/actions/products';

// imageBackground
const img = {uri: 'https://reactjs.org/logo-og.png'};

class Home extends Component {
  componentDidMount() {
    this.props.getProducts();
    this.props.auth;
  }

  render() {
    const {isLoading, isError, alertMsg, data} = this.props.products;
    return (
      <ScrollView style={styles.scrollParent}>
        <View style={styles.parent}>
          <View style={styles.header}>
            {/* this background **/}
            <ImageBackground source={img} style={styles.imgHeader}>
              <TouchableOpacity style={styles.btnIcon}>
                <Icon name="bell-o" size={30} />
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
                <Text style={styles.subtitleBody}>
                  You've never seen it before
                </Text>
              </View>

              <View style={styles.viewAll}>
                <Text style={styles.textViewAll}>View all</Text>
              </View>
            </View>
            <ScrollView style={styles.scrollCard} horizontal>
              <View style={styles.listCard}>
                {!isLoading &&
                  !isError &&
                  data.length > 0 &&
                  data.map((o) => (
                    <TouchableOpacity
                      style={styles.card}
                      onPress={() =>
                        this.props.navigation.navigate('Detail', {
                          id_item: o.id_item,
                        })
                      }
                      key={o.id_item}>
                      <View style={styles.imgCard}>
                        <Image
                          style={styles.tinyLogo}
                          source={{
                            uri: 'https://reactnative.dev/img/tiny_logo.png',
                          }}
                        />
                      </View>
                      {/* <Text>{o.id_item}</Text> */}
                      <View style={styles.textCard}>
                        <View style={styles.viewStar}>
                          <Icon name="star" size={15} />
                          <Icon name="star" size={15} />
                          <Icon name="star" size={15} />
                          <Icon name="star" size={15} />
                        </View>
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
                <Text style={styles.subtitleBody}>
                  You've never seen it before
                </Text>
              </View>

              <View style={styles.viewAll}>
                <Text style={styles.textViewAll}>View all</Text>
              </View>
            </View>
            <ScrollView style={styles.scrollCard} horizontal>
              <View style={styles.listCard}>
                {!isLoading &&
                  !isError &&
                  data.length > 0 &&
                  data.map((o) => (
                    <TouchableOpacity
                      style={styles.card}
                      onPress={() =>
                        this.props.navigation.navigate('Detail', {
                          id_item: o.id_item,
                        })
                      }
                      key={o.id_item}>
                      <View style={styles.imgCard}>
                        <Image
                          style={styles.tinyLogo}
                          source={{
                            uri: 'https://reactnative.dev/img/tiny_logo.png',
                          }}
                        />
                      </View>
                      <View style={styles.textCard}>
                        <View style={styles.viewStar}>
                          <Icon name="star" size={15} />
                          <Icon name="star" size={15} />
                          <Icon name="star" size={15} />
                          <Icon name="star" size={15} />
                        </View>
                        <Text style={styles.tipe}>{o.category}</Text>
                        <Text style={styles.boldCard}>{o.name}</Text>
                        <Text style={styles.boldCard}>Rp {o.price}</Text>
                      </View>
                    </TouchableOpacity>
                  ))}
              </View>
            </ScrollView>
            {/* </ScrollView> */}
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  body: {
    // flex: 6,
    backgroundColor: 'white',
    padding: 20,
  },
  boldCard: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  btnIcon: {
    alignItems: 'center',
    alignSelf: 'flex-end',
    height: 100,
    justifyContent: 'center',
    width: 100,
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
    // elevation: 1,
  },
  header: {
    // flex: 1,
    height: 400,
  },
  imgCard: {
    borderRadius: 20,
    height: 170,
    // borderWidth: 1
  },
  imgHeader: {
    flex: 1,
    resizeMode: 'cover',
    // justifyContent: 'flex-end'
  },
  listCard: {
    // backgroundColor: 'yellow',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  parent: {
    flex: 1,
  },
  scrollCard: {
    height: 350,
  },
  scrollParent: {
    flex: 1,
  },
  subtitleBody: {
    color: 'gray',
    fontSize: 12,
  },
  textBody: {
    // flex: 1
    //  backgroundColor: 'blue'
  },
  textCard: {
    padding: 5,
  },
  textGroupHome: {
    //  backgroundColor: 'red',
    flexDirection: 'row',
    marginVertical: 10,
  },
  textHeader: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
    //  backgroundColor: 'yellow',
    // position: 'absolute',
    paddingBottom: 10,
  },
  tinyLogo: {
    alignSelf: 'center',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    height: '100%',
    width: '100%',
  },
  tipe: {
    color: 'gray',
    fontSize: 12,
  },
  titleBody: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  viewAll: {
    alignItems: 'flex-end',
    flex: 1,
    justifyContent: 'center',
  },
  viewStar: {
    flexDirection: 'row',
  },
  viewTextHeader: {
    // borderWidth: 1,
    alignItems: 'flex-start',
    flex: 1,
    justifyContent: 'flex-end',
  },
});

const mapStateToProps = (state) => ({
  auth: state.auth,
  products: state.products,
});

const mapDispatchToProps = {
  getProducts: productActions.getProducts,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
