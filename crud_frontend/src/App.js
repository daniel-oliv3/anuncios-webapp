import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Visualizar } from './pages/Visualizar';
import { Cadastrar } from "./pages/Cadastrar";
import { Editar } from "./pages/Editar";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/visualizar" component={Visualizar} />
          <Route path="/cadastrar" component={Cadastrar} />
          <Route path="/editar" component={Editar} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
