import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  View, Text, TouchableOpacity, StatusBar,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import styles from './styles';

class Header extends Component {
  static propTypes = {
    navigation: PropTypes.shape().isRequired,
    handleSearching: PropTypes.func.isRequired,
  };

  renderButtonMenuArrowBack = () => {
    const { navigation } = this.props;

    if (navigation.state.routeName === 'List') {
      return (
        <TouchableOpacity onPress={() => {}}>
          <Icon name="menu" size={32} style={styles.icon} />
        </TouchableOpacity>
      );
    }

    return (
      <TouchableOpacity onPress={() => navigation.pop()}>
        <Icon name="arrow-back" size={32} style={styles.icon} />
      </TouchableOpacity>
    );
  };

  render() {
    const { handleSearching } = this.props;
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#FFDD0D" barStyle="dark-content" />

        {this.renderButtonMenuArrowBack()}
        <Text style={styles.title}>Design Books</Text>
        <TouchableOpacity onPress={() => handleSearching()}>
          <Icon name="search" size={32} style={styles.icon} />
        </TouchableOpacity>
      </View>
    );
  }
}

export default Header;
