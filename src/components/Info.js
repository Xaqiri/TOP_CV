import React, { Component } from 'react'
import './Info.css'
import FinalInfo from './FinalInfo.js'

class Info extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            email: "",
            phone: "",
        }
        this.onSubmit = this.onSubmit.bind(this)
    }

    onSubmit() {
        let form = document.getElementById('info-form')
        let display = document.getElementById('display-info')
        let name_info = document.getElementById('name-info').value
        let email_info = document.getElementById('email-info').value
        let phone_info = document.getElementById('phone-info').value
        form.classList.toggle('hidden')
        display.classList.toggle('hidden')
        this.setState({
            name: name_info,
            email: email_info,
            phone: phone_info,
        })
    }

    render() {
        return (
            <div className="form">
                <div>General Information</div>
                <form action="#" id="info-form">
                    <div>
                        <span>Name</span>
                        <input type="text" id="name-info"></input>
                    </div>
                    <div>
                        <span>Email</span>
                        <input type="text" id="email-info"></input>
                    </div>
                    <div>
                        <span>Phone Number</span>
                        <input type="text" id="phone-info"></input>
                    </div>
                </form>
                <FinalInfo info={this.state}/>
                <button onClick={this.onSubmit}>Submit</button>
            </div>
        )
    }
}

export default Info