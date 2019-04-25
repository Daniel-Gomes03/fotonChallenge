import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffea00',
    alignItems: 'stretch',
    justifyContent: 'center',
    padding: 30,
  },

  logoContainer: {
    alignItems: 'center',
  },

  logo: {
    height: 160,
    width: 250,
  },

  text: {
    textAlign: 'center',
    marginTop: 10,
    fontSize: 15,
    color: '#000',
    lineHeight: 21,
  },

  form: {
    marginTop: 20,
  },

  input: {
    backgroundColor: '#FFF',
    borderRadius: 4,
    height: 44,
    fontSize: 16,
    color: '#000',
    paddingHorizontal: 20,
  },

  button: {
    backgroundColor: '#2196f3',
    borderRadius: 4,
    height: 44,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default styles;
