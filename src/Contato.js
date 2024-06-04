import React, { useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, Image } from 'react-native'; // Adicione esta linha
import stylesGeral from './stylesGeral'; // Importa o estilo geral
import stylesContato from './styleContato'; // Importa os estilos locais

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
      {/* Conteúdo da página de Contato */}
      <View style={stylesContato.container}>
        {/* Coluna 1: Imagem */}
        <View style={stylesContato.imageColumn}>
          <Image
            source={require('../img/logo_Treino_Turbo_w_nome_azulv1.png')} // Substitua pelo caminho da sua imagem de contato
            style={stylesContato.image}
          />
        </View>

        {/* Coluna 2: Formulário */}
        <View style={stylesContato.formColumn}>
          <Text style={stylesContato.title}>Entre em Contato</Text>
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
            style={[stylesGeral.input, stylesContato.textArea]}
            placeholder="Mensagem"
            value={mensagem}
            onChangeText={setMensagem}
            multiline
          />
      <TouchableOpacity style={stylesContato.Button}>
        <Text style={stylesContato.buttonText} onPress={handleEnviarMensagem}>Enviar Mensagem</Text>
      </TouchableOpacity>
        </View>
      </View>

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

export default Contato;
