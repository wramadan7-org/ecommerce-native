import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
  RefreshControl,
  ActivityIndicator,
} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import {APP_URL} from '@env';
import Header from '../components/Header';

// import actions
// import categoryActions from '../redux/actions/category';
import categoryActions from '../redux/actions/category';

const Item = ({onPress, picture, category, name, price}) => {
  console.log('name', name);
  return (
    <View style={styles.viewCard}>
      <View style={styles.listCard}>
        <TouchableOpacity style={styles.card} onPress={onPress}>
          <View style={styles.imgCard}>
            <Image
              style={styles.tinyLogo}
              source={
                picture?.length > 0
                  ? {uri: `${APP_URL}${picture}`}
                  : {
                      uri: 'https://reactnative.dev/img/tiny_logo.png',
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
            <Text style={styles.tipe}>{category}</Text>
            <Text style={styles.boldCard}>{name}</Text>
            <Text style={styles.boldCard}>Rp {price}</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const ProductByCategory = ({route, navigation}) => {
  const dispatch = useDispatch();
  const [refreshing, setRefreshing] = React.useState(false);
  const itemsState = useSelector((state) => state.category);

  const renderItem = ({item}) => {
    console.log('item', item);
    return (
      <Item
        onPress={() => navigation.navigate('Detail', {id_item: item.id_item})}
        picture={item.picture}
        category={item.category}
        name={item.name}
        price={item.price}
      />
    );
  };

  const onRefreshing = async () => {
    setRefreshing(true);
    await dispatch(categoryActions.categoryGrupBy(route.params.id));
    setRefreshing(false);
  };

  React.useEffect(() => {
    dispatch(categoryActions.categoryGrupBy(route.params.id));
    console.log('category', itemsState);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [route.params.id]);

  return (
    <>
      <Header
        page={route.params.category}
        backBtn={() => navigation.navigate('Category')}
      />
      <View style={styles.body}>
        <View style={styles.listCard}>
          {itemsState.isLoading && !itemsState.isError && (
            <ActivityIndicator
              size="large"
              color="blue"
              style={styles.loading}
            />
          )}

          {!itemsState.isLoading &&
            !itemsState.isError &&
            itemsState.dataCategoryGrup?.length > 0 && (
              <FlatList
                // style={styles.flatlist}
                data={itemsState.dataCategoryGrup}
                renderItem={renderItem}
                keyExtractor={(item) => item.id_item}
                refreshControl={
                  <RefreshControl
                    refreshing={refreshing}
                    onRefresh={onRefreshing}
                  />
                }
                horizontal={false}
                numColumns={2}
              />
            )}
        </View>

        {!itemsState.isLoading &&
          !itemsState.isError &&
          itemsState.dataCategoryGrup?.length === 0 && (
            <View style={styles.null}>
              <Text>Items not found</Text>
            </View>
          )}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignSelf: 'center',
    alignItems: 'flex-start',
  },
  boldCard: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  card: {
    width: 164,
    height: 300,
    borderRadius: 10,
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
    width: 164,
    height: 184,
    backgroundColor: 'grey',
    // borderWidth: 1
  },
  viewCard: {
    flexDirection: 'row',
    // borderWidth: 1,
    alignItems: 'center',
  },
  listCard: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    // borderWidth: 2,
    marginLeft: 10,
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
  null: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // marginTop: '50%',
  },
  flatlist: {
    flexWrap: 'wrap',
    flexDirection: 'column',
    // borderWidth: 3,
    // justifyContent: 'space-between',
  },
  faltlistContent: {
    alignItems: 'flex-start',
    // borderWidth: 1,
    width: '100%',
  },
  loading: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    height: '100%',
  },
});

export default ProductByCategory;
