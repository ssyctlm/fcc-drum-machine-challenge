import React, { Component } from 'react'

export default class KeyBoard extends Component{
  constructor(props){
    super(props)

  }

  render(){
    
    return (
      <React.Fragment>
        <div 
        className={"keyboard " + this.props.newstyle }
        onClick ={this.props.onClick}
        >
          {this.props.letter}
        </div>
      </React.Fragment>
    )
  }
  
}