import React, { Component } from 'react';
import Data from './Data';

class Detail extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isShowData : true
        }
    }

    onShowData = () => {
        this.setState({
            isShowData : true
        });
    }

    onCloseData = () => {
        this.setState({
            isShowData : false
        });
    }

    render() {
        const { isShowData } = this.state;
        let elmData = isShowData ? <Data /> : '';
        return (
            <div>
                <div className="row mt-20">
                    <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1">
                    </div>
                    <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                        Eingang <br />
                        Ausgang
                    </div>
                    <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                        Bezeichnung
                    </div>
                    <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                        Sender/Empanger <br />
                        Betreff
                    </div>
                    <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">

                    </div>
                    <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                        Betrag
                    </div>
                    <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1">
                        <span onClick={this.onShowData}>Buchnungstag</span> <br />
                        <span onClick={this.onCloseData}>
                            Wertellung <i className={isShowData ? "fa fa-caret-down" : "fa fa-caret-up"}></i>
                        </span>
                    </div>
                </div>
                <div className="col-xs-11 col-sm-11 col-md-11 col-lg-11 right">
                    <hr/>
                </div>
                {elmData}
                <div className="row mt-20">
                    <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1">
                    </div>
                    <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5">
                        Eintrage pro Seite
                    </div>
                    <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                        Zeige ? bis ? Eitrage von ?
                    </div>
                    <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                        aassdffgghhjjkkzxccvbbnn
                    </div>
                </div>
            </div>
        );
    }
}

export default Detail;
