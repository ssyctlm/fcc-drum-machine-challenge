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
      this.props.onClick(this.props.keyTrigger,this.props.id)
    }
  }
  //method left up
  // handleSound = ()=>{
  //   const sound = document.getElementById(this.props.keyTrigger);
  //   console.log(sound)
  //   sound.currentTime = 0;
  //   sound.play();
  //   // const sound = document.getElementById(id);
  //   // console.log(sound)
  // }
  render(){
    const keyTrigger = this.props.keyTrigger;
    const id = this.props.id
    return (
      <React.Fragment>
        <div 
        className="keyboard" 
        onClick = {()=>this.props.onClick(keyTrigger,id)}
        ><audio 
        className = 'clip'
        id = {this.props.keyTrigger} 
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