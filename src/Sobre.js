import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import stylesGeral from './stylesGeral'; // Importa o estilo geral

const Sobre = ({ onSobre, onContato, onHome }) => {
  return (
    <View style={stylesGeral.container}>
      <Text style={localStyles.title}>Sobre Nós</Text>
      <Text style={localStyles.description}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pulvinar sapien nec ex congue, nec ultricies risus ultricies. Ut lacinia sit amet sapien ut viverra. 
      </Text>
      <Text style={localStyles.description}>
        Aliquam auctor, velit nec malesuada vestibulum, eros urna tincidunt lacus, eget bibendum sapien purus sed lacus.
      </Text>
      {/* Adicione aqui o restante do conteúdo da página Sobre */}

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
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    marginBottom: 10,
    textAlign: 'center',
  },
});

export default Sobre;
