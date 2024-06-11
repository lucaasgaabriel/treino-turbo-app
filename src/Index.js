import React, {useState} from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, Alert } from 'react-native';
import axios from 'axios';
import styles from './styleIndex'; // Importa os estilos do arquivo styleIndex.js

const API_URL = 'http://localhost:3000'

const Index = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post(`${API_URL}/login`, {
        username,
        password,
      });
      console.log('Resposta do servidor:', response.data);
      if (response.data.success) {
        console.error
        // Se o login for bem-sucedido, chame a função onLogin passada como propriedade
        onLogin();
      } else {
        // Se o login falhar, exiba uma mensagem de erro para o usuário
        Alert.alert('Erro', 'Usuário ou senha inválidos');
      }
    } catch (error) {
      console.error('Erro ao tentar logar: ', error);
      Alert.alert('Erro', 'Ocorreu um erro ao tentar logar');
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../img/logo_Treino_Turbo.png')}
        style={styles.logo}
      />
      <Text style={styles.title}>Tela de Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite seu usuário"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Digite sua senha"
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
      />
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.registerButton}>
        <Text style={styles.buttonText}>Cadastro</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Index;
