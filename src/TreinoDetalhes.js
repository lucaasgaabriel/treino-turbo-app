import React from 'react';
import { View, Text, Image, StyleSheet, Button } from 'react-native';

const TreinoDetalhes = ({ treino, onClose }) => {
  return (
    <View style={styles.modalContainer}>
      <View style={styles.modalContent}>
        <Image source={treino.imagem} style={styles.detalhesImagem} />
        <Text style={styles.detalhesTitulo}>{treino.titulo}</Text>
        <Text style={styles.detalhesDescricao}>{treino.descricao}</Text>
        <Button title="Fechar" onPress={onClose} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: 300,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
  },
  detalhesImagem: {
    width: '100%',
    height: 200,
    marginBottom: 10,
  },
  detalhesTitulo: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  detalhesDescricao: {
    fontSize: 16,
    marginBottom: 20,
  },
});

export default TreinoDetalhes;
