import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import searchingActions from '../redux/actions/searching';
import {useDispatch, useSelector} from 'react-redux';

const Header = ({navigation, page, showBtnSearch, backBtn}) => {
  const dispatch = useDispatch();
  const [isSearch, setIsSearch] = React.useState(false);
  const [search, setSearch] = React.useState('');
  const searchState = useSelector((state) => state.searching);
  // React.useEffect(() => {});

  const searching = (values) => {
    console.log(values);
    dispatch(searchingActions.searchItem(values));
    console.log('searchState', searchState);
    setIsSearch(false);
    setSearch('');
  };

  return (
    <View style={styles.parent}>
      <View>
        <TouchableOpacity style={styles.backBtn} onPress={backBtn}>
          <FontAwesome name="angle-left" size={25} />
        </TouchableOpacity>
      </View>
      <View style={styles.viewGrup}>
        {isSearch ? (
          <View style={styles.gruop}>
            <View style={styles.tapSearch}>
              <TextInput
                onChangeText={(values) => setSearch(values)}
                defaultValue={search}
                onSubmitEditing={() => searching(search)}
              />
            </View>

            <TouchableOpacity
              onPress={() => searching(search)}
              style={styles.btnSearch}>
              <FontAwesome name="search" size={20} color="black" />
            </TouchableOpacity>
          </View>
        ) : (
          <>
            <View style={styles.viewBtnBack}>
              <Text style={styles.title}>{page}</Text>
            </View>
            <View style={styles.viewBtnSerach}>
              {/* {showBtnSearch ? ( */}
              <TouchableOpacity
                style={styles.btnSearch}
                onPress={() => setIsSearch(true)}>
                <FontAwesome name="search" size={20} color="black" />
              </TouchableOpacity>
            </View>
          </>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  parent: {
    //  borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 56,
    backgroundColor: '#F9F9F9',
    paddingHorizontal: 20,
  },
  viewBtnBack: {
    //  borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  backBtn: {
    width: 40,
    //  borderWidth: 5,
  },
  viewGrup: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
    //  borderWidth: 2,
  },
  viewBtnSerach: {
    width: 50,
    //  borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: '900',
    fontSize: 20,
  },
  btnSearch: {
    width: 30,
    alignItems: 'center',
    //  borderWidth: 1,
  },
  tapSearch: {
    backgroundColor: 'white',
    flex: 1,
    borderRadius: 100,
    padding: 5,
    margin: 5,
    justifyContent: 'center',
  },
  gruop: {
    alignItems: 'center',
    flexDirection: 'row',
  },
});

export default Header;
