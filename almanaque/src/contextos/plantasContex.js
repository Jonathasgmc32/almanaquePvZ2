import React, { createContext, useState, useEffect } from 'react';

export const PlantasContext = createContext();

export const PlantasProvider = ({ children }) => {
  const [plantas, setPlantas] = useState([]);

  const fetchPlantas = () => {
    fetch("http://localhost:3001/plantas")
      .then(response => response.json())
      .then(data => setPlantas(data))
      .catch(error => console.log(error));
  };

  const adicionarPlanta = (novaPlanta) => {
    setPlantas((prevPlantas) => [...prevPlantas, novaPlanta]);
  };

  useEffect(() => {
    fetchPlantas();
  }, []);

  return (
    <PlantasContext.Provider value={{ plantas, adicionarPlanta, fetchPlantas }}>
      {children}
    </PlantasContext.Provider>
  );
};