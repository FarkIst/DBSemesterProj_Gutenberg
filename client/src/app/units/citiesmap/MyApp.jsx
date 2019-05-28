import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TextInput, Button } from 'grommet';
import Map from '../../shared/components/map/Map';

export class MyApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    };
  }

  dispatchCities = () => {
    console.log('HelloWorld');
    const { text } = this.state;
    const { dispatch } = this.props;
    dispatch({
      type: 'CITIES_REQUEST',
      text,
    });
    this.setState({ text: '' });
  };

  render() {
    const { cities, updating } = this.props;
    const { text } = this.state;
    const muh = [];
    return updating ? (
      <Div> Loading </Div>
    ) : (
      <div>
        <div style={{ width: '500px', border: '3px' }}>
          <b>Book Title:</b>
          <div style={{ width: '350px' }}>
            <TextInput
              value={text}
              onChange={event => this.setState({ text: event.target.value })}
            />
          </div>
          <Button label="Submit" onClick={this.dispatchCities} style={{}} />
        </div>
        <div styles={{}}>
          <Map GEODATA={muh} />
        </div>
      </div>
    );
  }
}
MyApp.propTypes = {
  dispatch: PropTypes.func,
};

export default MyApp;