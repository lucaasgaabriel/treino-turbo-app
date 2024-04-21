import React, { useState } from 'react';
import Home from './src/Home';
import Index from './src/Index';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  // Função para alternar o estado de login
  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  // Função para alternar o estado de logout
  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  // Renderiza o componente com base no estado de login
  return isLoggedIn ? <Home onLogout={handleLogout} /> : <Index onLogin={handleLogin} />;
};

export default App;
