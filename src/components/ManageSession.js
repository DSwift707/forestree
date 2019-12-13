import React, { Component } from 'react';
import SimpleMap from './GoogleMap';
import {instance as mapInstance} from './GoogleMap'
const uuidv1 = require('uuid/v1');



class SessionManager extends React.Component{
  constructor(props) {
    super(props);
    this.state = {sessionId:""};

  }

    saveSession = (e) => {
      localStorage.setItem(mapInstance.state.sessionId, JSON.stringify(mapInstance.state.markers));
      this.state.sessionId = mapInstance.state.sessionId;
      console.log(mapInstance.state);

    }
    getSession = (e) => {
      console.log(this.state.sessionId);
      const sessionData = localStorage.getItem(this.state.sessionId);
      console.log((sessionData));
    }

    render(){
      return <div>
      <button onClick={this.getSession}>Get Session</button>
      <button onClick={this.saveSession}>Save</button></div>
    }
}

export default SessionManager;
