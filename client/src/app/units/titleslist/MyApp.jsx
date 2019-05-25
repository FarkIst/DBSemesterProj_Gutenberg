import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'TITLES_REQUEST',
    });
  }

  render() {
    const { books, updating } = this.props;
    return updating ? (
      <Div> Loading </Div>
    ) : (
      <EntityTable COLUMNS={COLUMNS} DATA={books} title={'Titles'} />
    );
  }
}
MyApp.propTypes = {
  dispatch: PropTypes.func,
};

export default MyApp;
