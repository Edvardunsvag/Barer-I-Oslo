import React, { Component } from 'react';
import { GoogleApiWrapper } from 'google-maps-react';
import CurrentLocation from './CurrentLocation';
// import Geocode from 'react-geocode';

const mapStyles = {
    width: '100%',
    height: '100%',
};

export class MapContainer extends Component {
    render() {
        return (
            <CurrentLocation
                centerAroundCurrentLocation
                google={this.props.google}></CurrentLocation>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyBCEiyz1CH__oz89OJ8l-DOnoT2XLM67oc',
})(MapContainer);
