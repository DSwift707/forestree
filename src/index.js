import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import GetLocation from './components/GetLocation';
import SimpleMap from './components/GoogleMap';



var style = {
  color: '#4a6741',
  fontFamily: "'Oxygen', 'sans-serif'",
  fontSize: '42px',
  display:'block',
  width: '100%',
  textAlign: 'center'
}

const mainTitle = React.createElement(
  'h1',
  {
    id:'mainTitle',
    className: 'v1-header',
    style: style
  },
  'Forestree.io'
)

class LocButton extends React.Component{

  render(){
    return(
      <div>
        {mainTitle}
      </div>
    )
  }
}

ReactDOM.render(
  <div>
  <LocButton msg="Tree Location"/>
  <SimpleMap />
  </div>,
  document.getElementById('root')

)
var marker = {
  markerOffset: 25,
  name: "Area 51",
  coordinates: [-68.1193, -16.4897]
}





serviceWorker.unregister();
