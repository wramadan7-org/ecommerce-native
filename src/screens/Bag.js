import React from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  FlatList,
  RefreshControl,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import cartActions from '../redux/actions/cart';
import {useSelector, useDispatch} from 'react-redux';
import {APP_URL} from '@env';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Item = ({id, idUser, itemName, name, picture, price, qty, color}) => {
  const [quality, setQty] = React.useState(qty);
  // console.log(picture);
  return (
    <View style={styles.cart} key={id}>
      <View style={styles.groupInChart}>
        <View style={styles.groupLeft}>
          <Image
            style={styles.tinyLogo}
            source={
              picture?.length > 0
                ? {uri: `${APP_URL}${picture}`}
                : {uri: 'https://reactnative.dev/img/tiny_logo.png'}
            }
          />
          <View style={styles.centerCart}>
            <Text style={styles.nameItem}>{itemName}</Text>
            <View style={styles.descript}>
              <View style={styles.desc}>
                <Text style={styles.label}>Color :</Text>
                <Text style={styles.descItem}> {color}</Text>
              </View>
              <View style={styles.desc}>
                <Text style={styles.label}>Size :</Text>
                <Text style={styles.descItem}> L</Text>
              </View>
            </View>
            <View style={styles.btnGroup} onPress={(k) => setQty(k - 1)}>
              <TouchableOpacity style={styles.btn}>
                <FontAwesome name="minus" size={15} />
              </TouchableOpacity>
              <Text> {quality} </Text>
              <TouchableOpacity
                style={styles.btn}
                onPress={(t) => setQty(t + 1)}>
                <FontAwesome name="plus" size={15} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View>
          <TouchableOpacity>
            <FontAwesome name="ellipsis-v" size={15} color="grey" />
          </TouchableOpacity>
          <Text style={styles.price}>{`Rp ${price}`}</Text>
        </View>
      </View>
    </View>
  );
};

const Bag = ({navigation}) => {
  const [total, setTotal] = React.useState(0);
  const [refreshing, setRefreshing] = React.useState(false);

  const {token} = useSelector((state) => state.auth);
  const getCartState = useSelector((state) => state.cart);
  const addCartState = useSelector((state) => state.addCart);
  const transactionsState = useSelector((state) => state.transaction);
  console.log('transaction', transactionsState);

  const renderItem = ({item}) => {
    return (
      <Item
        id={item.id}
        idUser={item.id_user}
        itemName={item.item}
        name={item.picture}
        picture={item.picture}
        price={item.price}
        color={item.color}
        qty={item.qty}
      />
    );
  };

  const onRefreshing = async () => {
    setRefreshing(true);
    await dispatch(cartActions.getCart(token));
    setRefreshing(false);
  };

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(cartActions.getCart(token));
    setTotal(getCartState.total);
    console.log('state', getCartState);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [addCartState.data]);

  return (
    <View>
      <ScrollView>
        <View style={styles.parent}>
          <View style={styles.iconSearch}>
            <TouchableOpacity>
              <Icon name="search" size={20} />
            </TouchableOpacity>
          </View>
          <Text style={styles.textHeader}>My Bag</Text>

          {getCartState.data?.length > 0 ? (
            <FlatList
              data={getCartState.data}
              renderItem={renderItem}
              keyExtractor={(item) => item.id.toString()}
              refreshControl={
                <RefreshControl
                  refreshing={refreshing}
                  onRefresh={onRefreshing}
                />
              }
            />
          ) : (
            <View style={styles.cartnull}>
              <Text>You don't have any bag items</Text>
            </View>
          )}
        </View>
        {getCartState.data?.length > 0 ? (
          <View style={styles.footer}>
            <View style={styles.textGroupFooter}>
              <Text style={styles.totalAmount}>Total amount</Text>
              <Text style={styles.price}>Rp {getCartState.total}</Text>
            </View>
            <TouchableOpacity
              style={styles.btnFooter}
              onPress={() => navigation.navigate('Checkout')}>
              <Text style={styles.checkout}>CHECK OUT</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View />
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  parent: {
    padding: 10,
    flex: 1,
  },
  iconSearch: {
    marginVertical: 10,
    alignSelf: 'flex-end',
  },
  textHeader: {
    fontSize: 35,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  tinyLogo: {
    width: 70,
    height: 70,
  },
  descript: {
    flexDirection: 'row',
  },
  desc: {
    flexDirection: 'row',
    marginRight: 20,
  },
  btnGroup: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  btn: {
    backgroundColor: 'white',
    shadowOpacity: 10,
    borderRadius: 100,
    width: 30,
    padding: 5,
    alignItems: 'center',
  },
  groupInChart: {
    flexDirection: 'row',
    // borderWidth: 1,
    // backgroundColor: 'ghostwhite',
    justifyContent: 'space-between',
  },
  groupLeft: {
    flexDirection: 'row',
  },
  cart: {
    marginVertical: 10,
    backgroundColor: 'ghostwhite',
    padding: 10,
  },
  centerCart: {
    marginLeft: 10,
  },
  footer: {
    backgroundColor: 'ghostwhite',
    height: 150,
  },
  textGroupFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 25,
    marginHorizontal: 10,
  },
  btnFooter: {
    backgroundColor: '#DB3022',
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    marginHorizontal: 10,
    height: 48,
    elevation: 3,
  },
  checkout: {
    color: 'white',
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '900',
  },
  cartnull: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  nameItem: {
    fontSize: 16,
    color: 'black',
    fontWeight: '800',
  },
  label: {
    fontSize: 11,
    color: 'grey',
  },
  descItem: {
    fontSize: 11,
    color: 'black',
  },
  price: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  totalAmount: {
    color: 'grey',
    fontSize: 14,
  },
});

export default Bag;
