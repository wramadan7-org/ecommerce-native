import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native'
import { useForm } from 'react-hook-form'
import { Form, Input } from 'native-base'

export default function AddAddress () {
  const { register, handleSubmit, watch, errors } = useForm()
  const [fullname, setFullname] = useState('')
  const [address, setAddress] = useState('')
  const [city, setCity] = useState('')
  const [state, setState] = useState('')
  const [postalcode, setPostalCode] = useState('')
  const [country, setCountry] = useState('')
  console.log(fullname)
  console.log(address)
  console.log(city)
  console.log(state)
  console.log(postalcode)
  console.log(country)
  return (
    <View style={styles.parent}>
      <View style={styles.viewForm}>
        <Form>
          <View style={styles.fild}>
            <Text style={styles.label}>Full name</Text>
            <TextInput style={styles.inputan} name='fullname' placeholder='Full name' onChangeText={setFullname} />
          </View>
          <View style={styles.fild}>
            <Text style={styles.label}>Address</Text>
            <TextInput style={styles.inputan} name='address' placeholder='Address' onChangeText={setAddress} />
          </View>
          <View style={styles.fild}>
            <Text style={styles.label}>City</Text>
            <TextInput style={styles.inputan} name='city' placeholder='City' onChangeText={setCity} />
          </View>
          <View style={styles.fild}>
            <Text style={styles.label}>State</Text>
            <TextInput style={styles.inputan} name='state' placeholder='State/Province/Region' onChangeText={setState} />
          </View>
          <View style={styles.fild}>
            <Text style={styles.label}>Zip Code (Postal Code)</Text>
            <TextInput style={styles.inputan} name='postalcode' placeholder='Postal Code' onChangeText={setPostalCode} />
          </View>
          <View style={styles.fild}>
            <Text style={styles.label}>Country</Text>
            <TextInput style={styles.inputan} name='country' placeholder='Country' onChangeText={setCountry} />
          </View>
          <TouchableOpacity style={styles.submit}>
            <Text>SAVE ADDRESS</Text>
          </TouchableOpacity>
        </Form>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  parent: {
    flex: 1
  },
  viewForm: {
    marginHorizontal: 10
  },
  fild: {
    backgroundColor: 'ghostwhite',
    marginVertical: 10,
    height: 60,
    borderRadius: 8,
    padding: 5
  },
  label: {
    fontSize: 12,
    color: 'gray'
  },
  submit: {
    backgroundColor: 'gray',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100
  }
})
