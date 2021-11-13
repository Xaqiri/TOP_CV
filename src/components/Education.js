import React, { Component } from 'react'
import './Info.css'

class Info extends Component {
    render() {
        return (
            <div className="form">
                <div>School</div>
                <form>
                    <div>
                        <span>School Name</span>
                        <input type="text" id="name-info"></input>
                    </div>
                    <div>
                        <span>Title of Study</span>
                        <input type="text" id="email-info"></input>
                    </div>
                    <div>
                        <span>Date of Study</span>
                        <input type="text" id="phone-info"></input>
                    </div>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default Info