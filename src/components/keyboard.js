import React, { Component } from 'react'

export default class KeyBoard extends Component{
  constructor(props){
    super(props);

  }
  componentDidMount(){
    document.addEventListener("keydown",this.handleKeyPress)
  }
  componentWillUnmount(){
    document.addEventListener("keydown",this.handleKeyPress)
  }
  handleKeyPress = e =>{
    if(e.keyCode ===this.props.keyCode){
      this.handleSound()
    }
  }
  handleSound = e=>{
    const sound = document.getElementById(this.props.id);
    console.log(sound)
    sound.currentTime = 0;
    sound.play();
    // const sound = document.getElementById(id);
    // console.log(sound)
  }
  render(){
    
    return (
      <React.Fragment>
        <div 
        className={"keyboard " + this.props.newstyle }
        onClick = {this.handleSound}
        ><audio 
        className = 'clip'
        id = {this.props.id} 
        src={this.props.sound} 
        type = "audio/mp3" 
        >
            </audio>
          {this.props.keyTrigger}
        </div>
      </React.Fragment>
    )
  }
  
}