import React, { Component } from 'react'

export default class Toggle extends Component {
    state = {
        flag: true
    }


    handleClick = () => this.setState({ flag: !this.state.flag })

    render() {
        const classChange = this.state.flag ? ["toggleBtn on", "toggleBtn off"] : ["toggleBtn off", "toggleBtn on"]
        return (

            <div className="toggleBox" onClick={this.handleClick}>
                <div className={classChange[0]}></div>
                <div className={classChange[1]}></div>
            </div >

        )
    }

}