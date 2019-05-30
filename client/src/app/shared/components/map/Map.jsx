import React, { Component } from 'react';
import mapboxgl from 'mapbox-gl';
import './map.css';
let map;

mapboxgl.accessToken =
  'pk.eyJ1IjoiZ3JpbWV0b25lIiwiYSI6ImNqdzVobzlkazBkc3o0M3BibWozZnhqM2QifQ.iK5yBF98f5sPss-i0tFp9g';

class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lng: -0.1404545,
      lat: 51.5220163,
      zoom: 7,
    };
  }

  componentDidMount() {
    console.log('HELO WORLD');
    const { lng, lat, zoom } = this.state;
    map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v9',
      center: [lng, lat],
      zoom,
    });
    map.on('move', () => {
      const { lng, lat } = map.getCenter();
      this.setState({
        lng: lng.toFixed(4),
        lat: lat.toFixed(4),
        zoom: map.getZoom().toFixed(2),
      });
    });
  }

  componentWillUnmount() {
    this.map.remove();
  }

  render() {
    const { lng, lat, zoom } = this.state;
    const { GEODATA } = this.props;
    console.log(GEODATA);
    if (GEODATA.length > 0) {
      console.log('INSIDE DREADED LOOP');
      GEODATA.forEach(function(marker) {
        let lng = marker.longitude;
        let lat = marker.latitude;
        let newMarker = {
          type: 'Feature',
          geometry: {
            type: 'Point',
            coordinates: [lat, lng],
          },
        };
        var el = document.createElement('div');
        el.className = 'marker';
        console.log('hi');
        new mapboxgl.Marker(el)
          .setLngLat(newMarker.geometry.coordinates)
          .setPopup(
            new mapboxgl.Popup({ offset: 25 }) // add popups
              .setHTML('<h3>' + 'Title' + '</h3><p>' + '.description' + '</p>'),
          )
          .addTo(map);
      });
    }
    return (
      <div>
        <div className="inline-block absolute top left mt12 ml12 bg-darken75 color-white z1 py6 px12 round-full txt-s txt-bold">
          <div>{`Longitude: ${lng} Latitude: ${lat} Zoom: ${zoom}`}</div>
        </div>
        <div
          id="map"
          style={{ width: '100%', height: '100%', display: 'inline' }}
        />
      </div>
    );
  }
}
export default Map;
