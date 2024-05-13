import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';
import stylesGeral from './stylesGeral'; // Importa o estilo geral

const Contato = ({ onSobre, onContato, onHome }) => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');

  const handleEnviarMensagem = () => {
    // Lógica para enviar a mensagem
    alert(`Mensagem enviada! Nome: ${nome}, Email: ${email}, Mensagem: ${mensagem}`);
  };

  return (
    <View style={stylesGeral.container}>
      <Text style={localStyles.title}>Entre em Contato</Text>
      <TextInput
        style={stylesGeral.input}
        placeholder="Nome"
        value={nome}
        onChangeText={setNome}
      />
      <TextInput
        style={stylesGeral.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={[stylesGeral.input, localStyles.textArea]}
        placeholder="Mensagem"
        value={mensagem}
        onChangeText={setMensagem}
        multiline
      />
      <Button title="Enviar Mensagem" onPress={handleEnviarMensagem} />

      {/* Menu */}
      <View style={stylesGeral.menu}>
        <TouchableOpacity onPress={onSobre}>
          <Text style={stylesGeral.menuItem}>Sobre</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onHome}>
          <Text style={stylesGeral.menuItem}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onContato}>
          <Text style={stylesGeral.menuItem}>Contato</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const localStyles = StyleSheet.create({
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

export default Contato;
