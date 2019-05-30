import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { TextInput, Button } from 'grommet';
import { EntityTable } from '~/app/shared/components';
const COLUMNS = [
  {
    property: 'Id',
    label: 'Id',
  },
  {
    property: 'title',
    label: 'title',
  },
];

export class MyApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    };
  }

  dispatchTitles = () => {
    const { text } = this.state;
    const { dispatch } = this.props;
    dispatch({
      type: 'TITLES_REQUEST',
      text,
    });
    this.setState({ text: '' });
  };

  render() {
    const { text } = this.state;
    const { books, updating } = this.props;

    return (
      <div>
        Input City-Name:
        <TextInput
          value={text}
          onChange={event => this.setState({ text: event.target.value })}
        />
        <Button label="Submit" onClick={this.dispatchTitles} style={{}} />
        <EntityTable COLUMNS={COLUMNS} DATA={books} title={'Titles'} />
      </div>
    );
  }
}
MyApp.propTypes = {
  dispatch: PropTypes.func,
};

export default MyApp;
