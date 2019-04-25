import React, { Component } from 'react';
import PropTypes from 'prop-types';

import AsyncStorage from '@react-native-community/async-storage';
import {
  View, Text, TextInput, TouchableOpacity, StatusBar, Image,
} from 'react-native';

import styles from './styles';
import Logo from '~/../assets/DESIGNBOOKS.png';

export default class Home extends Component {
  state = {
    username: '',
  };

  static propTypes = {
    navigation: PropTypes.shape().isRequired,
  };

  signIn = async () => {
    const { username } = this.state;
    const { navigation } = this.props;

    await AsyncStorage.setItem('@DesignBooks: username', username);

    navigation.navigate('User');
  };

  render() {
    const { username } = this.state;

    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#ffea00" barStyle="dark-content" />

        <View style={styles.logoContainer}>
          <Image source={Logo} style={styles.logo} />
        </View>

        <View style={styles.form}>
          <TextInput
            style={styles.input}
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Enter your username to continue"
            value={username}
            onChangeText={text => this.setState({ username: text })}
          />

          <TouchableOpacity style={styles.button} onPress={this.signIn}>
            <Text style={styles.buttonText}>Continue</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
