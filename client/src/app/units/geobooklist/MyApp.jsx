import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TextInput, Button } from 'grommet';

import NewMap from './NewMap';
import { EntityTable } from '~/app/shared/components';
const COLUMNS = [
  {
    property: 'Title',
    label: 'Title',
  },
  {
    property: 'Author',
    label: 'Author',
  },
];

export class MyApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    };
  }

  dispatchCities = () => {
    const { text } = this.state;
    const { dispatch } = this.props;
    dispatch({
      type: 'CITIES_REQUEST',
      text,
    });
    this.setState({ text: '' });
  };

  onMapClick = (lat, lng) => {
    const { dispatch } = this.props;
    dispatch({
      type: 'GEO_REQUEST',
      lat,
      lng,
    });
  };

  render() {
    const { geodata, updating } = this.props;
    const { text } = this.state;
    const muh = [];
    return updating ? (
      <Div> Loading </Div>
    ) : (
      <div>
        <div>
          <div style={{ width: '500px', border: '3px' }}>
            <Button label="Submit" onClick={this.dispatchCities} style={{}} />
          </div>
          <NewMap GEODATA={muh} onMapClick={this.onMapClick} />
        </div>
        <div style={{ position: 'absolute', top: '400px' }}>
          <EntityTable COLUMNS={COLUMNS} DATA={geodata} title={'Books'} />
        </div>
        <div id="info" style={{ position: 'absolute', top: '500px' }} />
      </div>
    );
  }
}
MyApp.propTypes = {
  dispatch: PropTypes.func,
};

export default MyApp;
