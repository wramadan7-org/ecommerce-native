import React, { Component } from 'react'
import { Text, View, StyleSheet, TextInput } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default class ChangeAddress extends Component {
  render () {
    return (
      <View>
        <View>
          <View style={{ marginVertical: 20, backgroundColor: 'ghostwhite' }}>
            <Text>Save address as (ex: home, address, office, address)</Text>
            <TextInput placeholder='Ex' style={{ borderBottomWidth: 1 }} />
            <Text>Recepient's name</Text>
            <TextInput placeholder='Recepient Name' style={{ borderBottomWidth: 1 }} />
          </View>

          <View style={{ marginVertical: 20, backgroundColor: 'ghostwhite' }}>
            <Text>Address</Text>
            <TextInput placeholder='Address' style={{ borderBottomWidth: 1 }} />
            <Text>City or Subdistrict</Text>
            <TextInput placeholder='City' style={{ borderBottomWidth: 1 }} />
            <Text>Postal code</Text>
            <TextInput placeholder='Code' style={{ borderBottomWidth: 1 }} />
          </View>

          <View style={{ marginVertical: 20, backgroundColor: 'ghostwhite' }}>
            <Text>recepient's telephone number</Text>
            <TextInput placeholder='Phone' style={{ borderBottomWidth: 1 }} />
          </View>

          <View>
            <TouchableOpacity style={{ height: 50, backgroundColor: 'gray', borderRadius: 100, justifyContent: 'center', alignItems: 'center' }}>
              <Text>SAVE ADDRESS</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }
}
