import React, { Component } from 'react';
import '../App.css';
import Header from '../components/Header';
import Content from '../components/Content';
import Footer from '../components/Footer';

class AsyncApp extends Component {
  render() {
    return (
      <div className="App">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 header">
            <Header />
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 content">
            <Content />
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 footer">
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}
export default AsyncApp;
