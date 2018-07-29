import React, { Component } from 'react';
import SideMenu from './SideMenu';
import MainContent from './MainContent';

class Content extends Component {
  render() {
    return (
      <div>
        <div className="col-xs-0 col-sm-0 col-md-2 col-lg-2 side-menu">
          <SideMenu />
        </div>
        <div className="col-xs-12 col-sm-12 col-md-10 col-lg-10 main-content">
          <MainContent />
        </div>
      </div>
    );
  }
}
export default Content;
