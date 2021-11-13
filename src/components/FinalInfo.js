import React, { Component } from 'react'
import './FinalInfo.css'

class FinalInfo extends Component {
    render() {
        return (
            <div id="display-info">
                <div>Name: {this.props.info.name}</div>
                <div>Email: {this.props.info.email}</div>
                <div>Phone Number: {this.props.info.phone}</div>
            </div>
        )
    }
}

export default FinalInfo