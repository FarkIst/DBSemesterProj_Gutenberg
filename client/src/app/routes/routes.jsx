import * as React from 'react';
import { Route, Switch } from 'react-router';
import { Home, BookTitles } from '../pages';

export const RootRoutes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/booktitles" component={BookTitles} />
    <Route exact path="/cities" component={Home} />
    <Route exact path="/bookcities" component={Home} />
    <Route exact path="/geobooks" component={Home} />
    <Route render={() => <div>404 page </div>} />
  </Switch>
);
