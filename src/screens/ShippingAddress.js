/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  FlatList,
  TextInput,
} from 'react-native';
import {SearchBar} from 'react-native-elements';
import {useSelector, useDispatch} from 'react-redux';
import addressActions from '../redux/actions/address';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

// VIEW FLAT LIST/ITEM
const Item = ({
  idAddress,
  idUser,
  homeAddress,
  recepientsName,
  recepientsNumber,
  address,
  postalCode,
  city,
  onPress,
}) => {
  return (
    <TouchableOpacity style={styles.card} key={idAddress}>
      <View style={styles.descript}>
        <View style={styles.viewDirection}>
          <Text style={styles.pName}>{recepientsName}</Text>
          <TouchableOpacity onPress={onPress}>
            <Text style={styles.change}>Change</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.pHome}>{address}</Text>
        <Text
          style={
            styles.pAddress
          }>{`${city}, ${homeAddress} ${''} ${postalCode}, Indoensia`}</Text>
      </View>
    </TouchableOpacity>
  );
};

const ShippingAddress = ({navigation}) => {
  const [search, setSearch] = React.useState('');
  const addressState = useSelector((state) => state.address);
  const {token} = useSelector((state) => state.auth);
  console.log(addressState);

  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(addressActions.myShippingAddress(token));
  }, [addressState.addAddress]);

  // RENDER ITEM
  const renderItem = ({item}) => (
    <Item
      idAddress={item.id_address}
      idUser={item.id_user}
      homeAddress={item.home_address}
      recepientsName={item.recepients_name}
      recepientsNumber={item.recepients_number}
      address={item.address}
      postalCode={item.postal_code}
      city={item.city}
      onPress={() =>
        navigation.navigate('ChangeAddress', {id: item.id_address})
      }
    />
  );

  // SEARCH
  const onSearch = (values) => {
    console.log(values);
    setSearch('');
  };

  // MAIN
  return (
    <ScrollView style={styles.scrollViewParent}>
      <View style={styles.viewSearch}>
        <FontAwesome
          name="search"
          size={15}
          color="grey"
          style={styles.iconSearch}
        />
        <TextInput
          style={styles.searchBar}
          placeholder="Search"
          onChangeText={(values) => setSearch(values)}
          onSubmitEditing={() => onSearch(search)}
          defaultValue={search}
        />
      </View>
      <View style={styles.viewShippingAddress}>
        <Text style={styles.textShippingAddress}>Shipping address</Text>
      </View>
      <View style={styles.viewGrupCard}>
        <FlatList
          data={addressState.dataAddress}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />

        <View style={styles.viewBtnAdd}>
          <TouchableOpacity
            style={styles.addAddress}
            onPress={() => navigation.navigate('AddAddress')}>
            <Text style={styles.textAddNew}>ADD NEW ADDRESS</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollViewParent: {
    flex: 1,
    marginHorizontal: 10,
  },
  viewShippingAddress: {
    marginVertical: 15,
  },
  textShippingAddress: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  viewGrupCard: {
    marginVertical: 10,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
    height: 120,
    //  shadowOpacity: 2
    marginVertical: 10,
  },
  descript: {
    width: '100%',
    padding: 10,
    justifyContent: 'center',
    height: '100%',
  },
  viewDirection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  pName: {
    fontSize: 16,
  },
  change: {
    color: 'red',
    textAlignVertical: 'top',
  },
  viewBtnAdd: {
    height: 100,
  },
  addAddress: {
    // backgroundColor: 'transparant',
    borderWidth: 1,
    height: 50,
    width: '100%',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textAddNew: {
    fontSize: 14,
    fontWeight: '500',
    color: 'black',
  },
  viewSearch: {
    width: '100%',
    height: 40,
    backgroundColor: 'white',
    marginVertical: 10,
    borderRadius: 100,
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchBar: {
    padding: 10,
    flex: 1,
  },
  iconSearch: {
    marginLeft: 15,
  },
});

export default ShippingAddress;
