import '~/config/ReactotronConfig';

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';
import { YellowBox } from 'react-native';

import store from './store';

import createNavigator from '~/routes';
import { setNavigator } from '~/services/navigation';

YellowBox.ignoreWarnings(['ViewPagerAndroid', 'Slider']);

export default class App extends Component {
  state = {
    userChecked: false,
    userLogged: false,
  };

  async componentDidMount() {
    const username = await AsyncStorage.getItem('@DesignBooks:username');

    this.setState({
      userChecked: true,
      userLogged: !!username,
    });
  }

  render() {
    const { userChecked, userLogged } = this.state;

    if (!userChecked) return null;

    const Routes = createNavigator(userLogged);

    return (
      <Provider store={store}>
        <Routes ref={setNavigator} />
      </Provider>
    );
  }
}
