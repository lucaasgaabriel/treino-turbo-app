import React, { useState } from 'react';
import Home from './src/Home';
import Index from './src/Index';
import Sobre from './src/Sobre';
import Contato from './src/Contato'; 

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentPage, setCurrentPage] = useState('Home');

  // Função para alternar o estado de login
  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  // Função para alternar o estado de logout
  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentPage('Home'); // Volta para a página inicial após o logout
  };

  // Função para navegar para a página Sobre
  const handleNavigateToSobre = () => {
    setCurrentPage('Sobre');
  };

  // Função para navegar para a página Contato
  const handleNavigateToContato = () => {
    setCurrentPage('Contato');
  };

  // Função para navegar para a página Home
  const handleNavigateToHome = () => {
    setCurrentPage('Home');
  };

  // Renderiza o componente com base no estado de login e na página atual
  if (isLoggedIn) {
    if (currentPage === 'Sobre') {
      return <Sobre onSobre={handleNavigateToSobre} onContato={handleNavigateToContato} onHome={handleNavigateToHome} />;
    } else if (currentPage === 'Contato') {
      return <Contato onSobre={handleNavigateToSobre} onContato={handleNavigateToContato} onHome={handleNavigateToHome} />;
    } else {
      return <Home onLogout={handleLogout} onSobre={handleNavigateToSobre} onContato={handleNavigateToContato} />;
    }
  } else {
    return <Index onLogin={handleLogin} />;
  }
};

export default App;
