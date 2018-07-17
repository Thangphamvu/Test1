import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import SideMenu from './components/SideMenu';
import Content from './components/Content';
import Footer from './components/Footer';
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 header"><Header/></div>
        </div>
        <div className="row">
          <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2 side-menu"><SideMenu/></div>
          <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10 content"><Content/></div>
        </div>
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 footer"><Footer/></div>
        </div>
      </div>
    );
  }
}
export default App;