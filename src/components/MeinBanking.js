import React, { Component } from 'react';
import Account from './Account';

class MeinBanking extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isShowAccount: false
        }
    }

    onToggleAccount = () => {
        const { isShowAccount } = this.state;
        this.setState({
            isShowAccount: !isShowAccount
        });
    }

    render() {
        const { isShowAccount } = this.state;
        let elmAccount = isShowAccount ? <Account /> : '';
        return (
            <div className='col-xs-12 col-sm-12 col-md-8 col-lg-8'>
                <h3>Mein Banking</h3>
                <p>Meine Konten</p>
                <div className="row mt-40">
                    <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1">
                        <i className='fa fa-facebook-f'></i>
                    </div>
                    <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                        FinAPI Test Bank <br />
                        BIC:
                    </div>
                    <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">

                    </div>
                    <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">

                    </div>
                    <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                        Saldo per
                    </div>
                    <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                        Saldo in &euro;
                    </div>
                    <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1">
                        <i
                            className={isShowAccount ? 'fa fa-chevron-down' : 'fa fa-chevron-right'}
                            onClick={this.onToggleAccount}
                        ></i>
                    </div>
                </div>
                <hr/>
                {elmAccount}
                <div className="row">
                    <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10 bkgr">
                            <div className="left">Deine Liquiditat:</div>
                            <div className="right">numb &euro;</div>
                    </div>
                    <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2 center">
                        <i className="fa fa-question"></i>
                    </div>
                </div>
            </div>
        );
    }
}

export default MeinBanking;
