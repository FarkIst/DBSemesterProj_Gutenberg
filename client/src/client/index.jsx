import { ConnectedRouter } from 'connected-react-router';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { configStore } from '~/app/state';
import { RootRoutes } from '~/app/routes';

const { store, history } = configStore();

const render = () => {
  const root = document.getElementsByTagName('app-root')[0];
  if (!root) {
    throw new Error(`Root element "app-root" not found.`);
  }

  ReactDOM.render(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <RootRoutes />
      </ConnectedRouter>
    </Provider>,
    root,
  );
};

if (process.env.ENV === 'development' && module.hot) {
  module.hot.accept('~/app/pages', render);
  module.hot.accept('~/app/units', render);
}

render();
