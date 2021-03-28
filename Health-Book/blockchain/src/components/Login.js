import React, { Component } from 'react'
import Web3 from 'web3';
import Patient from '../build/Patient.json'
import { Select, MenuItem } from '@material-ui/core';

class Login extends Component {

    constructor(props) {
        super(props)
        this.state = {
            'name': null,
            'contact': null,
            'email': null,
            'password': null,
            'choose': 'Patient',
            'patient': null,
            'account': this.props.account,
        }
    }

    async componentWillMount() {
        await this.loadWeb3()
        await this.loadBlockChain()
    }

    async loadWeb3() {
        if (window.ethereum) {
            window.web3 = new Web3(window.ethereum)
            await window.ethereum.enable()
        }
        else if (window.web3) {
            window.web3 = new Web3(window.web3.currentProvider)
        }
        else {
            window.alert('Non-Ethereum browser detected. You should consider trying MetaMask!')
        }
    }


    handleInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    async loadBlockChain() {
        const web3 = window.web3
        const accounts = await web3.eth.getAccounts()
        this.setState({ account: accounts[0] })
        const networkId = await web3.eth.net.getId()
        const networkData = Patient.networks[networkId]
        if (networkData) {
            const patient = new web3.eth.Contract(Patient.abi, networkData.address)
            this.setState({ 'patient': patient })
            console.log("hello" + this.state.patient);
        } else {
            window.alert('Patient contract not deployed to detected network.')
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        // for await (const file of ipfs.add(globSource('./uploads/' + fileName))) {
        //     console.log(file)
        // }
        this.loginCandidate()
    }

    loginCandidate() {
        this.setState({ loading: true })
        localStorage.setItem('loggedIn', true);
        if (this.state.choose.match('Doctor')) {
            console.log("hello123")
            localStorage.setItem('Role', 'Doctor')
            this.setState({loading: false})
            window.location.href = './';
        }
        else {
            this.setState({loading: false})
            window.location.href = './';
        }
    }


    render() {
        return (
            <div className="container">
                <br /> <h6 style={{ textAlign: "center" }}><b>Login using your account address</b></h6>
                <br />
                <form onSubmit={this.handleSubmit}>
                    <br /> <br />
                    <Select
                        labelId="choose"
                        id="choose"
                        name="choose"
                        defaultValue="Patient"
                        onChange={this.handleInputChange}
                    >
                        <MenuItem value="Patient">Patient</MenuItem>
                        <MenuItem value="Doctor">Doctor</MenuItem>
                    </Select><br />
                    <label htmlFor="choose">Login as:</label><br /><br />
                    <input type="text" id="account" disabled name="account" value={this.state.account} required />
                    <label htmlFor="account">Account Address</label><br /><br />
                    <center> <button className="btn blue darken-2" type="submit" name="action">Login
                        <i className="material-icons right">send</i>
                    </button></center>
                </form>
            </div>
        )
    }
}

export default Login;