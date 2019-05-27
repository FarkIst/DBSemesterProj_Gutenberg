import * as React from 'react';
import { Route, Switch } from 'react-router';
import {
  Home,
  BookTitles,
  BookCities,
  AuthorBookMap,
  GeoBooks,
} from '../pages';

export const RootRoutes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/booktitles" component={BookTitles} />
    <Route exact path="/bookmapbyauthor" component={AuthorBookMap} />
    <Route exact path="/bookcities" component={BookCities} />
    <Route exact path="/geobooks" component={GeoBooks} />
    <Route render={() => <div>404 page </div>} />
  </Switch>
);
