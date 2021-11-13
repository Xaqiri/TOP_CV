import React, { Component } from 'react'
import './Info.css'

class Info extends Component {
    render() {
        return (
            <div className="form">
                <form>
                    <input type="text" id="name-info"></input>
                    <input type="text" id="email-info"></input>
                    <input type="text" id="phone-info"></input>
                </form>
            </div>
        )
    }
}

export default Info