import React from 'react';
import ReactDOM from 'react-dom';
import Geocode from 'react-geocode';
import * as geolib from 'geolib';

const mapStyles = {
    map: {
        position: 'absolute',
        width: '100%',
        height: '100%',
    },
};

export class CurrentLocation extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentLocation: {
                latitude: 'lat',
                longitude: 'lng',
            },
        };
    }

    componentDidMount() {
        if (this.props.centerAroundCurrentLocation) {
            if (navigator && navigator.geolocation) {
                navigator.geolocation.getCurrentPosition((pos) => {
                    let coords = {
                        latitude: pos.coords.latitude,
                        longitude: pos.coords.longitude,
                    };
                    console.log(coords);
                    this.setState({
                        currentLocation: {
                            lat: coords.latitude,
                            lng: coords.longitude,
                        },
                    });
                });
            }
        }
    }

    render() {
        const style = Object.assign({}, mapStyles.map);
        return <div value={this.state}></div>;
    }
}
export default CurrentLocation;
