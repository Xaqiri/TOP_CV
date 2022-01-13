import React, { Component } from 'react'
import './FinalInfo.css'

class FinalWOrk extends Component {
    render() {
        return (
            <div id="display-work" className={"display hidden"}>
                <div>
                    <div>Company Name</div>
                    <div>{this.props.info.work_name}</div>
                </div>
                <div>
                    <div>Title</div>
                    <div>{this.props.info.title}</div>
                </div>
            </div>
        )
    }
}

export default FinalWOrk