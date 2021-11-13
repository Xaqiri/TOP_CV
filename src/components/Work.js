import React, { Component } from 'react'
import './Info.css'

class Info extends Component {
    constructor(props) {
        super(props)
        this.onSubmit = this.onSubmit.bind(this)
        this.state = {
            name: "",
            email: "",
            phone: "",
        }
        this.btn_text = "Submit"
    }

    onSubmit() {
        let form = document.getElementById('work-form')
        let btn = document.getElementById("work-btn")
        form.classList.toggle('hidden')
        this.btn_text = "Edit"
    }

    render() {
        return (
            <div className="form">
                <div>Work Experience</div>
                <form action="#" id="work-form">
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
                <button id="work-btn" onClick={this.onSubmit}>{this.btn_text}</button>
            </div>
        )
    }
}

export default Info