import React, { Component } from 'react'
import { NavLink, withRouter } from 'react-router-dom'
import Identicon from './identicon';


class Navbar extends Component {
    constructor(props){
        super(props);
        let loggedIn = false;
        if(localStorage.getItem('loggedIn')){
            loggedIn = true;
        }
        let role = false;
        if(localStorage.getItem('Role')){
            role = true;
        }
        this.state = {
            location: "",
            identicon: null,
            loading: true, 
            account: this.props.account,
            loggedIn,
            role
        }
        
    }

    render(){
        if(!this.state.loggedIn){
            return ( 
                <nav className="nav-wrapper blue darken-3">
                    <div className="container">
                        <a href="#" className="brand-logo center"><i style={{marginTop: 5}} className="material-icons">local_hospital</i>Health-Book</a>
                        <ul className="right hide-on-med-and-down">
                        <li><NavLink to="/login">Log In</NavLink></li>
                        <li><NavLink to="/signup">Sign Up</NavLink></li>
                            {/* <li>
                            { this.props.account
                                ? <img
                                    style={{marginTop: 15, marginLeft: 15}}
                                    className='v-align center'
                                    id="icon"
                                    width='30'
                                    height='30'
                                    src={`data:image/png;base64,${new Identicon(this.state.account, 30).toString()}`}
                                />
                                : <span></span>
                                }
                            </li> */}
                        </ul>
                    </div>
                </nav>
            )
        }else if (this.state.loggedIn && !this.state.role){
            return(
                <nav className="nav-wrapper blue darken-3">
                    <div className="container">
                    <a href="#" className="brand-logo"><i style={{marginTop: 5}} className="material-icons">local_hospital</i>Health-Book</a>
                        <ul className="right hide-on-med-and-down">
                            <li><NavLink to="/">Home</NavLink></li>
                            <li><NavLink to="/upload">Upload</NavLink></li>
                            <li><NavLink to="/view">View</NavLink></li>
                            <li><NavLink to="/doctors">Doctors</NavLink></li>
                            <li><NavLink to="/pharmacists">Pharmacists</NavLink></li>
                            <li><NavLink to="/logout">Logout</NavLink></li>
                            {/* <li>
                            { this.props.account
                                ? <img
                                    style={{marginTop: 15, marginLeft: 15}}
                                    className='v-align center'
                                    id="icon"
                                    width='30'
                                    height='30'
                                    src={`data:image/png;base64,${new Identicon(this.state.account, 30).toString()}`}
                                />
                                : <span></span>
                                }
                            </li> */}
                        </ul>
                    </div>
                </nav>
            )
        }
        else{
            return(
                <nav className="nav-wrapper blue darken-3">
                <div className="container">
                <a href="#" className="brand-logo"><i style={{marginTop: 5}} className="material-icons">local_hospital</i>Health-Book</a>
                    <ul className="right hide-on-med-and-down">
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/view">View</NavLink></li>
                        <li><NavLink to="/patients">Patients</NavLink></li>
                        <li><NavLink to="/logout">Logout</NavLink></li>
                    </ul>
                </div>
            </nav>
            )
        }
    }
}

export default withRouter(Navbar)