import React, { useEffect, useState } from 'react';
import RouteList, { Route } from './components/RouteList';
import styles from './App.module.css';

const API_URL = process.env.REACT_APP_API_URL;

function App() {
  const [routes, setRoutes] = useState<Route[]>([]);

  useEffect(() => {
    fetch(`${API_URL}/routes`)
      .then((data) => data.json())
      .then((data) => setRoutes(data));
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1>Minha Lista de Rotas</h1>
        <hr />
        <RouteList routes={routes} />
      </div>
    </div>
  );
}

export default App;
