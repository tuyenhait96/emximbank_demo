import React, { Component } from 'react';
import { BrowserRouter as Router } from "react-router-dom";

//Component
import MainscreenContainer from './MainscreenContainer/MainscreenContainer';

// export default gợi nhớ / else: không 
class App extends Component {
  render() {
    return (
      <Router>
        <MainscreenContainer/>
      </Router>
    );
  }
}

export default App;
