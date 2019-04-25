import { StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';

const styles = StyleSheet.create({
  container: {
    height: 54 + getStatusBarHeight(),
    padding: getStatusBarHeight(),
    borderBottomWidth: 1,
    borderBottomColor: '#ffea00',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#ffea00',
  },

  title: {
    fontSize: 22,
    fontWeight: 'normal',
    color: '#000',
  },

  icon: {
    color: '#000',
  },
});

export default styles;
