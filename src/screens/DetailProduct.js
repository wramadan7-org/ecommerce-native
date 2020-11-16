import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

// imageBackground
const img = {uri: 'https://reactjs.org/logo-og.png'};

export default class DetailProduct extends Component {
  render() {
    return (
      <ScrollView style={styles.scrollParent}>
        {/* container */}
        <View style={styles.parent}>
          {/* header */}
          <View style={styles.header}>
            <ImageBackground source={img} style={styles.imgHeader} />
          </View>
          <View style={styles.body}>
            {/* ukuran */}
            <View style={styles.choosing}>
              <View style={styles.options}>
                <TouchableOpacity style={styles.btnOptions}>
                  <Text>Size</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnOptions}>
                  <Text>Black</Text>
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
                <Text style={styles.merkProduct}>H&M</Text>
                <Text style={styles.modelProduct}>Short black dress</Text>
                <Text>Bintang bintang</Text>
              </View>
              <View>
                <Text style={styles.priceProduct}>$19.0</Text>
              </View>
            </View>
            <View style={styles.descriptProduct}>
              <Text>
                Short dress in soft cotton jersey with decorative buttons down
                the front and wide, frill-trimmed
              </Text>
            </View>
            <View style={styles.groupBtnInfo}>
              <TouchableOpacity style={styles.btnInfo}>
                <Text>Shipping Info</Text>
                <Text> > </Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.btnInfo}>
                <Text>Support</Text>
                <Text> > </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.textList}>
              <Text style={styles.alsoLike}>You can also like this</Text>
              <Text style={styles.smallText}>12 items</Text>
            </View>
            <ScrollView style={styles.scrollListProduct} horizontal>
              <TouchableOpacity style={styles.card}>
                <View>
                  <Image source={img} style={styles.imgListProduct} />
                </View>
                <View>
                  <Text>Bintang</Text>
                  <Text style={styles.createdProduct}>Doroty Perkins</Text>
                  <Text style={styles.themeProduct}>Evening Dress</Text>
                  <View style={styles.prices}>
                    <Text style={styles.discounded}>15$</Text>
                    <Text style={styles.discount}>12$</Text>
                  </View>
                </View>
              </TouchableOpacity>

              <TouchableOpacity style={styles.card}>
                <View>
                  <Image source={img} style={styles.imgListProduct} />
                </View>
                <View>
                  <Text>Bintang</Text>
                  <Text style={styles.createdProduct}>Doroty Perkins</Text>
                  <Text style={styles.themeProduct}>Evening Dress</Text>
                  <View style={styles.prices}>
                    <Text style={styles.discounded}>15$</Text>
                    <Text style={styles.discount}>12$</Text>
                  </View>
                </View>
              </TouchableOpacity>

              <TouchableOpacity style={styles.card}>
                <View>
                  <Image source={img} style={styles.imgListProduct} />
                </View>
                <View>
                  <Text>Bintang</Text>
                  <Text style={styles.createdProduct}>Doroty Perkins</Text>
                  <Text style={styles.themeProduct}>Evening Dress</Text>
                  <View style={styles.prices}>
                    <Text style={styles.discounded}>15$</Text>
                    <Text style={styles.discount}>12$</Text>
                  </View>
                </View>
              </TouchableOpacity>

              <TouchableOpacity style={styles.card}>
                <View>
                  <Image source={img} style={styles.imgListProduct} />
                </View>
                <View>
                  <Text>Bintang</Text>
                  <Text style={styles.createdProduct}>Doroty Perkins</Text>
                  <Text style={styles.themeProduct}>Evening Dress</Text>
                  <View style={styles.prices}>
                    <Text style={styles.discounded}>15$</Text>
                    <Text style={styles.discount}>12$</Text>
                  </View>
                </View>
              </TouchableOpacity>

              <TouchableOpacity style={styles.card}>
                <View>
                  <Image source={img} style={styles.imgListProduct} />
                </View>
                <View>
                  <Text>Bintang</Text>
                  <Text style={styles.createdProduct}>Doroty Perkins</Text>
                  <Text style={styles.themeProduct}>Evening Dress</Text>
                  <View style={styles.prices}>
                    <Text style={styles.discounded}>15$</Text>
                    <Text style={styles.discount}>12$</Text>
                  </View>
                </View>
              </TouchableOpacity>
            </ScrollView>
            <View style={styles.footer}>
              <TouchableOpacity style={styles.btnFooter}>
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
  },
  btnFooter: {
    alignItems: 'center',
    backgroundColor: 'gray',
    borderRadius: 100,
    height: 50,
    justifyContent: 'center',
    marginHorizontal: 10,
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
    borderRadius: 5,
    borderWidth: 1,
    height: 50,
    justifyContent: 'center',
    width: 140,
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
    fontSize: 12,
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
    flexDirection: 'row',
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
});
