import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { GlobalStyle } from './style/global-style.jsx'
import { ThemeProvider } from './components/theme/index.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>

    <ThemeProvider>
   
    <GlobalStyle/>
    <App />

    </ThemeProvider>
  
  </StrictMode>,
)
