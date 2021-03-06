import React from 'react';
import PropTypes from 'prop-types';

import { navigate } from '~/services/navigation';

import {
  TouchableOpacity, Image, View, Text,
} from 'react-native';

import styles from './styles';

const ListBook = ({ book }) => (
  <TouchableOpacity style={styles.container} onPress={() => navigate('Detail', { book })}>
    {book.volumeInfo.imageLinks ? (
      <Image style={styles.image} source={{ uri: book.volumeInfo.imageLinks.thumbnail }} />
    ) : (
      <View style={styles.title}>
        <Text>{book.volumeInfo.title}</Text>
      </View>
    )}
  </TouchableOpacity>
);

ListBook.propTypes = {
  book: PropTypes.shape({
    volumeInfo: PropTypes.object,
    imageLinks: PropTypes.object,
    thumbnail: PropTypes.string,
  }).isRequired,
};

export default ListBook;
