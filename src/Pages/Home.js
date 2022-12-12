import React, { Component } from 'react'
import Viewer from './Viewer/Viewer'




class Home extends Component {

  // constructor(props){
  //     super(props);
  // };

  render() {
    return (
      <div className='viewer-home'>
        <Viewer/>
      </div>
    )
  }
};

export default Home;
