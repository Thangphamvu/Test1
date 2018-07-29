import React, { Component, Fragment } from 'react';
import AccountTransaction from './AccountTransaction';

class BankAccounts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showAccountTransaction: false,
    };
  }

  toggleAccountTransaction = () => {
    const { showAccountTransaction } = this.state;
    this.setState({
      showAccountTransaction: !showAccountTransaction,
    });
  };

  render() {
    const { showAccountTransaction } = this.state;
    const { account } = this.props;
    return (
      <Fragment>
        <div className="row">
          <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1 right">
            <i className="fa fa-star fontStar" />
          </div>
          <div className="col-xs-11 col-sm-11 col-md-11 col-lg-11">
            <div className="row">
              <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                Konto {account.accountName}
                <br />
                IBAN:
              </div>
              <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4" />
              <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2 right">
                {account.lastSuccessfulUpdate}
              </div>
              <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2 accountBalance right">
                {account.balance} &euro;
              </div>
              <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2 right">
                <i
                  className={
                    showAccountTransaction
                      ? 'fa fa-chevron-down fontQuestion pointer'
                      : 'fa fa-chevron-right fontQuestion pointer'
                  }
                  onClick={this.toggleAccountTransaction}
                />
              </div>
            </div>
          </div>
        </div>
        {showAccountTransaction && (
          <AccountTransaction transaction={account.transaction} />
        )}
        <hr />
      </Fragment>
    );
  }
}
export default BankAccounts;
