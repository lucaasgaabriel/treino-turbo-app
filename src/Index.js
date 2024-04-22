import React from 'react';
import { View, Text, TextInput, Button, Image, StyleSheet } from 'react-native';

const Index = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../img/TreinoTurboLogobyDesigner.png')}
        style={styles.logo}
      />
      <Text style={styles.title}>Tela de Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite seu usuário"
      />
      <TextInput
        style={styles.input}
        placeholder="Digite sua senha"
        secureTextEntry={true}
      />
      <Button title="Login" onPress={() => {}} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    width: 100,
    height: 100,
    borderRadius: 50, // faz a imagem ser redonda
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
  },
});

export default Index;
