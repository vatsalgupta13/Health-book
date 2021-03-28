import React, { Component } from 'react'

class AddPharmacist extends Component {

    constructor(props){
        super(props)
        this.state = {
            'patient': this.props.patient,
            'account': this.props.account,
            'loading': null,
            'pharAccount': null,
            'name': null,
            'pharmacists': []
        }
    }

    handleInputChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.addPharmacistToPatient();
    }
    
    addPharmacistToPatient() {
        console.log('final', this.state);
        this.setState({ loading: true })
        this.state.patient.methods.savePharmacist(this.state.name, this.state.pharAccount).send({ from: this.state.account })
        .once('receipt', (receipt) => {
            console.log(receipt);
          this.setState({ loading: false })
          window.location.assign("/pharmacists");
        })
    }

    async componentWillMount(){
        console.log('Inside com will mount', this.props);
        if(this.props.patient !== null){
            var patient = await this.state.patient.methods.patients(this.state.account).call();
            var count = patient.pharmacistCount;
            for (var i = 0; i < count; i++) {
                const pharmacist = await this.state.patient.methods.pharmacists(this.state.account, i).call()
                this.setState({
                    pharmacists: [...this.state.pharmacists, pharmacist]
                })
            }
            this.setState({
                loading: false
            })
            console.log(this.state);
        }else{
            this.setState({
                loading: true
            })
        }
    }
    

    render(){
        const pharList = this.state.pharmacists.map(pharmacists => {
            return (
                <div className="contact" key={pharmacists.pharmacistAcc}>
                    <li className="collection-item avatar">
                        <i className="material-icons circle blue darken-2">local_hospital</i>
                        <p><b>{pharmacists.pharName}</b></p>
                        <p><i>{pharmacists.pharmacistAcc}</i></p>
                        <a href="" className="secondary-content"><button id={pharmacists.pharmacistAcc} className="waves-effect waves-light btn blue darken-2">MORE INFO</button></a>
                    </li>
                </div>
            )
        }) 
        if(this.state.loading === false){
            return(
                <div className="container">
                <br></br>
                    <div className="container">
                        <ul className="collection">
                            <li style={{paddingTop: "0px"}}  className="collection-item avatar">
                                <h3>My Pharmacists</h3>
                            </li>
                                {pharList}
                        </ul>
                    </div>  

                    <div className="container">
                        <br/><br/>
                    </div>

                    <div className="container">
                    <h3>Add a Trusted Pharmacist</h3>
                        <form onSubmit={this.handleSubmit}>
                            <input type="text" id="name" name="name" onChange={this.handleInputChange} required/>
                            <label htmlFor="name">Name</label>
                            <input type="text" id="pharAccount" name="pharAccount" onChange={this.handleInputChange} required/>
                            <label htmlFor="name">Pharmacist's Account</label><br/><br/>
                            <button className="btn blue darken-2" type="submit" name="action">Add
                                <i className="material-icons right">person_add</i>
                            </button>
                        </form>
                    </div>
                </div>
            )
        }else{
            return (
                <div className="container center-align">
                    <div className="progress">
                        <div className="indeterminate"></div>
                    </div>
                </div>
            )
        }
    }
}

export default AddPharmacist;