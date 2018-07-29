import React, { Component, Fragment } from 'react';
import BankAccounts from './BankAccounts';
class BankConnection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showBankAccounts: false,
    };
  }
  toggleBankAccounts = () => {
    const { showBankAccounts } = this.state;
    this.setState({
      showBankAccounts: !showBankAccounts,
    });
  };
  render() {
    const { showBankAccounts } = this.state;
    const { connection, accounts } = this.props;
    return (
      <Fragment>
        {/* connection header */}
        <div className="row mt-40">
          <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1 fontF">
            <span>F</span>
          </div>
          <div className="col-xs-11 col-sm-11 col-md-11 col-lg-11">
            <div className="row">
              <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                {connection && connection.bank && connection.bank.name}
                <br />
                BIC:{connection && connection.bank && connection.bank.bic}
              </div>
              <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4" />
              <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2 right">
                Saldo per
              </div>
              <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2 right">
                Saldo in &euro;
              </div>
              <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2 right">
                <i
                  className={
                    showBankAccounts
                      ? 'fa fa-chevron-down fontQuestion pointer'
                      : 'fa fa-chevron-right fontQuestion pointer'
                  }
                  onClick={this.toggleBankAccounts}
                />
              </div>
            </div>
          </div>
        </div>
        <hr />
        {/* connection body */}
        {accounts &&
          accounts.map(account => {
            return (
              showBankAccounts && (
                <BankAccounts key={account.id} account={account} />
              )
            );
          })}
      </Fragment>
    );
  }
}
export default BankConnection;
