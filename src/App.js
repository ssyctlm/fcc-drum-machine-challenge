import React from 'react';
import Slider from './components/slider'
import Toggle from './components/toggle'
import KeyBoard from './components/keyboard'

class App extends React.Component {
  state ={
    aKeys:["Q","W","E","A","S","D","Z","X","C"],
    bankOne:[{
      keyCode: 81,
      keyTrigger: 'Q',
      id: 'Heater-1',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
    }, {
      keyCode: 87,
      keyTrigger: 'W',
      id: 'Heater-2',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
    }, {
      keyCode: 69,
      keyTrigger: 'E',
      id: 'Heater-3',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
    }, {
      keyCode: 65,
      keyTrigger: 'A',
      id: 'Heater-4',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
    }, {
      keyCode: 83,
      keyTrigger: 'S',
      id: 'Clap',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
    }, {
      keyCode: 68,
      keyTrigger: 'D',
      id: 'Open-HH',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
    }, {
      keyCode: 90,
      keyTrigger: 'Z',
      id: "Kick-n'-Hat",
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
    }, {
      keyCode: 88,
      keyTrigger: 'X',
      id: 'Kick',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
    }, {
      keyCode: 67,
      keyTrigger: 'C',
      id: 'Closed-HH',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
    },
  ],
  
   bankTwo : [{
    keyCode: 81,
    keyTrigger: 'Q',
    id: 'Chord-1',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3'
  }, {
    keyCode: 87,
    keyTrigger: 'W',
    id: 'Chord-2',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3'
  }, {
    keyCode: 69,
    keyTrigger: 'E',
    id: 'Chord-3',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3'
  }, {
    keyCode: 65,
    keyTrigger: 'A',
    id: 'Shaker',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3'
  }, {
    keyCode: 83,
    keyTrigger: 'S',
    id: 'Open-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3'
  }, {
    keyCode: 68,
    keyTrigger: 'D',
    id: 'Closed-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3'
  }, {
    keyCode: 90,
    keyTrigger: 'Z',
    id: 'Punchy-Kick',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3'
  }, {
    keyCode: 88,
    keyTrigger: 'X',
    id: 'Side-Stick',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3'
  }, {
    keyCode: 67,
    keyTrigger: 'C',
    id: 'Snare',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3'
  }],
    flagPower:true,
    flagBank:true
  }
  // handleClick = (flagname) => this.setState({ flagname: !this.state.flagname })
  handleClick = (flagname,flag) => {this.setState({[flagname]:!flag})}
  render() {
    const keyboardStyle = false && "mouseDown"
    return (
      <div className="app" id = "drum-machine">
        <div className="drum-pad">
        {this.state.bankTwo.map(({keyCode,keyTrigger,id,url},index,arr) => 
        <KeyBoard 
        key={index} 
        keyTrigger ={keyTrigger} 
        id ={id}
        newstyle ={ keyboardStyle }
        keyCode = {keyCode}
        sound = {url}
        />)}
        </div>
        <div className="logo">
          <div className="inner-logo">{'FCC'+String.fromCharCode(160)}</div>
          <i className="inner-logo fa fa-free-code-camp"/>
        </div>
        <div className="controlPannel">

          <Toggle 
          key="flagPower"
          title="Power"
          flag = {this.state.flagPower}
          flagReturn = 'flagPower'
          onClick = {this.handleClick}
          />
          <div id="display"></div>
          <Slider />
          <Toggle 
          key="flagBank"
          title="Bank"
          flag = {this.state.flagBank}
          flagReturn = 'flagBank'
          onClick = {this.handleClick}
          />
        </div>
        
      </div>
    );
  }
}


export default App;
