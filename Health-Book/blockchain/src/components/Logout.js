import React, { Component } from 'react'

export default class Logout extends Component {
constructor(props){
    super(props)
    localStorage.removeItem('loggedIn')
    if(localStorage.getItem('Role')){
        localStorage.removeItem('Role')
    }
    window.location.href='./'
}
    render() {
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
