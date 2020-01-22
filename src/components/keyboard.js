import React, { Component } from 'react'

export default class KeyBoard extends Component{
  constructor(props){
    super(props);

  }

  render(){
    
    return (
      <React.Fragment>
        <div 
        className={"keyboard " + this.props.newstyle }
        ><audio 
        id = {this.props.id} 
        src={this.props.sound} 
        type = "audio/mp3" 
        onPlay = {this.props.onPlay(this.props.id)}>
            </audio>
          {this.props.letter}
        </div>
      </React.Fragment>
    )
  }
  
}