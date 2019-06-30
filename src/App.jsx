import React from 'react';
import {
  // Route,
  Switch,
  withRouter
} from "react-router-dom";

import { MaterialRoute, AntRoute, SemanticRoute } from './components'

import './App.css';
import { AntHome, MaterialHome, SemanticHome } from './pages';


function App() {
  return (
    <Switch>

      {/* Material UI Routes */}
      <MaterialRoute path="/material" exact component={MaterialHome} />
      {/* <MaterialRoute path="/about/" component={About} /> */}
      {/* <MaterialRoute path="/server/" component={ServerPage} /> */}


      {/* Ant Design UI Routes */}
      <AntRoute path="/ant" exact component={AntHome} />
      {/* <AntRoute path="/about/" component={About} /> */}
      {/* <AntRoute path="/server/" component={ServerPage} /> */}


      {/* Semantic UI Routes */}
      <SemanticRoute path="/" exact component={SemanticHome} />
      {/* <SemanticRoute path="/about/" component={About} />
        <SemanticRoute path="/server/" component={ServerPage} /> */}
    </Switch>

  );
}

export default withRouter(App)
