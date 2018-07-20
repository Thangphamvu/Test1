import React, { Component } from 'react';
import TransactionItem from './TransactionItem';
import Pagination from './Pagination';

class AccountTransaction extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 2,
      itemsPerPage: 6,
      sortValue: 1,
    };
  }
  onClick = number => {
    this.setState({
      currentPage: number,
    });
  };
  sortByTime = sortValue => {
    this.setState({
      sortValue: sortValue,
    });
  };
  render() {
    const { currentPage, itemsPerPage, sortValue } = this.state;
    const { transaction } = this.props;
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const quantityPage = Math.ceil(transaction.items.length / itemsPerPage);
    const sortedItems = transaction.items.sort((a, b) => {
      if (a.valueDate < b.valueDate) return sortValue;
      else if (a.valueDate > b.valueDate) return -sortValue;
      else return 0;
    });
    const currentItems =
      sortedItems && sortedItems.slice(indexOfFirstItem, indexOfLastItem);
    return (
      <div>
        <div className="row mt-20">
          <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1" />
          <div className="col-xs-11 col-sm-11 col-md-11 col-lg-11">
            <div className="row">
              <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                Eingang
                <br />
                Ausgang
              </div>
              <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                Bezeichnung
              </div>
              <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                Sender/Empänger
                <br />
                Betreff
              </div>
              <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2" />
              <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2 right">
                Betrag
              </div>
              <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2 right">
                <span className="pointer" onClick={() => this.sortByTime(1)}>
                  Buchnungstag
                </span>
                <br />
                <span className="pointer" onClick={() => this.sortByTime(-1)}>
                  Wertellung{' '}
                  <i
                    className={
                      sortValue === 1 ? 'fa fa-caret-down' : 'fa fa-caret-up'
                    }
                  />
                </span>
              </div>
            </div>
            <hr />
          </div>
        </div>
        {currentItems &&
          currentItems.map(currentItem => (
            <TransactionItem key={currentItem.id} currentItem={currentItem} />
          ))}
        <div className="row" />
        <div className="row mt-40">
          <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1" />
          <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
            Einträge pro Seite
          </div>
          <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 center">
            Zeige {indexOfFirstItem + 1} bis {indexOfLastItem} von{' '}
            {transaction.items.length}
          </div>
          <Pagination
            quantityPage={quantityPage}
            currentPage={currentPage}
            onClick={this.onClick}
          />
        </div>
      </div>
    );
  }
}
export default AccountTransaction;
