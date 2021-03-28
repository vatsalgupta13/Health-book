import React, { Component } from 'react';
import {  Select, MenuItem } from '@material-ui/core';
class Signup extends Component {

    constructor(props){
        super(props)
        this.state = {
            'name': null,
            'contact': null,
            'email': null,
            'patient': this.props.patient,
            'account': this.props.account,
            'loading': null,
            'choose': 'Patient',
        }
    }

    handleInputChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.addPatients();
    }
    
    addPatients() {
        console.log('final', this.state);
        this.setState({ loading: true })      
        this.state.patient.methods.addPatient(this.state.account, this.state.name, this.state.contact, this.state.email).send({ from: this.state.account })
        .once('receipt', (receipt) => {
            console.log(receipt);
            localStorage.setItem('loggedIn', true);
            if(this.state.choose.match('Doctor')){
localStorage.setItem('Role','Doctor')
            }
          this.setState({ loading: false })
          window.location.assign("/");
        })
    }
    

    render(){
        return(
            <div className="container">
                {/* <h3 style={{textAlign:"center"}}>Welcome to Health-Book</h3> */}
               <br/> <h4 style={{textAlign:"center"}}><b>Please share a few details to get started...</b></h4>
              <br/>
                <form onSubmit={this.handleSubmit}>
                <input type="text" id="acc" name="account" value={this.state.account} disabled />
                    <label htmlFor="account">Account Address</label>
                    <input type="text" id="name" name="name" onChange={this.handleInputChange} required/>
                    <label htmlFor="name">Name</label>
                    <input type="tel" id="contact" name="contact" maxLength={10} onChange={this.handleInputChange} required/>
                    <label htmlFor="contact">Contact</label>
                    <input type="email" id="email" name="email" onChange={this.handleInputChange} required/>
                    <label htmlFor="email">Email</label>
                   <br/> <br/>
        <Select
          labelId="choose"
          id="choose"
          name="choose"
defaultValue="Patient"
          onChange={this.handleInputChange}
        >
          <MenuItem value="Patient">Patient</MenuItem>
          <MenuItem value="Doctor">Doctor</MenuItem>
        </Select><br/>
        <label htmlFor="choose">Signup as:</label>
<br/><br/>
                <center><button className="btn blue darken-2" type="submit" name="action">Create Account
                        <i className="material-icons right">person_add</i>
                    </button></center>
                </form>
            </div>      
        )
    }
}

export default Signup;