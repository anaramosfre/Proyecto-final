import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { CssBaseline } from '@mui/material';
import UserProvider from './Context/UserContext.jsx';
import { Provider } from "./Context/Context"
import FavoritesProvider from './Context/FavoritesContex.jsx';
import  CarritoProvider from './Context/CarritoContext.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CssBaseline />
    <Provider>
      <UserProvider>
        <FavoritesProvider>
          <CarritoProvider>
          <App />
          </CarritoProvider>
        </FavoritesProvider>
      </UserProvider>
    </Provider>
  </React.StrictMode>,
)
