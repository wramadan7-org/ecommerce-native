import React, { Component } from 'react'
import { Text, View, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

export default class Bag extends Component {
  render () {
    return (
      <View>
        <ScrollView>
          <View style={styles.parent}>
            <View style={styles.iconSearch}>
              <TouchableOpacity>
                <Icon name='search' size={20} />
              </TouchableOpacity>
            </View>
            <Text style={styles.textHeader}>My Bag</Text>
            <View style={styles.cart}>
              <View style={styles.groupInChart}>
                <View style={styles.groupLeft}>
                  <Image style={styles.tinyLogo} source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }} />
                  <View style={styles.centerCart}>
                    <Text>T-Shirt</Text>
                    <View style={styles.descript}>
                      <View style={styles.desc}>
                        <Text>Color :</Text>
                        <Text> Gray</Text>
                      </View>
                      <View style={styles.desc}>
                        <Text>Size :</Text>
                        <Text> L</Text>
                      </View>
                    </View>
                    <View style={styles.btnGroup}>
                      <TouchableOpacity style={styles.btn}>
                        <Text> - </Text>
                      </TouchableOpacity>
                      <Text> 1 </Text>
                      <TouchableOpacity style={styles.btn}>
                        <Text> + </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
                <View>
                  <Text> : </Text>
                  <Text> . </Text>
                  <Text>30$</Text>
                </View>
              </View>
            </View>

            <View style={styles.cart}>
              <View style={styles.groupInChart}>
                <View style={styles.groupLeft}>
                  <Image style={styles.tinyLogo} source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }} />
                  <View style={styles.centerCart}>
                    <Text>T-Shirt</Text>
                    <View style={styles.descript}>
                      <View style={styles.desc}>
                        <Text>Color :</Text>
                        <Text> Gray</Text>
                      </View>
                      <View style={styles.desc}>
                        <Text>Size :</Text>
                        <Text> L</Text>
                      </View>
                    </View>
                    <View style={styles.btnGroup}>
                      <TouchableOpacity style={styles.btn}>
                        <Text> - </Text>
                      </TouchableOpacity>
                      <Text> 1 </Text>
                      <TouchableOpacity style={styles.btn}>
                        <Text> + </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
                <View>
                  <Text> : </Text>
                  <Text> . </Text>
                  <Text>30$</Text>
                </View>
              </View>
            </View>

            <View style={styles.cart}>
              <View style={styles.groupInChart}>
                <View style={styles.groupLeft}>
                  <Image style={styles.tinyLogo} source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }} />
                  <View style={styles.centerCart}>
                    <Text>T-Shirt</Text>
                    <View style={styles.descript}>
                      <View style={styles.desc}>
                        <Text>Color :</Text>
                        <Text> Gray</Text>
                      </View>
                      <View style={styles.desc}>
                        <Text>Size :</Text>
                        <Text> L</Text>
                      </View>
                    </View>
                    <View style={styles.btnGroup}>
                      <TouchableOpacity style={styles.btn}>
                        <Text> - </Text>
                      </TouchableOpacity>
                      <Text> 1 </Text>
                      <TouchableOpacity style={styles.btn}>
                        <Text> + </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
                <View>
                  <Text> : </Text>
                  <Text> . </Text>
                  <Text>30$</Text>
                </View>
              </View>
            </View>

            <View style={styles.cart}>
              <View style={styles.groupInChart}>
                <View style={styles.groupLeft}>
                  <Image style={styles.tinyLogo} source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }} />
                  <View style={styles.centerCart}>
                    <Text>T-Shirt</Text>
                    <View style={styles.descript}>
                      <View style={styles.desc}>
                        <Text>Color :</Text>
                        <Text> Gray</Text>
                      </View>
                      <View style={styles.desc}>
                        <Text>Size :</Text>
                        <Text> L</Text>
                      </View>
                    </View>
                    <View style={styles.btnGroup}>
                      <TouchableOpacity style={styles.btn}>
                        <Text> - </Text>
                      </TouchableOpacity>
                      <Text> 1 </Text>
                      <TouchableOpacity style={styles.btn}>
                        <Text> + </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
                <View>
                  <Text> : </Text>
                  <Text> . </Text>
                  <Text>30$</Text>
                </View>
              </View>
            </View>

            <View style={styles.cart}>
              <View style={styles.groupInChart}>
                <View style={styles.groupLeft}>
                  <Image style={styles.tinyLogo} source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }} />
                  <View style={styles.centerCart}>
                    <Text>T-Shirt</Text>
                    <View style={styles.descript}>
                      <View style={styles.desc}>
                        <Text>Color :</Text>
                        <Text> Gray</Text>
                      </View>
                      <View style={styles.desc}>
                        <Text>Size :</Text>
                        <Text> L</Text>
                      </View>
                    </View>
                    <View style={styles.btnGroup}>
                      <TouchableOpacity style={styles.btn}>
                        <Text> - </Text>
                      </TouchableOpacity>
                      <Text> 1 </Text>
                      <TouchableOpacity style={styles.btn}>
                        <Text> + </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
                <View>
                  <Text> : </Text>
                  <Text> . </Text>
                  <Text>30$</Text>
                </View>
              </View>
            </View>

            <View style={styles.cart}>
              <View style={styles.groupInChart}>
                <View style={styles.groupLeft}>
                  <Image style={styles.tinyLogo} source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }} />
                  <View style={styles.centerCart}>
                    <Text>T-Shirt</Text>
                    <View style={styles.descript}>
                      <View style={styles.desc}>
                        <Text>Color :</Text>
                        <Text> Gray</Text>
                      </View>
                      <View style={styles.desc}>
                        <Text>Size :</Text>
                        <Text> L</Text>
                      </View>
                    </View>
                    <View style={styles.btnGroup}>
                      <TouchableOpacity style={styles.btn}>
                        <Text> - </Text>
                      </TouchableOpacity>
                      <Text> 1 </Text>
                      <TouchableOpacity style={styles.btn}>
                        <Text> + </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
                <View>
                  <Text> : </Text>
                  <Text> . </Text>
                  <Text>30$</Text>
                </View>
              </View>
            </View>

            <View style={styles.cart}>
              <View style={styles.groupInChart}>
                <View style={styles.groupLeft}>
                  <Image style={styles.tinyLogo} source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }} />
                  <View style={styles.centerCart}>
                    <Text>T-Shirt</Text>
                    <View style={styles.descript}>
                      <View style={styles.desc}>
                        <Text>Color :</Text>
                        <Text> Gray</Text>
                      </View>
                      <View style={styles.desc}>
                        <Text>Size :</Text>
                        <Text> L</Text>
                      </View>
                    </View>
                    <View style={styles.btnGroup}>
                      <TouchableOpacity style={styles.btn}>
                        <Text> - </Text>
                      </TouchableOpacity>
                      <Text> 1 </Text>
                      <TouchableOpacity style={styles.btn}>
                        <Text> + </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
                <View>
                  <Text> : </Text>
                  <Text> . </Text>
                  <Text>30$</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.footer}>
            <View style={styles.textGroupFooter}>
              <Text>Total amount</Text>
              <Text>112$</Text>
            </View>
            <TouchableOpacity style={styles.btnFooter} onPress={() => this.props.navigation.navigate('Checkout')}>
              <Text style={styles.checkout}>CHECK OUT</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  parent: {
    padding: 10
  },
  iconSearch: {
    marginVertical: 10,
    alignSelf: 'flex-end'
  },
  textHeader: {
    fontSize: 35,
    fontWeight: 'bold',
    marginBottom: 15
  },
  tinyLogo: {
    width: 70,
    height: 70
  },
  descript: {
    flexDirection: 'row'
  },
  desc: {
    flexDirection: 'row',
    marginRight: 20
  },
  btnGroup: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  btn: {
    backgroundColor: 'white',
    shadowOpacity: 10,
    borderRadius: 100,
    width: 30,
    padding: 5,
    alignItems: 'center'
  },
  groupInChart: {
    flexDirection: 'row',
    // borderWidth: 1,
    // backgroundColor: 'ghostwhite',
    justifyContent: 'space-between'
  },
  groupLeft: {
    flexDirection: 'row'
  },
  cart: {
    marginVertical: 10,
    backgroundColor: 'ghostwhite',
    padding: 10
  },
  centerCart: {
    marginLeft: 10
  },
  footer: {
    backgroundColor: 'ghostwhite',
    height: 150
  },
  textGroupFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 25,
    marginHorizontal: 10
  },
  btnFooter: {
    backgroundColor: 'gray',
    borderRadius: 100,
    alignItems: 'center',
    padding: 10,
    marginHorizontal: 10
  },
  checkout: {
    color: 'white'
  }
})
