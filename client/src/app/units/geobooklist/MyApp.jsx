import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TextInput, Button } from 'grommet';

import NewMap from './NewMap';
import { EntityTable } from '~/app/shared/components';
const COLUMNS = [
  {
    property: 'id',
    label: 'id',
  },
  {
    property: 'title',
    label: 'title',
  },
  {
    property: 'author',
    label: 'author',
  },
];

export class MyApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedLng: '',
      selectedLat: '',
    };
  }

  dispatchBooks = () => {
    const { dispatch } = this.props;
    const { selectedLat, selectedLng } = this.state;
    dispatch({
      type: 'GEO_REQUEST',
      lat: selectedLat,
      lng: selectedLng,
    });
  };

  onMapClick = (lat, lng) => {
    console.log(lat);
    this.setState(prevState => ({
      selectedLat: lat,
      selectedLng: lng,
    }));
  };

  render() {
    const { geodata, updating } = this.props;
    const muh = [];
    return updating ? (
      <Div> Loading </Div>
    ) : (
      <div>
        <div>
          <div style={{ width: '500px', border: '3px' }}>
            <Button label="Submit" onClick={this.dispatchBooks} style={{}} />
          </div>
          <NewMap GEODATA={muh} onMapClick={this.onMapClick} />
        </div>
        <div style={{ position: 'absolute', top: '400px' }}>
          <EntityTable COLUMNS={COLUMNS} DATA={geodata} title={'Books'} />
        </div>
      </div>
    );
  }
}
MyApp.propTypes = {
  dispatch: PropTypes.func,
};

export default MyApp;
