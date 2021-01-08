import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
  // Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {connect} from 'react-redux';
import detailActions from '../redux/actions/products';
import cartActions from '../redux/actions/cart';

import {APP_URL} from '@env';

// imageBackground
const img = {uri: 'https://reactjs.org/logo-og.png'};

class DetailProduct extends Component {
  constructor(props) {
    super(props);
    // console.log('props', props);
    this.state = {
      id: this.props.route.params.id_item,
      qty: 1,
      alertMsg: '',
    };
  }

  componentDidMount() {
    this.props.getDetail(this.state.id);
  }

  klik = (cek) => {
    return cek;
  };

  sendToCart = (id_item) => {
    const {qty} = this.state;
    console.log('send', this.props.auth);
    const sendCart = {
      id_item,
      qty,
    };
    this.props.addCart(this.props.auth.token, sendCart);
  };

  render() {
    const {isLoading, isError, data, alertMsg} = this.props.detailProduct;
    const loadingProduct = this.props.products.isLoading;
    const errorProduct = this.props.products.isError;
    const dataProduct = this.props.products.data;
    // const alertProduct = this.props.products.alertMsg;
    // console.log(dataProduct);
    // console.log('data', this.props.detailProduct);
    return (
      <ScrollView style={styles.scrollParent}>
        {/* container */}
        <View style={styles.parent}>
          {/* header */}
          {!isLoading && !isError && data && (
            <View style={styles.header}>
              <ImageBackground
                source={
                  data.picture?.length > 0
                    ? {uri: `${APP_URL}${data.picture}`}
                    : img
                }
                style={styles.imgHeader}
              />
            </View>
          )}
          {isLoading && !isError && (
            <View style={styles.loadingImage}>
              <ActivityIndicator size="large" color="blue" />
            </View>
          )}
          <View style={styles.body}>
            {/* ukuran */}
            {!isLoading && !isError && data && (
              <>
                <View style={styles.choosing}>
                  <View style={styles.options}>
                    <TouchableOpacity style={styles.btnOptions}>
                      <Text>Size</Text>
                      <Icon name="angle-down" size={15} color="black" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnOptions}>
                      <Text>{data.color}</Text>
                      <Icon name="angle-down" size={15} color="black" />
                    </TouchableOpacity>
                  </View>
                  <View style={styles.fav}>
                    <TouchableOpacity style={styles.btnFav}>
                      <Icon name="heart-o" size={20} />
                    </TouchableOpacity>
                  </View>
                </View>
                <View style={styles.subtitleProduct}>
                  <View>
                    <Text style={styles.merkProduct}>{data.name}</Text>
                    <Text style={styles.modelProduct}>{data.category}</Text>
                    <View style={styles.viewStar}>
                      <Icon name="star" size={15} />
                      <Icon name="star" size={15} />
                      <Icon name="star" size={15} />
                      <Icon name="star" size={15} />
                    </View>
                  </View>
                  <View>
                    <Text
                      style={styles.priceProduct}>{`Rp ${data.price}`}</Text>
                  </View>
                </View>
                <View style={styles.descriptProduct}>
                  <Text style={styles.txtDescription}>{data.description}</Text>
                </View>
              </>
            )}
            <View style={styles.groupBtnInfo}>
              <TouchableOpacity style={styles.btnInfo}>
                <Text>Shipping Info</Text>
                <Icon name="chevron-right" />
              </TouchableOpacity>

              <TouchableOpacity style={styles.btnInfo}>
                <Text>Support</Text>
                <Icon name="chevron-right" />
              </TouchableOpacity>
            </View>
            <View style={styles.textList}>
              <Text style={styles.alsoLike}>You can also like this</Text>
              <Text style={styles.smallText}>
                {this.props.products.data?.length > 0
                  ? this.props.products.data.length
                  : 0}{' '}
                items
              </Text>
            </View>
            <ScrollView style={styles.scrollListProduct} horizontal>
              {!loadingProduct &&
                !errorProduct &&
                dataProduct &&
                dataProduct.map((o) => (
                  <TouchableOpacity
                    style={styles.card}
                    key={o.id_item}
                    onPress={() => this.klik(o.id_item)}>
                    <View>
                      <Image
                        source={
                          o.picture?.length > 0
                            ? {uri: `${APP_URL}${o.picture}`}
                            : {
                                uri:
                                  'https://reactnative.dev/img/tiny_logo.png',
                              }
                        }
                        style={styles.imgListProduct}
                      />
                    </View>
                    <View>
                      <View style={styles.viewStar}>
                        <Icon name="star" size={15} />
                        <Icon name="star" size={15} />
                        <Icon name="star" size={15} />
                        <Icon name="star" size={15} />
                      </View>
                      <Text style={styles.createdProduct}>{o.name}</Text>
                      <Text style={styles.themeProduct}>{o.category}</Text>
                      <View style={styles.prices}>
                        <Text style={styles.discounded}>{`Rp ${o.price}`}</Text>
                        <Text style={styles.discount}>{`Rp ${o.price}`}</Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                ))}
            </ScrollView>
            <View style={styles.footer}>
              <TouchableOpacity
                style={styles.btnFooter}
                onPress={() => this.sendToCart(this.state.id)}>
                <Text style={styles.addCart}>ADD TO CART</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  addCart: {
    color: 'white',
    fontSize: 14,
  },
  alsoLike: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  body: {
    // flex: 12,
    marginHorizontal: 10,
    // backgroundColor: 'blue'
  },
  btnFav: {
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 100,
    height: 50,
    justifyContent: 'center',
    width: 50,
    elevation: 2,
  },
  btnFooter: {
    alignItems: 'center',
    backgroundColor: '#DB3022',
    borderRadius: 100,
    height: 48,
    justifyContent: 'center',
    marginHorizontal: 10,
    elevation: 3,
  },
  btnInfo: {
    alignItems: 'center',
    borderBottomWidth: 1,
    flexDirection: 'row',
    height: 30,
    justifyContent: 'space-between',
  },
  btnOptions: {
    alignItems: 'center',
    backgroundColor: 'ghostwhite',
    borderRadius: 10,
    borderWidth: 0.5,
    height: 40,
    justifyContent: 'space-around',
    width: 137,
    flexDirection: 'row',
    elevation: 3,
  },
  card: {
    // borderWidth: 1,
    width: 120,
    height: 200,
    marginHorizontal: 10,
  },
  choosing: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
    // borderWidth: 1
  },
  createdProduct: {
    color: 'gray',
    fontSize: 12,
  },
  descriptProduct: {
    marginVertical: 10,
  },
  txtDescription: {
    color: 'grey',
    fontSize: 14,
    lineHeight: 21,
  },
  discounded: {
    color: 'gray',
    textDecorationLine: 'line-through',
    // fontSize:
  },
  discount: {
    color: 'red',
  },
  fav: {
    alignItems: 'flex-end',
    flex: 2,
    justifyContent: 'center',
  },
  footer: {
    backgroundColor: 'ghostwhite',
    height: 150,
    justifyContent: 'center',
  },
  groupBtnInfo: {
    marginVertical: 10,
  },
  header: {
    flex: 8,
  },
  imgHeader: {
    flex: 1,
    justifyContent: 'center',
    resizeMode: 'cover',
  },
  imgListProduct: {
    borderRadius: 10,
    height: 150,
    width: 120,
  },
  listProduct: {
    borderWidth: 1,
    height: 300,
  },
  merkProduct: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  modelProduct: {
    color: 'gray',
    fontSize: 15,
  },
  options: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // borderWidth: 1,
    flex: 9,
    alignItems: 'center',
  },
  parent: {
    // backgroundColor: 'red',
    flex: 1,
    height: 1000,
  },
  priceProduct: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  prices: {
    // flexDirection: 'row',
  },
  scrollListProduct: {
    marginHorizontal: 10,
    // borderWidth: 1,
    height: 300,
  },
  scrollParent: {
    flex: 1,
    // backgroundColor: 'yellow'
  },
  smallText: {
    color: 'gray',
    fontSize: 12,
  },
  subtitleProduct: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  textList: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    marginVertical: 10,
  },
  themeProduct: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  viewStar: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  loadingImage: {
    flex: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const mapStateToProps = (state) => ({
  auth: state.auth,
  products: state.products,
  detailProduct: state.detailProduct,
  addCartState: state.addCart,
});

const mapDispatchToProps = {
  getDetail: detailActions.getDetailProduct,
  addCart: cartActions.createCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailProduct);
