import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import App from './App.jsx'
import { ThemeProvider } from './context/ThemeContext';
import ReactGA from 'react-ga4';

// Inicializa o Google Analytics 4 com a sua ID da imagem
ReactGA.initialize('G-HQTEE9REXP');

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>,
)
