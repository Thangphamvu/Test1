import React, { Component } from 'react';

class TransactionItem extends Component {
  render() {
    const { currentItem } = this.props;
    return (
      <div className="row mb-40">
        <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1" />
        <div className="col-xs-11 col-sm-11 col-md-11 col-lg-11">
          <div className="row">
            <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
              {currentItem.amount > 0 ? (
                <i className="fa fa-sign-in fontSignIn" />
              ) : (
                <i className="fa fa-sign-out fontSignOut" />
              )}
            </div>
            <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2" />
            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
              {currentItem.counterpartName} <br />
              {currentItem.purpose}
            </div>
            <div
              className={
                currentItem.amount > 0
                  ? 'col-xs-2 col-sm-2 col-md-2 col-lg-2 right inIndex'
                  : 'col-xs-2 col-sm-2 col-md-2 col-lg-2 right outIndex'
              }
            >
              {currentItem.amount} &euro;
            </div>
            <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2 right">
              {currentItem.bankBookingDate.slice(0, 10)}
              <br />
              {currentItem.valueDate.slice(0, 10)}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default TransactionItem;
