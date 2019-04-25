import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const screenWidth = width < height ? width : height;

const styles = StyleSheet.create({
  containerWrapper: {
    flex: 1,
    backgroundColor: '#ffea00',
  },

  container: {
    flex: 1,
    flexGrow: 1,
  },

  detail: {
    flexDirection: 'row',
    marginTop: 30,
    maxWidth: screenWidth,
    marginHorizontal: 18,
  },

  imageContainer: {
    backgroundColor: '#ffea00',
    elevation: 32,
  },

  image: {
    width: 110,
    height: 155,
  },

  info: {
    marginLeft: 20,
    width: 0,
    flexGrow: 1,
    justifyContent: 'space-between',
  },

  title: {
    color: '#333',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 0,
  },

  author: {
    fontSize: 18,
  },

  price: {
    flexDirection: 'row',
  },

  priceText: {
    color: '#333',
    fontSize: 20,
    fontWeight: 'bold',
  },

  rate: {
    marginLeft: 14,
    flexDirection: 'row',
    alignItems: 'center',
  },

  actions: {
    marginTop: 24,
    marginHorizontal: 18,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  pageCount: {
    fontSize: 16,
    marginLeft: 20,
  },

  buttonContainer: {
    flexDirection: 'row',
  },

  buttonBuy: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2196f3',
    height: 40,
    width: 130,
    borderRadius: 50,
    marginRight: 10,
    elevation: 12,
  },

  buttonBuyText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },

  buttonLike: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ef5350',
    width: 40,
    height: 40,
    borderRadius: 100,
  },

  abstract: {
    flex: 1,
    padding: 20,
    paddingTop: 20,
    backgroundColor: '#FFF',
  },

  abstractText: {
    lineHeight: 35,
    fontSize: 16,
  },
});

export default styles;
