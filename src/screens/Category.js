import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  RefreshControl,
} from 'react-native';
import categoryActions from '../redux/actions/category';
import {useSelector, useDispatch} from 'react-redux';

const Category = ({navigation}) => {
  const [refresh, setRefresh] = React.useState(false);

  const categoryState = useSelector((state) => state.category);

  const renderItem = ({item}) => {
    // console.log('item', item);
    return (
      <TouchableOpacity
        style={styles.listCategory}
        key={item.id_category}
        onPress={() =>
          navigation.navigate('ProductByCategory', {
            id: item.id_category,
            category: item.name_category,
          })
        }>
        <Text style={styles.itemTextStyle}>{item.name_category}</Text>
      </TouchableOpacity>
    );
  };

  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(categoryActions.getData());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // PULL TO REFRESH
  const onRefresh = async () => {
    console.log('refresh');
    setRefresh(true);
    await dispatch(categoryActions.getData());
    setRefresh(false);
  };

  return (
    <>
      {/* <Header page="Category" /> */}
      <View style={styles.parent}>
        <TouchableOpacity
          style={styles.btnAllItems}
          onPress={() => navigation.navigate('Shop')}>
          <Text style={styles.textViewAll}>VIEW ALL ITEMS</Text>
        </TouchableOpacity>
        <Text style={styles.choose}>Choose category</Text>
        <FlatList
          style={styles.flatListCategory}
          data={categoryState.data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          refreshControl={
            <RefreshControl refreshing={refresh} onRefresh={onRefresh} />
          }
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  parent: {
    margin: 10,
  },
  btnAllItems: {
    backgroundColor: '#DB3022',
    elevation: 5,
    width: '100%',
    alignItems: 'center',
    borderRadius: 100,
    height: 48,
    justifyContent: 'center',
    marginVertical: 20,
  },
  flatListCategory: {
    marginVertical: 15,
  },
  listCategory: {
    borderBottomWidth: 1,
    borderColor: 'gray',
    height: 35,
    justifyContent: 'center',
    marginVertical: 5,
  },
  itemTextStyle: {
    fontSize: 15,
  },
  textViewAll: {
    color: 'white',
    fontSize: 14,
    lineHeight: 20,
  },
  choose: {
    marginVertical: 10,
    color: 'gray',
  },
});

export default Category;
