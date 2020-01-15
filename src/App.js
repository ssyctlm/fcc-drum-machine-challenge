import React from 'react';
import Slider from './components/slider'
import Toggle from './components/toggle'
class App extends React.Component {

  render() {
    return (
      <div>
        <Slider />
        <Toggle />
      </div>
    );
  }
}


export default App;
