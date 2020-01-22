import React, { Component } from 'react'

export default class SinglePlay extends Component{

  state = {
    keyCode: 81,
    keyTrigger: 'Q',
    id: 'Heater-1',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
  }
  handlePlay = () => {
    const sound = document.getElementById("single")
    console.log(sound)
    // sound.play();
  }

  render(){
    return(
      <div className="keyboard " >
        <audio 
        id = 'single'
        src={this.state.url} 
        type = "audio/mp3" 
        onClick= {this.handlePlay}>
      </audio>
          {this.state.id}
        </div>
    )
  }

}


