import React, { useState } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { View, Text, ScrollView, Image, TouchableOpacity, Modal, TextInput, Button } from 'react-native';
import styles from './stylesGeral.js';

// Dados dos treinos para o carrossel
const treinosCarousel = [
  require('../img/logo_Treino_Turbo_w_nome_brancov2.png'),
  // Adicione mais treinos conforme necessário
];

// Dados dos treinos para os cards
const treinosCards = [
  { 
    titulo: 'Treino de Pernas',
    descricao: 'Treino focado nos músculos ...',
    imagem: require('../img/treino-perna.jpg')
  },
  { 
    titulo: 'Treino de Braços',
    descricao: 'Treino focado nos músculos...',
    imagem: require('../img/treino-braco.jpg')
  },
  { 
    titulo: 'Treino de Abdômen',
    descricao: 'Treino focado nos músculos ...',
    imagem: require('../img/treino-abdomen.jpg')
  },
];

const Home = ({ onHome, onSobre, onContato }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [novoTreino, setNovoTreino] = useState({ titulo: '', descricao: '', observacoes: '', imagem: null });
  const [selectedTreino, setSelectedTreino] = useState(null);

  const handleSaveTreino = () => {
    // Adicione a lógica para salvar o novo treino
    setModalVisible(false);
  };

  const handleTreinoPress = (treino) => {
    setSelectedTreino(treino);
    setModalVisible(true);
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
                <TouchableOpacity onPress={() => handleTreinoPress(treino)}>
                  <Image source={treino.imagem} style={styles.cardBackgroundImage} />
                  <View style={styles.cardContent}>
                    <Text style={styles.cardTitle}>{treino.titulo}</Text>
                    <Text style={styles.cardDescription}>{treino.descricao}</Text>
                  </View>
                </TouchableOpacity>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>

      {/* Menu de navegação */}
      <View style={styles.menu}>
        <TouchableOpacity onPress={onSobre}>
          <Ionicons name="information-circle-outline" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity onPress={onHome}>
          <Ionicons name="home-outline" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity onPress={onContato}>
          <Ionicons name="mail-outline" size={24} color="white" />
        </TouchableOpacity>
      </View>

      {/* Modal para exibir detalhes do treino selecionado */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            {selectedTreino ? (
              <>
                <Text style={styles.modalTitle}>{selectedTreino.titulo}</Text>
                <Text style={styles.modalDescription}>{selectedTreino.descricao}</Text>
              </>
            ) : (
              <>
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
                <TextInput
                  style={styles.input}
                  placeholder="Observações"
                  value={novoTreino.observacoes}
                  onChangeText={(text) => setNovoTreino({ ...novoTreino, observacoes: text })}
                />
                {/* Botão para escolher uma imagem */}
                <TouchableOpacity
                  style={styles.Button}
                  onPress={() => console.log("Escolher imagem")} // Adicione a lógica para escolher uma imagem
                >
                  <Text style={styles.buttonText}>Escolher Imagem</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.Button} onPress={handleSaveTreino}>
                  <Text style={styles.buttonText}>Salvar</Text>
                </TouchableOpacity>
              </>
            )}
            <TouchableOpacity style={styles.Button} onPress={() => setModalVisible(false)}>
              <Text style={styles.buttonText}>Cancelar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Botão flutuante */}
      <TouchableOpacity
        style={styles.floatingButton}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.floatingButtonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
