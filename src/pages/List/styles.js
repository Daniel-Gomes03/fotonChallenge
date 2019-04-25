import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffea00',
  },

  search: {
    backgroundColor: '#FFF',
    borderRadius: 4,
    marginTop: 18,
    marginHorizontal: 18,
    paddingHorizontal: 20,
    height: 52,
    fontSize: 16,
    color: '#333',
    elevation: 3,
  },

  columnWrapper: {
    marginHorizontal: 18,
    justifyContent: 'space-between',
  },

  activityIndicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  loading: {
    alignSelf: 'center',
    marginVertical: 20,
  },
});

export default styles;
