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
    resizeMode: 'cover',
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
});

export default stylesContato;
