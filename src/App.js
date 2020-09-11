import React from "react";
import { Button } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Contacto from "./pages/Contacto";
import QuienSoy from "./pages/QuienSoy";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>React Bootstrap.</h1>
      <Router>
        <div>
          <Link to="/Contacto">
            <Button>Contacto</Button>
          </Link>
          <Link to="/QuienSoy">
            <Button>Quien Soy</Button>
          </Link>
        </div>
        <Switch>
          <Route path="/Contacto">
            <Contacto />
          </Route>
          <Route pat="/QuienSoy">
            <QuienSoy />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
