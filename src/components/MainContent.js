import React, { Component } from 'react';
import { connect } from 'react-redux';
import { sortItems, fetchData } from '../actions';
import BankConnection from './BankConnection';

class MainContent extends Component {
  componentDidMount() {
    this.props.fetchData();
  }

  render() {
    const { isFetching, banking, error } = this.props;

    if (isFetching) {
      return <div className="alert alert-success">Loading....</div>;
    } else if (!banking) {
      return <div className="alert alert-danger">Data not found</div>;
    } else if (error) {
      return <div className="alert alert-danger">{error}</div>;
    }

    return (
      <div className="col-xs-12 col-sm-12 col-md-9 col-lg-9">
        <h3>Mein Banking</h3>
        <p>Meine Konten</p>
        <div>
          {banking.connections &&
            banking.connections.map(connection => {
              const accounts =
                banking.accounts &&
                banking.accounts.filter(
                  account => account.bankConnectionId === connection.id
                );
              const accountWithTransactions = accounts.map(account => {
                if (banking.transactions && banking.transactions[account.id]) {
                  account.transaction = banking.transactions[account.id];
                  return account;
                }
                return account;
              });
              return (
                <BankConnection
                  key={connection.id}
                  connection={connection}
                  accounts={accountWithTransactions}
                />
              );
            })}
        </div>
        <div className="row">
          <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5 bkgr">
            <div>Deine Liquidität:</div>
          </div>
          <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5 bkgr">
            <div className="right accountBalance">total &euro;</div>
          </div>
          <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1" />
          <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1 center">
            <i className="fa fa-question fontQuestion" />
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  ({ tasks }) => ({
    isFetching: tasks.isFetching,
    banking: tasks.banking,
    error: tasks.error,
    sortValue: tasks.sortValue,
    currentPage: tasks.currentPage,
    itemsPerPage: tasks.itemsPerPage,
  }),
  {
    sortItems,
    fetchData,
  }
)(MainContent);
