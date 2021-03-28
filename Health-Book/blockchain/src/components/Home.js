import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component{

    constructor(props){
        super(props);
        let role = false;
        if(localStorage.getItem('Role')){
            role = true;
        }
        this.state = {
            account: this.props.account,
            role
        }
    }

    render(){
        return(
            <div>
                <div className="row">
                    <div className="col s8">
                        <div className="container">
                            <h2><b>Welcome to Health-Book!</b></h2>
                            <i><h4>Your one-stop medical document library</h4></i>
                            <h6>Health-Book uses a technology called <b>Blockchain</b> which provides decentralization and immutabilty to any data present on it</h6>
                            <p>Powered by the <b><a href='https://ethereum.org/' target='_blank'>Ethereum Blockchain</a></b></p>
                            <p><i>Your account is: <b>{this.state.account}</b></i></p>
                            <p>Made with <i style={{verticalAlign:"bottom", color:"red"}} className="material-icons">favorite</i> by<b> Vatsal Gupta (17104060, B12)</b></p>
                        </div>
                    </div>
                {!this.state.role &&    <div className="col s4">
                        <div className="container">
                            <ul className="collection with-header" style={{marginTop: 50}}>
                                <li className="collection-header"><h6><b>Choose what you want to do</b></h6></li>
                                <li className="collection-item"><i className="material-icons" style={{verticalAlign:"bottom"}}>cloud_upload</i>&nbsp;&nbsp;&nbsp;<Link to='/upload'>Upload a medical document</Link></li>
                                <li className="collection-item"><i className="material-icons" style={{verticalAlign:"bottom"}}>insert_drive_file</i>&nbsp;&nbsp;&nbsp;<Link to='/view'>View your uploaded medical documents</Link></li>
                                <li className="collection-item"><i className="material-icons" style={{verticalAlign:"bottom"}}>person_add</i>&nbsp;&nbsp;&nbsp;<Link to='/doctors'>View/Add a trusted doctor</Link></li>
                                <li className="collection-item"><i className="material-icons" style={{verticalAlign:"bottom"}}>person_add</i>&nbsp;&nbsp;&nbsp;<Link to='/pharmacists'>View/Add a trusted pharmacist</Link></li>
                            </ul>
                        </div>
        </div> }
                </div>
                <div className="row">
                    <img className="activator" width="100%" src="images/home.png"/>
                </div>
            </div>
        )
    }
}

export default Home;