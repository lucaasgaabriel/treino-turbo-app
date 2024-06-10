import React, {useState} from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, Alert } from 'react-native';
import styles from './styleIndex'; // Importa os estilos do arquivo styleIndex.js
import axios from 'axios';


const API_URL = 'http://10.215.24.170:3000'

const Index = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [idUser, getUserType] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post(`${API_URL}/login`, {
        username,
        password,
      });
  
      if (response.data.success) {
        console.log('Resposta do servidor:', response.data);
  
        const idTipoUsuario = response.data.ID_TIPO_USUARIO; // Assuming API response includes ID_TIPO_USUARIO column name
        console.log('ID_TIPO_USUARIO:', idTipoUsuario);
  
        // Store user type ID securely using AsyncStorage
        try {
          await AsyncStorage.setItem('idTipoUsuario', JSON.stringify(idTipoUsuario));
          onLogin(idTipoUsuario);
        } catch (storageError) {
          console.error('Erro ao armazenar ID_TIPO_USUARIO:', storageError);
          Alert.alert('Erro', 'Falha ao armazenar dados do usuário.');
        }
      } else {
        // Handle login failure
        Alert.alert('Erro', 'Usuário ou senha inválidos');
      }
    } catch (error) {
      console.error('Erro ao tentar logar:', error);
      Alert.alert('Erro', 'Ocorreu um erro ao tentar logar');
    }
  };

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
        value={username}
        onChangeText={setUsername}
      />
      <Text style={styles.titleSenha}>Senha</Text>
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
      <Text style={styles.titleFooter}>Designed by Treino Turbo ©</Text>
    </View>
  );
};

export default Index;
