import React, { useState } from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, Modal, TextInput, Button } from 'react-native';
import styles from './stylesGeral.js';

// Dados dos treinos para o carrossel
const treinosCarousel = [
  require('../img/image.png'),
  // Adicione mais treinos conforme necessário
];

// Dados dos treinos para os cards
const treinosCards = [
  { 
    titulo: 'Treino de Pernas',
    descricao: 'Treino focado nos músculos ...',
    imagem: require('../img/Peso.png')
  },
  { 
    titulo: 'Treino de Braços',
    descricao: 'Treino focado nos músculos...',
    imagem: require('../img/Peso.png')
  },
  { 
    titulo: 'Treino de Triceps',
    descricao: 'Treino focado nos músculos ...',
    imagem: require('../img/image.png')
  },
  { 
    titulo: 'Treino de Bicpes',
    descricao: 'Treino focado nos músculos...',
    imagem: require('../img/image.png')
  },
  // Adicione mais treinos conforme necessário
];

const Home = ({ onSobre, onContato }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [novoTreino, setNovoTreino] = useState({ titulo: '', descricao: '' });

  const handleSaveTreino = () => {
    // Adicione a lógica para salvar o novo treino
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.banner}>
          {/* Carrossel de imagens */}
          <ScrollView horizontal={true} contentContainerStyle={styles.carouselContainer}>
            {treinosCarousel.map((imagem, index) => (
              <Image key={index} source={imagem} style={styles.imageCarousel} />
            ))}
          </ScrollView>
        </View>
        <View style={styles.cardContainer}>
          {/* Grade de cartões */}
          <View style={styles.cardRow}>
            {treinosCards.map((treino, index) => (
              <View key={index} style={styles.card}>
                <Image source={treino.imagem} style={styles.cardBackgroundImage} />
                <View style={styles.cardContent}>
                  <Text style={styles.cardTitle}>{treino.titulo}</Text>
                  <Text style={styles.cardDescription}>{treino.descricao}</Text>
                </View>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
      {/* Menu de navegação */}
      <View style={styles.menu}>
        <TouchableOpacity onPress={onSobre}>
          <Text style={styles.menuItem}>Sobre</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onContato}>
          <Text style={styles.menuItem}>Contato</Text>
        </TouchableOpacity>
      </View>
      {/* Botão flutuante */}
      <TouchableOpacity
        style={styles.floatingButton}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.floatingButtonText}>+</Text>
      </TouchableOpacity>

      {/* Modal para criar novo treino */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Novo Treino</Text>
            <TextInput
              style={styles.input}
              placeholder="Título do Treino"
              value={novoTreino.titulo}
              onChangeText={(text) => setNovoTreino({ ...novoTreino, titulo: text })}
            />
            <TextInput
              style={styles.input}
              placeholder="Descrição do Treino"
              value={novoTreino.descricao}
              onChangeText={(text) => setNovoTreino({ ...novoTreino, descricao: text })}
            />
            <TouchableOpacity style={styles.Button} onPress={handleSaveTreino}>
              <Text style={styles.buttonText}>Salvar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.Button} onPress={() => setModalVisible(false)}>
              <Text style={styles.buttonText}>Cancelar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Home;
