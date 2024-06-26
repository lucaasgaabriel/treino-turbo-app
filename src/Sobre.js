import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import stylesGeral from './stylesGeral'; // Importa o estilo geral
import stylesSobre from './styleSobre'; // Importa os estilos locais

const Sobre = ({ onSobre, onContato, onHome }) => {
  return (
    <View style={stylesGeral.container}>
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

      {/* Conteúdo da página Sobre */}
      <View style={stylesSobre.container}>
        <View style={stylesSobre.header}>
          <Image
            source={require('../img/image.png')} // Substitua pelo caminho da sua logo
            style={stylesSobre.logo}
          />
          <Text style={stylesSobre.Title}>Sobre o Treino Turbo</Text>
        </View>
      
        <View style={stylesSobre.content}>
          {/* Nova seção: Linha do Tempo */}
          <View style={stylesSobre.timeline}>
            <View style={stylesSobre.timelineItem}>
              <View style={stylesSobre.timelineIcon02}>
                <Text style={stylesSobre.timelineIconText}>2024</Text>
              </View>
              <Text style={stylesSobre.timelineText}>
                Fundação da empresa Fit.
              </Text>
            </View>

            <View style={stylesSobre.timelineItem}>
              <View style={stylesSobre.timelineIcon}>
                <Text style={stylesSobre.timelineIconText}>2015</Text>
              </View>
              <Text style={stylesSobre.timelineText}>
                Lançamento do aplicativo de montagem de treinos.
              </Text>
            </View>

            <View style={stylesSobre.timelineItem}>
              <View style={stylesSobre.timelineIcon}>
                <Text style={stylesSobre.timelineIconText}>2024</Text>
              </View>
              <Text style={stylesSobre.timelineText}>
                Lançamento do aplicativo de montagem de treinos.
              </Text>
            </View>

            <View style={stylesSobre.timelineItem}>
              <View style={stylesSobre.timelineIcon}>
                <Text style={stylesSobre.timelineIconText}>2015</Text>
              </View>
              <Text style={stylesSobre.timelineText}>
                Lançamento do aplicativo de montagem de treinos.
              </Text>
            </View>

            <View style={stylesSobre.timelineItem}>
              <View style={stylesSobre.timelineIcon}>
                <Text style={stylesSobre.timelineIconText}>2024</Text>
              </View>
              <Text style={stylesSobre.timelineText}>
                Lançamento do aplicativo de montagem de treinos.
              </Text>
            </View>
            {/* Adicione mais itens à linha do tempo conforme necessário */}
            
          </View>

          {/* Nova seção: Informações de Contato */}
          <View style={stylesSobre.contactInfo}>
            {/* Lado esquerdo: Mapa */}
            <View style={stylesSobre.mapContainer}>
              {/* Aqui você pode adicionar o componente do mapa */}
            </View>
            
            {/* Lado direito: Detalhes de contato */}
            <View style={stylesSobre.contactDetails}>
              {/* Aqui você pode adicionar os detalhes de contato */}
              <Text style={stylesSobre.timelineText}>Email: exemplo@exemplo.com</Text>
              <Text style={stylesSobre.timelineText}>Telefone: (XX) XXXX-XXXX</Text>
              <Text style={stylesSobre.timelineText}>Endereço: Rua Exemplo, 123 - Cidade, Estado</Text>
            </View>
          </View>

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

export default Sobre;
