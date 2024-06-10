import React, { useState, useEffect } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { View, Text, ScrollView, Image, TouchableOpacity, Modal, TextInput, Button } from 'react-native';
import styles from './stylesGeral.js';
import Index from './Index';
import axios from 'axios';

const API_URL = 'http://10.215.24.170:3000'

// importar o idTipoUsuario salvo no login
const idTipoUsuario = Index.idTipoUsuario;

console.log('ID_TIPO_USUARIO:', idTipoUsuario);

// Dados dos treinos para o carrossel
const treinosCarousel = [
  require('../img/logo_Treino_Turbo_w_nome_brancov2.png'),
  // Adicione mais treinos conforme necessário
];

/*// Dados dos treinos para os cards
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
];*/

const VisualizarTreinoModal = ({ visible, treino, onClose }) => (
  <Modal
    animationType="slide"
    transparent={true}
    visible={visible}
    onRequestClose={onClose}
  >
    <View style={styles.modalContainer}>
      <View style={styles.modalContent}>
        <Text style={styles.modalTitle}>{treino?.MN_TREINO}</Text>
        <Text style={styles.modalDescription}>{treino?.DS_TREINO}</Text>
        <Text style={styles.modalDescription}>{treino?.EXERCICIOS}</Text>
        <TouchableOpacity style={styles.Button} onPress={onClose}>
          <Text style={styles.buttonText}>Fechar</Text>
        </TouchableOpacity>
      </View>
    </View>
  </Modal>
);

const NovoTreinoModal = ({ visible, novoTreino, setNovoTreino, onSave, onClose, onSelectUser  }) => (
  <Modal
    animationType="slide"
    transparent={true}
    visible={visible}
    onRequestClose={onClose}
  >
    <View style={styles.modalContainer}>
      <View style={styles.modalContent}>
        <Text style={styles.modalTitle}>Novo Treino</Text>
        <TextInput
          style={styles.input}
          placeholder="Título do Treino"
          value={novoTreino.mnTreino}
          onChangeText={(text) => setNovoTreino({ ...novoTreino, mnTreino: text })}
        />
        <TextInput
          style={styles.input}
          placeholder="Descrição do Treino"
          value={novoTreino.dsTreino}
          onChangeText={(text) => setNovoTreino({ ...novoTreino, dsTreino: text })}
        />
        <TextInput
          style={styles.input}
          placeholder="Exercícios"
          value={novoTreino.exercicios}
          onChangeText={(text) => setNovoTreino({ ...novoTreino, exercicios: text })}
        />
        <TouchableOpacity
          style={styles.Button}
          onPress={onSelectUser}
        >
          <Text style={styles.buttonText}>Alunos</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.Button} onPress={onSave}>
          <Text style={styles.buttonText}>Salvar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.Button} onPress={onClose}>
          <Text style={styles.buttonText}>Cancelar</Text>
        </TouchableOpacity>
      </View>
    </View>
  </Modal>
);

const Home = ({ onHome, onSobre, onContato }) => {
  const [treinos, setTreinos] = useState([]);
  const [viewModalVisible, setViewModalVisible] = useState(false);
  const [newModalVisible, setNewModalVisible] = useState(false);
  const [novoTreino, setNovoTreino] = useState({ idTreino: '', mnTreino: '', dsTreino: '', exercicios: '', idUsuario: '', idImagem: '' });
  const [selectedTreino, setSelectedTreino] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectUserModalVisible, setSelectUserModalVisible] = useState(false);
  const [users, setUsers] = useState([]);
  const [isUserSelectionModalVisible, setUserSelectionModalVisible] = useState(false); // Adicionado

  useEffect(() => {
    axios.get(`${API_URL}/treinos`)
      .then(response => {
        setTreinos(response.data);
        setIsLoading(false);
      })
      .catch(error => {
        console.error('Erro ao buscar os treinos:', error);
        setError('Ocorreu um erro ao buscar os treinos');
        setIsLoading(false);
      });

      loadUsers();
  }, []);

  const loadUsers = () => {
    axios.get(`${API_URL}/usuarios`)
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        console.error('Erro ao buscar os usuários:', error);
      });
  };

  const handleSaveTreino = () => {
    axios.post(`${API_URL}/newTreino`, {
      idTreino: novoTreino.idTreino,
      exercicios: novoTreino.exercicios,
      idUsuario: novoTreino.idUsuario,
      idImagem: novoTreino.idImagem,
      mnTreino: novoTreino.mnTreino,
      dsTreino: novoTreino.dsTreino,
    })
    .then(response => {
      console.log('Treino salvo com sucesso');
      setTreinos([...treinos, response.data]);
      setNovoTreino({ idTreino: '', mnTreino: '', dsTreino: '', exercicios: '', idUsuario: '', idImagem: '' });
      setNewModalVisible(false);
    })
    .catch(error => {
      console.error('Erro ao salvar treino:', error);
    });
  };

  const handleSelectUser = (userId) => {
    setNovoTreino({ ...novoTreino, idUsuario: userId });
    setUserSelectionModalVisible(false); // Alterado para fechar a modal de seleção de usuário
    };

  const handleTreinoPress = (treino) => {
    setSelectedTreino(treino);
    setViewModalVisible(true);
  };

  const handleOpenNewTreinoModal = () => {
    setUserSelectionModalVisible(false); // Fechar a modal de seleção de usuário
    setNewModalVisible(true); // Abrir a modal de cadastro de treino
  };

  console.log('Treinos:', treinos);



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
            {treinos.map((treino, index) => (
              <View key={index} style={styles.card}>
                <TouchableOpacity onPress={() => handleTreinoPress(treino)}>
                  <Image source={require('../img/treino-abdomen.jpg')} style={styles.cardBackgroundImage} />
                  <View style={styles.cardContent}>
                    <Text style={styles.cardTitle}>{treino.MN_TREINO}</Text>
                    <Text style={styles.cardDescription}>{treino.DS_TREINO}</Text>
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
      <VisualizarTreinoModal 
        visible={viewModalVisible} 
        treino={selectedTreino} 
        onClose={() => setViewModalVisible(false)} 
      />

      {/* Modal para criar novo treino */}
      <NovoTreinoModal 
        visible={newModalVisible} 
        novoTreino={novoTreino} 
        setNovoTreino={setNovoTreino}
        onSave={handleSaveTreino} 
        onClose={() => setNewModalVisible(false)} 
        onSelectUser={handleOpenNewTreinoModal} // Alterado para abrir a modal de seleção de usuário
      />

      {/* Modal para selecionar usuário */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={setUserSelectionModalVisible}
        onClose={() => setSelectUserModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Selecionar Usuário</Text>
            {users.map(user => (
              <TouchableOpacity
                key={user.ID_USUARIO}
                style={styles.buttonText}
                onPress={() => {
                  handleSelectUser(user.ID_USUARIO);
                  onOpenNewTreinoModal(); // Chamando a função para abrir a modal de cadastro de treino
                }}
              >
                <Text>{user.NM_USUARIO} - {user.CPF_USUARIO}</Text>
              </TouchableOpacity>
            ))}
            <TouchableOpacity style={styles.Button} onPress={() => setUserSelectionModalVisible(false)}>
              <Text style={styles.buttonText}>Cancelar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Botão flutuante */}
      <TouchableOpacity
        style={styles.floatingButton}
        onPress={() => setNewModalVisible(true)}
      >
        <Text style={styles.floatingButtonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
