import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import SideMenu from './components/SideMenu';
import MeinBanking from './components/MeinBanking';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="header"><Header /></div>
        <div className="side-menu"><SideMenu /></div>
        <div className="content"><MeinBanking /></div>
        <div className="footer"><Footer /></div>
      </div>
    );
  }
}

export default App;
