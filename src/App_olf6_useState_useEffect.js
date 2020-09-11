import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [estadoCoche, ponerEstadoCoche] = useState(true);
  const [contarClicks, contandoClicks] = useState(0);
  useEffect(() => {
    console.log("Total Clicks: " + contarClicks);
  }, [contarClicks]);

  const encenderApagar = () => {
    // ponerEstadoCoche(!estadoCoche);
    ponerEstadoCoche((valorAnterior) => !valorAnterior);
    contandoClicks(contarClicks + 1);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h3>El coche esta: {estadoCoche ? "Encendido" : "Apagado"}</h3>
        <h4>Números de Clicks: {contarClicks}</h4>
        <button onClick={encenderApagar}>Encender / Apagar</button>
      </header>
    </div>
  );
}

export default App;
