import { createAppContainer, createSwitchNavigator, createStackNavigator } from 'react-navigation';

import Home from '~/pages/Home';
import Detail from '~/pages/Detail';
import List from '~/pages/List';

const Routes = (userLogged = false) => createAppContainer(
  createSwitchNavigator(
    {
      Home,
      User: createStackNavigator({
        List,
        Detail,
      }),
    },
    {
      initialRouteName: userLogged ? 'User' : 'Home',
    },
  ),
);

export default Routes;
