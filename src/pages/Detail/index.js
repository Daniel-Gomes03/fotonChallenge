import React from 'react';
import PropTypes from 'prop-types';

import {
  View, Text, Image, TouchableOpacity, ScrollView,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome5';
import Star from 'react-native-vector-icons/FontAwesome';

import Header from '~/components/Header';

import styles from './styles';

const Detail = ({ navigation }) => {
  const book = navigation.getParam('book');

  return (
    <View style={styles.containerWrapper}>
      <Header navigation={navigation} handleSearching={() => {}} />
      <View style={styles.container}>
        <View style={styles.detail}>
          <View style={styles.imageContainer}>
            <Image style={styles.image} source={{ uri: book.volumeInfo.imageLinks.thumbnail }} />
          </View>
          <View style={styles.info}>
            <View>
              <Text style={styles.title}>{book.volumeInfo.title}</Text>
              <Text style={styles.author}>
                <Text>by </Text>
                {book.volumeInfo.authors[0]}
              </Text>
            </View>
            <View style={styles.price}>
              <Text style={styles.priceText}>
                <Text>$</Text>
                {book.saleInfo.retailPrice.amount}
              </Text>
              <View style={styles.rate}>
                <Star name="star" size={16} color="#333" style={{ marginRight: 3 }} />
                <Star name="star" size={16} color="#333" style={{ marginRight: 3 }} />
                <Star name="star" size={16} color="#333" style={{ marginRight: 3 }} />
                <Star name="star" size={16} color="#333" style={{ marginRight: 3 }} />
                <Star name="star" size={16} color="#333" style={{ marginRight: 3 }} />
              </View>
            </View>
          </View>
        </View>
        <View style={styles.actions}>
          <Text style={styles.pageCount}>
            {book.volumeInfo.pageCount}
            <Text> pages</Text>
          </Text>
          <View style={styles.buttonContainer}>
            {book.saleInfo.retailPrice ? (
              <TouchableOpacity style={styles.buttonBuy}>
                <Text style={styles.buttonBuyText}>BUY</Text>
              </TouchableOpacity>
            ) : null}
            <TouchableOpacity style={styles.buttonLike}>
              <Icon name="heart" size={20} color="#FFF" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.abstract}>
        <ScrollView>
          <Text style={styles.abstractText}>{book.volumeInfo.description}</Text>
        </ScrollView>
      </View>
    </View>
  );
};

Detail.propTypes = {
  navigation: PropTypes.shape().isRequired,
};

Detail.navigationOptions = {
  header: null,
};

export default Detail;
