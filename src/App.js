import React from 'react';

import { BrowserRouter, Route } from "react-router-dom";

import Header from './components/Header/Header.js';
import Nav from './components/Nav/Nav.js';
import Footer from './components/Footer/Footer.js';
import Home from './pages/Home/Home.js';
import Pokemon from './pages/Pokemon/Pokemon.js';
import History from './pages/History/History.js';
import Help from './pages/Help/Help.js';

import './design.scss';

class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <Header />
        <main>
          <Nav />
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/pokemon">
            <Pokemon />
          </Route>
          <Route exact path="/history">
            <History />
          </Route>
          <Route exact path="/help">
            <Help />
          </Route>
        </main>
        <Footer />
      </BrowserRouter>
    );
  }
}

export default App;