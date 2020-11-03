import React, { Component } from 'react'
import { Text, View, StyleSheet, ScrollView, TouchableOpacity, FlatList } from 'react-native'

class Category extends Component {
  state = {
    data : [
      {
        name: 'Wahyu Candra Krisna',
        phone: '085765665789 '
      },
      {
        name: 'Wahyu Ramadan',
        phone: '082257022981'
      },
      {
        name: 'Wahyu Aldyansah',
        phone: '082678115262'
      },
      {
        name: 'name',
        phone: 'xxxxx'
      },
      {
        name: 'name',
        phone: 'xxxxx'
      },
      {
        name: 'name',
        phone: 'xxxxx'
      },
      {
        name: 'name',
        phone: 'xxxxx'
      },
      {
        name: 'name',
        phone: 'xxxxx'
      },
      {
        name: 'name',
        phone: 'xxxxx'
      },
      {
        name: 'name',
        phone: 'xxxxx'
      },
      {
        name: 'name',
        phone: 'xxxxx'
      },
      {
        name: 'name',
        phone: 'xxxxx'
      },
      {
        name: 'name',
        phone: 'xxxxx'
      },
      {
        name: 'name',
        phone: 'xxxxx'
      },
      {
        name: 'name',
        phone: 'xxxxx'
      },
      {
        name: 'name',
        phone: 'xxxxx'
      },
      {
        name: 'name',
        phone: 'xxxxx'
      },
      {
        name: 'Rama',
        phone: 'xxxxx'
      }
    ]
  }
  render () {
    return (
      // <ScrollView>
        <View style={styles.parent}>
          <TouchableOpacity style={styles.btnAllItems} onPress={() => console.log('Klik')}>
            <Text style={styles.textViewAll}>VIEW ALL ITEMS</Text>
          </TouchableOpacity>
          <Text style={styles.choose}>Choose category</Text>
          <FlatList
            style={styles.flatListCategory}
            data={this.state.data}
            renderItem={({item, index}) => (
              <TouchableOpacity style={styles.listCategory}>
                <Text style={styles.itemTextStyle}>{item.name}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
      // </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  parent: {
    margin: 10
  },
  btnAllItems: {
    backgroundColor: 'gray',
    width: '100%',
    alignItems: 'center',
    borderRadius: 100,
    height: 40,
    justifyContent: 'center'
  },
  flatListCategory: {
    marginVertical: 15
  },
  listCategory: {
    borderBottomWidth: 1,
    borderColor: 'gray',
    height: 35,
    justifyContent: 'center',
    marginVertical: 5
  },
  itemTextStyle: {
    fontSize: 15
  },
  textViewAll: {
    color: 'white'
  },
  choose: {
    marginVertical: 10,
    color: 'gray'
  }
})

export default Category
