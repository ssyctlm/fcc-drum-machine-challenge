import React, { Component } from 'react'

export default class Slider extends React.Component {
    state = {
        value: 50,
    }

    handleChange = (e) => this.setState({ value: e.target.value })
    render() {
        return (
            <div>
                <input style={{
                    height: " 150px",
                    width: "300px"
                }} type="range" min={0} max={100} step="1" value={this.state.value} onChange={this.handleChange} />

            </div>
        );
    }
}