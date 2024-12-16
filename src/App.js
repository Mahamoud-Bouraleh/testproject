import React from 'react';
import './App.css'; // Assurez-vous d'avoir un fichier CSS pour styliser l'application

function App() {
  return (
    <div className="App">
      {/* Header avec sous-menus */}
      <header className="App-header">
        <nav>
          <ul>
            <li><a href="#acceuille">Acceuille</a></li>
            <li><a href="#histoire">Histoire</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* Contenu principal */}
      <main>
        <h1>Bienvenue dans mon app</h1>
      </main>

      {/* Footer avec numéro et icônes */}
      <footer className="App-footer">
        <p>Numéro de téléphone : +123 456 789</p>
        <div className="social-icons">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" alt="Facebook" />
          </a>
          <a href="https://wa.me" target="_blank" rel="noopener noreferrer">
            <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/WhatsApp_logo.svg" alt="WhatsApp" />
          </a>
          <a href="https://www.messenger.com" target="_blank" rel="noopener noreferrer">
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/58/Messenger_App_Logo_2020.png" alt="Messenger" />
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
