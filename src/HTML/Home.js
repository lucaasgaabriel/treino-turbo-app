import React from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import { styles } from './HomeStyles'; // Importe os estilos

const Home = () => {
  // Exemplo de lista de treinos
  const treinos = [
    { titulo: 'Treino de Perna', descricao: 'Treino focado em fortalecer e tonificar as pernas.' },
    { titulo: 'Treino de Braço', descricao: 'Treino focado em desenvolver os músculos dos braços.' },
    // Adicione outros treinos conforme necessário
  ];

  return (
    <View style={styles.container}>
      <View style={styles.banner}>
        {/* Carrossel de imagens */}
        <ScrollView horizontal={true}>
          <Image source={require('../img/TreinoTurboBrandbyDesigner.png')} style={styles.image} />
          <Image source={require('../img/TreinoTurboBrandbyDesigner.png')} style={styles.image} />
          <Image source={require('../img/TreinoTurboBrandbyDesigner.png')} style={styles.image} />
        </ScrollView>
      </View>
      <View style={styles.cardContainer}>
        {/* Grade de cartões */}
        {treinos.map((treino, index) => (
          <View key={index} style={styles.row}>
            <View style={styles.card}>
              <Text style={styles.cardTitle}>{treino.titulo}</Text>
              <Text>{treino.descricao}</Text>
            </View>
          </View>
        ))}
      </View>
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
