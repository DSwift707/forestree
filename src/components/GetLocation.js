import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SimpleMap from "./GoogleMap";
import { Map, GoogleApiWrapper } from 'google-maps-react';



class GetLocation extends React.Component {
  constructor() {
    super()

    this.state = {
      latitude: '',
      longitude: '',
    }

    this.getMyLocation = this.getMyLocation.bind(this)
  }

  getRandomArbitrary = (min, max) => {
    return Math.random() * (max - min) + min;
  }

  componentDidMount() {
    this.getMyLocation()
  }

  componentDidUpdate = () => {

  }
  handleClick = (e) => {
    e.preventDefault();
    this.getMyLocation();
    const marker = {
      markerOffset: 25,
      name: "Area " + this.getRandomArbitrary(0, 100),
      coordinates: [this.state.longitude, this.state.latitude]
    }
    var newMarker = new this.Map.Marker({
      position: [34.44,-124],
      title: 'Home Center',
    });
    newMarker.setMap(this.map);
    //console.log(MapChart);

  }

  getMyLocation = () => {
    this.setState({
      latitude: this.getRandomArbitrary((-35), 0),
      longitude: this.getRandomArbitrary((-77), (-45)),
    })

    //Get location from device, turned off for map testing
    //const location = window.navigator && window.navigator.geolocation
    // if (location) {
    //   location.getCurrentPosition((position) => {
    //     this.setState({
    //       latitude: position.coords.latitude,
    //       longitude: position.coords.longitude,
    //     })
    //   }, (error) => {
    //     this.setState({ latitude: 'err-latitude', longitude: 'err-longitude' })
    //   })
    }



  recordLocation = () => {
    return(
      <button onClick={this.handleClick}>Record Location</button>

    )
  }

  render() {
    const { latitude, longitude } = this.state
    return (
      <div>
        <input type="text" value={latitude} />
        <input type="text" value={longitude} />
        {this.recordLocation()}

      </div>
    )
  }
}



export default GetLocation;
