import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { AuthContextProvider } from './contexts/authContext.jsx';
import { BrowserRouter as Router } from 'react-router-dom';

// Renderiza la aplicación en el DOM
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthContextProvider>
      <Router>
        <App />
      </Router>
    </AuthContextProvider>
  </StrictMode>
);