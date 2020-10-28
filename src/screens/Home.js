import React, { Component } from 'react'
import {
  View, Text, StyleSheet, ScrollView
} from 'react-native'
import { Card, CardItem } from 'native-base'

class Home extends Component {
  render () {
    return (
      <View style={styles.parent}>
        <ScrollView>
          <View style={styles.header}>
            <Text style={styles.textHeader}>Fashion sale</Text>
          </View>
          <View style={styles.body}>
            <View style={styles.textGroupHome}>
              <View style={styles.textBody}>
                <Text style={styles.titleBody}>New</Text>
                <Text style={styles.subtitleBody}>You've never seen it before</Text>
              </View>

              <View style={styles.viewAll}>
                <Text style={styles.textViewAll}>View all</Text>
              </View>
            </View>
            <View style={styles.cards}>
              <Card>
                <CardItem>Hallo</CardItem>
              </Card>
            </View>
          </View>
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    backgroundColor: 'gray'
  },
  header: {
    flex: 6,
    backgroundColor: 'blue'
  },
  textHeader: {
    flex: 1,
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
    textAlignVertical: 'bottom',
    backgroundColor: 'yellow',
    padding: 20
  },
  body: {
    flex: 4,
    backgroundColor: 'white',
    padding: 20
  },
  textGroupHome: {
    backgroundColor: 'red',
    flexDirection: 'row'
  },
  textBody: {
    flex: 1,
    backgroundColor: 'blue'
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
  }
})

export default Home
