import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import SessionManager from './ManageSession';
const uuidv1 = require('uuid/v1');

const AnyReactComponent = ({ text }) => <div className="marker"><img className="tree-pin" src="/images/tree-pin.png"/></div>;
export let instance = null;
class SimpleMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sessionId: uuidv1(),
      markers:[]
    } ;
    this.handleClick = this.handleClick.bind(this);
    instance = this;

  }
  static defaultProps = {
    center: {
      lat: 38.124124,
      lng: -123.123
    },
    zoom: 4,

  };
  recordLocation = () => {
    return(
      <div className="pin-tree" onClick={this.handleClick}><img className="pine-button" src="/images/pine.png"/>Record Location</div>

    )
  }

  handleClick = (e) => {
    e.preventDefault();
      var location = this.getMyLocation();
      var name = "Area " + Math.round(this.getRandomArbitrary(0,100));
      var key = uuidv1();
    this.setState({
      name: name,
      lat: location.latitude,
      lng: location.longitude,
      key: key
   });


    this.state.markers.push({
      lat: location.latitude,
      lng: location.longitude,
      name: name,
      key: key
    });
    console.log(this.props.markers);

    //console.log(MapChart);

  }

  getMyLocation = () => {
    return({
      latitude: this.getRandomArbitrary(32, 45),
      longitude: this.getRandomArbitrary((-124), (-100)),
    })
  }

  getRandomArbitrary = (min, max) => {
    return Math.random() * (max - min) + min;
  }
  componentWillReceiveProps(nextProps) {
   this.getMarkers(nextProps);
  }
  getMarkers = (props = this.props) => {

  console.log("Added");


}



  render() {
    return (
      <div>
      <div>
        <SessionManager/>
      </div>
      <div>

        {this.recordLocation()}

      </div>

      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyCynR5BWrMbfIxPxKS4E19J3fJNW77swBg' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >

        {this.state.markers.map((value, index) =>{
          if(this.state.markers[index] !== undefined){
            return <AnyReactComponent
              key={this.state.markers[index].key}
              lat={this.state.markers[index].lat}
              lng={this.state.markers[index].lng}
              text={this.state.markers[index].name}
            />
          }

        })}
        </GoogleMapReact>
      </div>
    </div>
    );
  }
}

export default SimpleMap;
