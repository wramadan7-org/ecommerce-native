import React from 'react';
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import {APP_URL} from '@env';
import Header from '../components/Header';
import {useIsFocused} from '@react-navigation/native';
// import actions
// import categoryActions from '../redux/actions/category';
import productsActions from '../redux/actions/products';
import searchActions from '../redux/actions/searching';

// const Item = ({
//   id,
//   name,
//   category,
//   price,
//   picture,
//   color,
//   condition,
//   description,
//   onPress,
// }) => {
//   return (
//     <TouchableOpacity style={styles.card} onPress={onPress} key={id}>
//       <View style={styles.imgCard}>
//         <Image
//           style={styles.tinyLogo}
//           source={
//             picture?.length > 0
//               ? {uri: `${APP_URL}${picture}`}
//               : {
//                   uri: 'https://reactnative.dev/img/tiny_logo.png',
//                 }
//           }
//         />
//       </View>
//       <View style={styles.textCard}>
//         <View style={styles.viewStar}>
//           <Icon name="star" size={15} />
//           <Icon name="star" size={15} />
//           <Icon name="star" size={15} />
//           <Icon name="star" size={15} />
//         </View>
//         <Text style={styles.tipe}>{category}</Text>
//         <Text style={styles.boldCard}>{name}</Text>
//         <Text style={styles.boldCard}>Rp {price}</Text>
//       </View>
//     </TouchableOpacity>
//   );
// };

const Shop = ({navigation}) => {
  const productsState = useSelector((state) => state.products);
  const searchState = useSelector((state) => state.searching);
  console.log(searchState);

  const isFocused = useIsFocused();

  // const renderItem = ({item}) => (
  //   <Item
  //     id={item.id_item}
  //     category={item.category}
  //     name={item.name}
  //     price={item.price}
  //     color={item.color}
  //     condition={item.condition}
  //     description={item.description}
  //     picture={item.picture}
  //     onPress={() =>
  //       navigation.navigate('Detail', {
  //         id_item: item.id_item,
  //       })
  //     }
  //   />
  // );

  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(productsActions.getProducts());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  React.useEffect(() => {
    if (isFocused) {
      dispatch(searchActions.clearSearch());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFocused]);
  return (
    <>
      <SafeAreaView>
        <Header page="Shop" backBtn={() => navigation.navigate('Category')} />
        {/* <FlatList
        style={styles.flatlist}
        data={productsState.data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id_item}
        numColumns={2}
      /> */}
        <ScrollView style={styles.scrollAll}>
          <View style={styles.body}>
            <View style={styles.listCard}>
              {/* jika ada search */}
              {searchState.isSearch &&
                searchState.dataSearch?.length > 0 &&
                searchState.dataSearch.map((o) => (
                  <TouchableOpacity
                    style={styles.card}
                    onPress={() =>
                      navigation.navigate('Detail', {
                        id_item: o.id_item,
                      })
                    }>
                    <View style={styles.imgCard}>
                      <Image
                        style={styles.tinyLogo}
                        source={
                          o.picture?.length > 0
                            ? {uri: `${APP_URL}${o.picture}`}
                            : {
                                uri:
                                  'https://reactnative.dev/img/tiny_logo.png',
                              }
                        }
                      />
                    </View>
                    <View style={styles.textCard}>
                      <View style={styles.viewStar}>
                        <Icon name="star" size={15} />
                        <Icon name="star" size={15} />
                        <Icon name="star" size={15} />
                        <Icon name="star" size={15} />
                      </View>
                      <Text style={styles.tipe}>{o.category}</Text>
                      <Text style={styles.boldCard}>{o.name}</Text>
                      <Text style={styles.boldCard}>Rp {o.price}</Text>
                    </View>
                  </TouchableOpacity>
                ))}

              {/* jika search tidak ada */}
              {searchState.isSearch && searchState.dataSearch?.length === 0 && (
                <View style={styles.notfound}>
                  <Text>Not found</Text>
                </View>
              )}

              {/* jika tidak melakukan search */}
              {!searchState.isSearch &&
                !productsState.isLoading &&
                !productsState.isError &&
                productsState.data.length > 0 &&
                productsState.data.map((o) => (
                  <TouchableOpacity
                    style={styles.card}
                    onPress={() =>
                      navigation.navigate('Detail', {
                        id_item: o.id_item,
                      })
                    }>
                    <View style={styles.imgCard}>
                      <Image
                        style={styles.tinyLogo}
                        source={
                          o.picture?.length > 0
                            ? {uri: `${APP_URL}${o.picture}`}
                            : {
                                uri:
                                  'https://reactnative.dev/img/tiny_logo.png',
                              }
                        }
                      />
                    </View>
                    <View style={styles.textCard}>
                      <View style={styles.viewStar}>
                        <Icon name="star" size={15} />
                        <Icon name="star" size={15} />
                        <Icon name="star" size={15} />
                        <Icon name="star" size={15} />
                      </View>
                      <Text style={styles.tipe}>{o.category}</Text>
                      <Text style={styles.boldCard}>{o.name}</Text>
                      <Text style={styles.boldCard}>Rp {o.price}</Text>
                    </View>
                  </TouchableOpacity>
                ))}
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  body: {
    // backgroundColor: 'gray',
    // borderWidth: 2,
    flex: 1,
    // alignSelf: 'center',
  },
  boldCard: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  card: {
    //  backgroundColor: 'red',
    // borderWidth: 1,
    // backgroundColor: 'white',
    width: 162,
    height: 270,
    borderRadius: 10,
    // margin: 10,
    marginVertical: 10,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    height: 100,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    resizeMode: 'cover',
  },
  imgCard: {
    borderRadius: 10,
    width: 162,
    height: 184,
    backgroundColor: 'grey',
    // borderWidth: 1
  },
  listCard: {
    // backgroundColor: 'yellow',
    flexDirection: 'row',
    flexWrap: 'wrap',
    // width: '100%',
    padding: 20,
    marginBottom: 50,
    justifyContent: 'space-between',
  },
  scrollCard: {
    //  backgroundColor: 'gray',
    //  borderWidth: 2,
    height: 250,
  },
  tinyLogo: {
    alignSelf: 'center',
    height: '100%',
    width: '100%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  tipe: {
    color: 'gray',
    fontSize: 12,
  },
  textCard: {
    padding: 5,
  },
  viewStar: {
    flexDirection: 'row',
  },
  flatlist: {
    borderWidth: 1,
    flexDirection: 'column',
  },
  notfound: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Shop;
