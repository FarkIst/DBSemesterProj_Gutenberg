import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';
import Map from './Map';

export class MyApp extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'CITIES_REQUEST',
    });
  }

  render() {
    const { cities, updating } = this.props;
    return updating ? (
      <Div> Loading </Div>
    ) : (
      <div>
        <Map />
      </div>
    );
  }
}
MyApp.propTypes = {
  dispatch: PropTypes.func,
};

export default MyApp;
