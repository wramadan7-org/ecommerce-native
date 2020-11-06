import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity, FlatList } from 'react-native'
import categoryActions from '../redux/actions/category'
import { connect } from 'react-redux'

class Category extends Component {
  constructor (props) {
    super(props)
    this.state = {
      data: [
        {
          name: 'Wahyu Ramdan',
          phone: '082257022981'
        },
        {
          name: 'Wahyu Candra Krisna',
          phone: '082257022990'
        }
      ]
    }
  }

  componentDidMount () {
    const { data } = this.state
    // this.setState({data: this.props.})
    // console.log(this.props.getCategory().payload)
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
          renderItem={({ item, index }) => (
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

const mapStateToProps = state => ({
  category: state.category
})

const mapDispatchToProps = {
  getCategory: categoryActions.getData
}

export default connect(mapStateToProps, mapDispatchToProps)(Category)
