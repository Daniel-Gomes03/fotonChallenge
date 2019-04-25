import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const screenWidth = width < height ? width : height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
    maxWidth: (screenWidth - 72) / 3,
    backgroundColor: '#ffea00',
  },

  image: {
    width: '100%',
    height: 150,
  },
});

export default styles;
