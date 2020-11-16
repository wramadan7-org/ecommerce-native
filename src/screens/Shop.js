import React, {Component} from 'react';
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import {connect} from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';

// import actions
// import categoryActions from '../redux/actions/category';
import productsActions from '../redux/actions/products';

class Shop extends Component {
  componentDidMount() {
    // this.props.getCategory();
    this.props.getProducts();
  }

  render() {
    const {isLoading, isError, alertMsg, data} = this.props.products;
    return (
      <ScrollView style={styles.scrollAll}>
        <View style={styles.header}>
          <Text>HEADER</Text>
          <Text onPress={() => this.props.navigation.navigate('Category')}>
            See all category
          </Text>
        </View>
        <View style={styles.body}>
          <View style={styles.listCard}>
            {!isLoading &&
              !isError &&
              data.length > 0 &&
              data.map((o) => (
                <TouchableOpacity
                  style={styles.card}
                  onPress={() => this.props.navigation.navigate('Detail')}>
                  <View style={styles.imgCard}>
                    <Image
                      style={styles.tinyLogo}
                      source={{
                        uri: 'https://reactnative.dev/img/tiny_logo.png',
                      }}
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
    );
  }
}

const styles = StyleSheet.create({
  body: {
    // backgroundColor: 'gray',
    borderWidth: 2,
    alignContent: 'center',
  },
  boldCard: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  card: {
    //  backgroundColor: 'red',
    // borderWidth: 1,
    backgroundColor: 'white',
    width: 140,
    height: 270,
    borderRadius: 10,
    margin: 10,
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
    height: 150,
    // borderWidth: 1
  },
  listCard: {
    // backgroundColor: 'yellow',
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
    justifyContent: 'space-around',
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
});

const mapStateToProps = (state) => ({
  // category: state.category,
  products: state.products,
});

const mapDispatchToProps = {
  // getCategory: categoryActions.getData(),
  getProducts: productsActions.getProducts,
};

export default connect(mapStateToProps, mapDispatchToProps)(Shop);
