import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component{

    constructor(props){
        super(props);
        this.state = {
            account: this.props.account
        }
    }

    render(){
        return(
            <div>
                <div className="row">
                    <div className="col s12">
                        <div style={{textAlign:"center"}} className="container">
                            <h2><b>Welcome to Health-Book!</b></h2>
                            <i><h4>Your one-stop medical document library</h4></i>
                            <h6>Health-Book uses a technology called <b>Blockchain</b> which provides decentralization and immutabilty to any data present on it</h6>
                            <p>Powered by the <b><a href='https://ethereum.org/' target='_blank'>Ethereum Blockchain</a></b></p>
                            <p><i>Your account is: <b>{this.state.account}</b></i></p>
                            <p>Made with <i style={{verticalAlign:"bottom", color:"red"}} className="material-icons">favorite</i> by<b> Vatsal Gupta (17104060, B12)</b></p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <img className="activator" width="100%" src="images/home.png"/>
                </div>
            </div>
        )
    }
}

export default Home;