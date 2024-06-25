import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './pages/home/home';
import Navigation from './componentes/navbar/nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style/global.css";
import { PlantasProvider } from './contextos/plantasContex';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <PlantasProvider>
    <Navigation />
    <Home />
  </PlantasProvider>
);
