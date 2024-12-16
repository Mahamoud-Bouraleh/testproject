import React from 'react';
import './App.css'; // Assurez-vous que le fichier CSS est bien lié
import connexionImage from './connexion.png'; // Importation de l'image locale

function App() {
  return (
    <div className="App">
      {/* Header */}
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

      {/* Paragraphe sur l'intelligence artificielle et image */}
      <section className="ai-section">
        <div className="ai-text">
          <h2>Qu'est-ce que l'Intelligence Artificielle ?</h2>
          <p>
            L'intelligence artificielle (IA) désigne la simulation de processus d'intelligence humaine par des systèmes informatiques. Cela inclut l'apprentissage automatique, la reconnaissance vocale, la vision par ordinateur, et bien plus encore. L'IA transforme divers secteurs, tels que la médecine, l'automobile, l'éducation, et la finance, en optimisant les processus et en rendant les systèmes plus autonomes et efficaces.
          </p>
        </div>
        <div className="ai-image">
          {/* Utilisation de l'image importée */}
          <img src={connexionImage} alt="Intelligence Artificielle" />
        </div>
      </section>

      {/* Footer */}
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
