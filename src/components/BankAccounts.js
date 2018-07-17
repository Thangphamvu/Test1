import React, { Component } from 'react';
import AccountTransaction from './AccountTransaction';
class BankAccounts extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isShowDetail: false
		}
	}
	onShowDetail = () => {
		const {isShowDetail} = this.state;
		this.setState({
			isShowDetail: !isShowDetail
		});
	}
	render() {
		const {isShowDetail} = this.state;
		let elmDetail = isShowDetail ? <AccountTransaction/> : '';
		return (
			<div>
				<div className="row">
					<div className="col-xs-1 col-sm-1 col-md-1 col-lg-1">
						<i className='fa fa-star'></i>
					</div>
					<div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
						Konto Testaccount <br/>
						IBAN:
          </div>
					<div className="col-xs-2 col-sm-2 col-md-2 col-lg-2"></div>
					<div className="col-xs-2 col-sm-2 col-md-2 col-lg-2"></div>
					<div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
						date <br/>
						real time
          </div>
					<div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
						(data)money &euro;
          </div>
					<div className="col-xs-1 col-sm-1 col-md-1 col-lg-1">
						<i className={isShowDetail ? 'fa fa-chevron-down' : 'fa fa-chevron-right'}
							onClick={this.onShowDetail}>
						</i>
					</div>
				</div>
				{elmDetail}
				<hr/>
			</div>
		);
	}
}
export default BankAccounts;