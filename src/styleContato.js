import { StyleSheet } from 'react-native';

const stylesContato = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  imageColumn: {
    flex: 1,
    marginRight: 20,
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'absolut',
  },
  formColumn: {
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  textArea: {
    height: 120,
    textAlignVertical: 'top',
  },
 Button: {
    backgroundColor: '#007bff',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 20,
    marginBottom: 10,
    height: 50,
    width: 180,
  },
  buttonText: {
    color: '#fff',
    fontSize: 15,
    textAlign: 'center',
  },
});

export default stylesContato;
