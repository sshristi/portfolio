import React from 'react';
import logo from './logo.svg';
import './App.css';
import Technical from './components/Technical';
import Blogging from './components/Blogging';
import Photography from './components/Photography';
import ArtisianDormitory from './components/ArtisianDormitory';
import Home from './components/Home';

import { BrowserRouter as Router, Switch, Link, Route, Redirect } from 'react-router-dom';

function App() {
  return (
    <div>
        <Switch>
          <Route exact path="/" component={Home} />
          {/* <Route path="/home" component={Home} />     */}
          <Route exact path="/tech" component={Technical} />
          <Route exact path="/blog" component={Blogging} />
          <Route exact path="/click" component={Photography} />
          <Route exact path="/art" component={ArtisianDormitory} />
        </Switch>
      </div>
  );
}

export default App;
