import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <div className="row mt-5">
        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4" />
        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 center">
          IMPRESSUM DATENSCHUTZ
        </div>
        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 fontBrands right">
          <i className="fa fa-facebook-square mr-5" />
          <i className="fa fa-twitter-square mr-5" />
          <i className="fa fa-xing-square mr-5" />
          <i className="fa fa-linkedin-square mr-5" />
        </div>
      </div>
    );
  }
}
export default Footer;
