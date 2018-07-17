import React, { Component } from 'react';
import IoIcon from './IoIcon';
import NamePurpose from './NamePurpose';
import Amount from './Amount';
import DtDate from './DtDate';
class DataTable extends Component {
	render() {
		return (
			<div className="row">
				<div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"></div>
				<IoIcon/>
				<div className="col-xs-2 col-sm-2 col-md-2 col-lg-2"></div>
				<NamePurpose/>
				<div className="col-xs-2 col-sm-2 col-md-2 col-lg-2"></div>
				<Amount/>
				<DtDate/>
			</div>
		);
	}
}
export default DataTable;