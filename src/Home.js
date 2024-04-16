import React from 'react'; 
import { View, Text, ScrollView, Image, StyleSheet } from 'react-native';
import styles from '.src/stylesGeral.css';

const Home = () => {
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
        <View style={styles.row}>
          <View style={styles.card}></View>
          <View style={styles.card}></View>
        </View>
        <View style={styles.row}>
          <View style={styles.card}></View>
          <View style={styles.card}></View>
        </View>
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
