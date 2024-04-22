import React from 'react'; 
import { View, Text, ScrollView, Image, StyleSheet } from 'react-native';
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


const Home = () => {
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
        <Text style={styles.menuItem}>Home</Text>
        <Text style={styles.menuItem}>Sobre</Text>
        <Text style={styles.menuItem}>Contato</Text>
      </View>
    </View>
  );
};

export default Home;
