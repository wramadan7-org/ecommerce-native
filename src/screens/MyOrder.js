import React, { Component } from 'react'
import { Text, View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'

export default class MyOrder extends Component {
  render () {
    return (
      <ScrollView style={styles.scrollParent}>
        <View style={styles.viewMyOrder}>
          <Text style={styles.textMyOrder}>My Orders</Text>
        </View>
        <View style={styles.viewGrupCard}>
          <TouchableOpacity style={styles.card}>
            <View style={styles.cardTextGrup}>
              <View style={styles.textDirec}>
                <Text style={styles.boldText}>Order No 1947034</Text>
                <Text style={styles.grayText}>05-12-2019</Text>
              </View>
              <View style={styles.groupDetail}>
                <Text style={styles.grayText}>Tracking number: </Text>
                <Text style={styles.boldText}>IWDD7879</Text>
              </View>
              <View style={styles.groupDetail}>
                <Text style={styles.grayText}>Quantity:  </Text>
                <Text style={styles.boldText}>3</Text>
              </View>
              <View style={styles.groupDetail}>
                <Text style={styles.grayText}>Total Amount: </Text>
                <Text style={styles.boldText}>122$</Text>
              </View>
              <View style={styles.viewDelivered}>
                <Text style={styles.textDeliver}>Delivered</Text>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.card}>
            <View style={styles.cardTextGrup}>
              <View style={styles.textDirec}>
                <Text style={styles.boldText}>Order No 1947034</Text>
                <Text style={styles.grayText}>05-12-2019</Text>
              </View>
              <View style={styles.groupDetail}>
                <Text style={styles.grayText}>Tracking number: </Text>
                <Text style={styles.boldText}>IWDD7879</Text>
              </View>
              <View style={styles.groupDetail}>
                <Text style={styles.grayText}>Quantity:  </Text>
                <Text style={styles.boldText}>3</Text>
              </View>
              <View style={styles.groupDetail}>
                <Text style={styles.grayText}>Total Amount: </Text>
                <Text style={styles.boldText}>122$</Text>
              </View>
              <View style={styles.viewDelivered}>
                <Text style={styles.textDeliver}>Delivered</Text>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.card}>
            <View style={styles.cardTextGrup}>
              <View style={styles.textDirec}>
                <Text style={styles.boldText}>Order No 1947034</Text>
                <Text style={styles.grayText}>05-12-2019</Text>
              </View>
              <View style={styles.groupDetail}>
                <Text style={styles.grayText}>Tracking number: </Text>
                <Text style={styles.boldText}>IWDD7879</Text>
              </View>
              <View style={styles.groupDetail}>
                <Text style={styles.grayText}>Quantity:  </Text>
                <Text style={styles.boldText}>3</Text>
              </View>
              <View style={styles.groupDetail}>
                <Text style={styles.grayText}>Total Amount: </Text>
                <Text style={styles.boldText}>122$</Text>
              </View>
              <View style={styles.viewDelivered}>
                <Text style={styles.textDeliver}>Delivered</Text>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.card}>
            <View style={styles.cardTextGrup}>
              <View style={styles.textDirec}>
                <Text style={styles.boldText}>Order No 1947034</Text>
                <Text style={styles.grayText}>05-12-2019</Text>
              </View>
              <View style={styles.groupDetail}>
                <Text style={styles.grayText}>Tracking number: </Text>
                <Text style={styles.boldText}>IWDD7879</Text>
              </View>
              <View style={styles.groupDetail}>
                <Text style={styles.grayText}>Quantity:  </Text>
                <Text style={styles.boldText}>3</Text>
              </View>
              <View style={styles.groupDetail}>
                <Text style={styles.grayText}>Total Amount: </Text>
                <Text style={styles.boldText}>122$</Text>
              </View>
              <View style={styles.viewDelivered}>
                <Text style={styles.textDeliver}>Delivered</Text>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.card}>
            <View style={styles.cardTextGrup}>
              <View style={styles.textDirec}>
                <Text style={styles.boldText}>Order No 1947034</Text>
                <Text style={styles.grayText}>05-12-2019</Text>
              </View>
              <View style={styles.groupDetail}>
                <Text style={styles.grayText}>Tracking number: </Text>
                <Text style={styles.boldText}>IWDD7879</Text>
              </View>
              <View style={styles.groupDetail}>
                <Text style={styles.grayText}>Quantity:  </Text>
                <Text style={styles.boldText}>3</Text>
              </View>
              <View style={styles.groupDetail}>
                <Text style={styles.grayText}>Total Amount: </Text>
                <Text style={styles.boldText}>122$</Text>
              </View>
              <View style={styles.viewDelivered}>
                <Text style={styles.textDeliver}>Delivered</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  scrollParent: {
    flex: 1,
    marginHorizontal: 10
  },
  viewMyOrder: {
    marginVertical: 10
  },
  textMyOrder: {
    fontWeight: 'bold',
    fontSize: 50
  },
  viewGrupCard: {
    marginVertical: 10
  },
  card: {
    marginVertical: 10,
    backgroundColor: 'ghostwhite',
    borderRadius: 10,
    height: 130,
    padding: 10,
    justifyContent: 'center'
  },
  cardTextGrup: {
    //  alignItems: 'center'
  },
  textDirec: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  viewDelivered: {
    alignSelf: 'flex-end'
  },
  boldText: {
    fontWeight: 'bold'
  },
  grayText: {
    color: 'gray'
  },
  groupDetail: {
    flexDirection: 'row'
  },
  textDeliver: {
    color: 'green'
  }
})
