import * as React from 'react';
import { Button } from 'grommet';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
class Home extends React.Component {
  nav_titles() {
    const { dispatch } = this.props;
    dispatch({
      type: 'NAV_TITLES',
    });
  }

  render() {
    const { dispatch } = this.props;
    return (
      <div>
        <Button
          label="Titles"
          onClick={() => {
            dispatch(push('/booktitles'));
          }}
        />
        <Button
          label="BookCities"
          onClick={() => {
            dispatch(push('/bookcities'));
          }}
        />
        <Button label="Submit" onClick={() => {}} />
        <Button label="Submit" onClick={() => {}} />
      </div>
    );
  }
}

export default connect()(Home);
