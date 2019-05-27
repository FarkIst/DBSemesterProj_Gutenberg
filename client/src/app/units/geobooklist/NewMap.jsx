import React, { Component } from 'react';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken =
  'pk.eyJ1IjoiZ3JpbWV0b25lIiwiYSI6ImNqdzVobzlkazBkc3o0M3BibWozZnhqM2QifQ.iK5yBF98f5sPss-i0tFp9g';

class NewMap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lng: -0.1404545,
      lat: 51.5220163,
      zoom: 7,
      clicklng: '',
      clicklat: '',
    };
  }

  componentDidMount() {
    const { lng, lat, zoom } = this.state;
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v9',
      center: [lng, lat],
      zoom,
    });
    map.on('move', () => {
      const { lng, lat } = map.getCenter();
      this.setState(prevState => ({
        ...prevState,
        lng: lng.toFixed(4),
        lat: lat.toFixed(4),
        zoom: map.getZoom().toFixed(2),
      }));
      // this.setState({
      //   lng: lng.toFixed(4),
      //   lat: lat.toFixed(4),
      //   zoom: map.getZoom().toFixed(2),
      // });
    });

    map.on('mousemove', e => {
      this.setState(prevState => ({
        ...prevState,
        clicklng: JSON.stringify(e.lngLat.lng),
        clicklat: JSON.stringify(e.lngLat.lat),
      }));
      document.getElementById('info').innerHTML =
        JSON.stringify(e.point) + '<br />' + JSON.stringify(e.lngLat);
    });

    const { GEODATA } = this.props;
    if (GEODATA.length > 0) {
      geodata.forEach(function(marker) {
        var el = document.createElement('div');
        el.className = 'marker';
        new mapboxgl.Marker(el)
          .setLngLat(marker.geometry.coordinates)
          .addTo(map);
      });
    }
  }

  componentWillUnmount() {
    this.map.remove();
  }

  handleClick = () => {
    const { clicklng, clicklat } = this.state;
    this.props.onMapClick(clicklng, clicklat);
  };

  render() {
    const { lng, lat, zoom } = this.state;
    return (
      <div>
        <div className="inline-block absolute top left mt12 ml12 bg-darken75 color-white z1 py6 px12 round-full txt-s txt-bold">
          <div>{`Longitude: ${lng} Latitude: ${lat} Zoom: ${zoom}`}</div>
        </div>
        <div
          id="map"
          onClick={this.handleClick}
          style={{ width: '100%', height: '100%', display: 'inline' }}
        />
      </div>
    );
  }
}
export default NewMap;
