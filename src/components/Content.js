import React, { Component } from 'react';
import SideMenu from './SideMenu';
import MainContent from './MainContent';

class Content extends Component {
  render() {
    return (
      <div>
        <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2 side-menu">
          <SideMenu />
        </div>
        <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10 main-content">
          <MainContent />
        </div>
      </div>
    );
  }
}
export default Content;
