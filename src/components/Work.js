import React, { Component } from 'react'
import './Info.css'
import FinalWork from './FinalWork.js'

class Work extends Component {
    constructor(props) {
        super(props)
        this.state = {
            work_name: "",
            title: "",
        }
        this.onSubmit = this.onSubmit.bind(this)
    }

    onSubmit() {
        let form = document.getElementById('work-form')
        let display = document.getElementById('display-work')
        let company_info = document.getElementById('company-info').value
        let title_info = document.getElementById('title-info').value
        form.classList.toggle('hidden')
        display.classList.toggle('hidden')
        this.setState({
            work_name: company_info,
            title: title_info,
        })
    }

    render() {
        return (
            <div className="form">
                <div>Work Experience</div>
                <form action="#" id="work-form">
                    <div>
                        <span>Company Name</span>
                        <input type="text" id="company-info"></input>
                    </div>
                    <div>
                        <span>Title</span>
                        <input type="text" id="title-info"></input>
                    </div>
                </form>
                <FinalWork info={this.state}/>
                <button onClick={this.onSubmit}>Submit</button>
            </div>
        )
    }
}

export default Work