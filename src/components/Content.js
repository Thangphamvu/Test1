import React, { Component } from 'react';
import BankConnection from './BankConnection';
class Content extends Component {
  render() {
    return (
      <div className='col-xs-12 col-sm-12 col-md-9 col-lg-9'>
        <h3>Mein Banking</h3>
        <p>Meine Konten</p>
        <BankConnection/>
      </div>
    );
  }
}
export default Content;