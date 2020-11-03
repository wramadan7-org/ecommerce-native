import React, { Component } from 'react'
import { Text, View, Image, ImageBackground, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'

// imageBackground
const img = { uri: 'https://reactjs.org/logo-og.png' }

export default class DetailProduct extends Component {
  render () {
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
                  <Text>O</Text>
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
                Short dress in soft cotton jersey with
                decorative buttons down the front and wide,
                frill-trimmed
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
    )
  }
}

const styles = StyleSheet.create({
  scrollParent: {
    flex: 1
    // backgroundColor: 'yellow'
  },
  parent: {
    // backgroundColor: 'red',
    flex: 1,
    height: 1000
  },
  header: {
    flex: 8
  },
  imgHeader: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center'
  },
  body: {
    // flex: 12,
    marginHorizontal: 10
    // backgroundColor: 'blue'
  },
  choosing: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10
    // borderWidth: 1
  },
  fav: {
    flex: 2,
    alignItems: 'flex-end',
    justifyContent: 'center'
  },
  btnFav: {
    backgroundColor: 'blue',
    borderRadius: 100,
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  options: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // borderWidth: 1,
    flex: 9,
    alignItems: 'center'
  },
  btnOptions: {
    backgroundColor: 'ghostwhite',
    width: 140,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 5

  },
  subtitleProduct: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10
  },
  merkProduct: {
    fontWeight: 'bold',
    fontSize: 25
  },
  modelProduct: {
    color: 'gray',
    fontSize: 12
  },
  priceProduct: {
    fontWeight: 'bold',
    fontSize: 25
  },
  descriptProduct: {
    marginVertical: 10
  },
  groupBtnInfo: {
    marginVertical: 10
  },
  btnInfo: {
    borderBottomWidth: 1,
    height: 30,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row'
  },
  listProduct: {
    height: 300,
    borderWidth: 1
  },
  scrollListProduct: {
    marginHorizontal: 10,
    // borderWidth: 1,
    height: 300
  },
  textList: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    alignItems: 'center',
    marginVertical: 10
  },
  alsoLike: {
    fontWeight: 'bold',
    fontSize: 20
  },
  smallText: {
    color: 'gray',
    fontSize: 12
  },
  card: {
    // borderWidth: 1,
    width: 120,
    height: 200,
    marginHorizontal: 10
  },
  imgListProduct: {
    width: 120,
    height: 150,
    borderRadius: 10
  },
  createdProduct: {
    color: 'gray',
    fontSize: 12
  },
  themeProduct: {
    fontWeight: 'bold',
    fontSize: 16
  },
  prices: {
    flexDirection: 'row'
  },
  discounded: {
    textDecorationLine: 'line-through',
    color: 'gray'
    // fontSize: 
  },
  discount: {
    color: 'red'
  },
  footer: {
    backgroundColor: 'ghostwhite',
    height: 150,
    justifyContent: 'center'
  },
  btnFooter: {
    backgroundColor: 'gray',
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    marginHorizontal: 10
  },
  addCart: {
    color: 'white'
  }
})
