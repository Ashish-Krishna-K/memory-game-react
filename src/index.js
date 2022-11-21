import React from 'react';
import ReactDOM from 'react-dom/client';
import './Styles/index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <header>
      <h1>Genshin Memory Game</h1>
    </header>
    <main>
      <App />
    </main>
    <footer>
      <div>Genshin Impact, game content and materials are trademarks and copyrights of HoYoverse.</div>
      <div>Images for characters obtained from Paimon.moe</div>
      <div>Project by Ashish-Krishna-K</div>
    </footer>
  </React.StrictMode>
);
