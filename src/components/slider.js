import React, { Component } from 'react'

export default class Slider extends React.Component {
    // state = {
    //     value: 50,
    // }
    
    // handleChange = (e) => this.setState({ value: e.target.value })
    render() {
      return (
        <div className="sliderGroup">
        
          <input style={{
              height: " 0px",
              width: "260px"
          }} type="range" min="0.01" max="1" step="0.01" value={this.props.volumn} onChange={e=>this.props.onChange(e.target.value)} />
          
        
        <button
        className = "mute"
        onClick = {()=>this.props.onClick()}
        >Mute</button>
        </div>
        );
    }
}