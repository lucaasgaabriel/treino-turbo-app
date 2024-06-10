// styleIndex.js

import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    width: 200,
    height: 200,
    borderRadius: 50, // faz a imagem ser redonda
    marginBottom: 20,
  },
  title: {
    fontSize: 30, // Aumentei o tamanho do título
    marginBottom: 20,
    fontWeight: 'bold', // Deixei o título em negrito
    /*textShadowColor: 'rgba(0, 0, 0, 0.75)', // Sombra de texto preta
    textShadowOffset: { width: 2, height: 2 }, // Offset da sombra
    textShadowRadius: 10, // Raio da sombra*/
    color: '#333', // Cor do título
    textAlign: 'center', // Centralizar o texto
  },
  titleLogin: {
    marginRight: '75%',
    paddingLeft: '5%'
  },
  titleSenha: {
    marginRight: '75%',
    paddingLeft: '2%'
  },
  titleFooter: {
    marginTop: '15%'
  },
  input: {
    width: '90%',
    height: 50,
    borderColor: 'gray',
    borderWidth: 2,
    marginBottom: 10,
    padding: 10,
  },
  loginButton: {
    backgroundColor: '#007bff',
    backgroundColor: '#28a745',
    paddingVertical: 15,
    paddingHorizontal: 140,
    borderRadius: 5,
    marginBottom: 10,
    marginTop: 20,
  },
  registerButton: {
    backgroundColor: '#007bff',
    paddingVertical: 15,
    paddingHorizontal: 125,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
  },
});

export default styles;
