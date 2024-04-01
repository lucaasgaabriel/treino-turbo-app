import React from 'react';
import { View, Text, ScrollView, Image, StyleSheet } from 'react-native';

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  banner: {
    height: 200,
    marginBottom: 20,
  },
  image: {
    width: 300,
    height: 200,
    marginRight: 10,
  },
  cardContainer: {
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  card: {
    flex: 1,
    backgroundColor: '#ccc',
    marginRight: 10,
    height: 100,
  },
  menu: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  menuItem: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Home;
