import React, { Component } from 'react'
import './FinalInfo.css'

class FinalInfo extends Component {
    render() {
        return (
            <div id="display-info" className={"display hidden"}>
                <div>
                    <div>Name</div>
                    <div>{this.props.info.name}</div>
                </div>
                <div>
                    <div>Email</div>
                    <div>{this.props.info.email}</div>
                </div>
                <div>
                    <div>Phone Number</div>
                    <div>{this.props.info.phone}</div>
                </div>
            </div>
        )
    }
}

export default FinalInfo