import React, { useEffect, useState } from 'react';
import RouteList, { Route } from './components/RouteList';
import styles from './App.module.css';

function App() {
  const [routes, setRoutes] = useState<Route[]>([]);

  useEffect(() => {
    fetch('http://localhost:3000/routes')
      .then((data) => data.json())
      .then((data) => setRoutes(data));
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1>Imersão FullCycle</h1>
        <h2>Segundo Desafio</h2>
        <hr />
        <RouteList routes={routes} />
      </div>
    </div>
  );
}

export default App;
