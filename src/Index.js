import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import styles from './styleIndex'; // Importa os estilos do arquivo styleIndex.js

const Index = ({ onLogin }) => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../img/logo_Treino_Turbo.png')}
        style={styles.logo}
      />
      <Text style={styles.title}>Treino Turbo</Text>
      <Text style={styles.titleLogin}>Usuário</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite seu usuário"
      />
      <Text style={styles.titleSenha}>Senha</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite sua senha"
        secureTextEntry={true}
      />
      <TouchableOpacity style={styles.loginButton} onPress={onLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.registerButton}>
        <Text style={styles.buttonText}>Cadastro</Text>
      </TouchableOpacity>
      <Text style={styles.titleFooter}>Designed by Treino Turbo ©</Text>
    </View>
  );
};

export default Index;
