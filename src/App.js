import React from 'react';
import Slider from './components/slider'
import Toggle from './components/toggle'
import KeyBoard from './components/keyboard'
class App extends React.Component {
  state ={
    aKeys:["A","B","C",]
  }
  render() {
    const keyboardStyle = false && "mouseDown"
    return (
      <div className="app">
        <Slider />
        <Toggle />
        <KeyBoard 
        letter="A"
        newstyle = {keyboardStyle}
        />
      </div>
    );
  }
}


export default App;
