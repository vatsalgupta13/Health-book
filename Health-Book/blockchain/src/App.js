import React, { Component } from 'react';
import NavBar from './components/Navbar';
import Signup from './components/Signup';
import Login from './components/Login'
import Upload from './components/Upload';
import View from './components/View';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import Web3 from 'web3';
import Patient from './build/Patient.json';
import AddDoctor from './components/AddDoctor';
import Footer from './components/Footer';
import Analysis from './components/Analysis';
import Home from './components/Home';
import LoggedOutHome from './components/LoggedOutHome'
import Logout from './components/Logout'
import AddPharmacist from './components/AddPharmacist';
import AddPatient from './components/AddPatient';

class App extends Component {

    constructor(){
        super()
        let loggedIn = false;
        if(localStorage.getItem('loggedIn')){
            loggedIn = true;
        }
        this.state = {
            'account': null,
            'patient': null,
            'identicon': null,
            'loading': true,
            loggedIn
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
            [e.target.id]: e.target.value,
        })
    }

    async loadBlockChain(){
        const web3 = window.web3
        const accounts = await web3.eth.getAccounts()
        this.setState({ 'account': accounts[0] })
        const networkId = await web3.eth.net.getId()
        const networkData = Patient.networks[networkId]
        if(networkData) {
            const patient = new web3.eth.Contract(Patient.abi, networkData.address)
            this.setState({ 'patient': patient, 'loading': false })
        } else {
            window.alert('Patient contract not deployed to detected network.')
        }
    }

    render(){
        if(this.state.loading === false){
            if(this.state.loggedIn){
                return (
                    <BrowserRouter>
                        <div className="App">
                            <main>
                                <NavBar account={this.state.account}/>
                                <Route exact path = '/' component={(() => <Home account={this.state.account}/>)} />
                                <Route exact path="/upload" component={(() => <Upload account={this.state.account} patient={this.state.patient}/>)} />
                                <Route exact path="/view" component={(() => <View account={this.state.account} patient={this.state.patient}/>)} />
                                <Route exact path="/logout" component={(() => <Logout account={this.state.account}/>)} />
                                <Route exact path="/doctors" component={(() => <AddDoctor account={this.state.account} patient={this.state.patient}/>)} />
                                <Route exact path="/pharmacists" component={(() => <AddPharmacist account={this.state.account} patient={this.state.patient}/>)} />
                                <Route exact path="/patients" component={(() => <AddPatient account={this.state.account} patient={this.state.patient}/>)} />
                                <Route exact path="/view/:id" component={Analysis} />
                                {/* <Redirect from="*" to="/" /> */}
                            </main>
                            {/* <Footer></Footer> */}
                        </div>
                    </BrowserRouter>
                );
            }
            else{
                return (
                    <BrowserRouter>
                        <div className="App">
                            <main>
                                <NavBar account={this.state.account}/>
                                <Route exact path = '/' component={(() => <LoggedOutHome account={this.state.account}/>)} />
                                <Route exact path="/signup" component={(() => <Signup account={this.state.account} patient={this.state.patient}/>)} />
                                {/* <Route exact path="/upload" component={(() => <Upload account={this.state.account} patient={this.state.patient}/>)} /> */}
                                <Route exact path="/login" component={(() => <Login account={this.state.account} />)} />
                                {/* <Route exact path="/view" component={(() => <View account={this.state.account} patient={this.state.patient}/>)} />
                                <Route exact path="/doctors" component={(() => <AddDoctor account={this.state.account} patient={this.state.patient}/>)} /> */}
                                <Route exact path="/view/:id" component={Analysis} />
                                {/* <Redirect from="*" to="/" /> */}
                            </main>
                            {/* <Footer></Footer> */}
                        </div>
                    </BrowserRouter>
                );
            }

        }else{
            return (
                <div className="container center-align" style={{marginTop: 100}}>
                    <br></br>
                    <br></br>
                    <br></br>
                    <div className="progress">
                        <div className="indeterminate"></div>
                    </div>
                </div>
            )
        }
    }
}

export default App;