import { connectRouter, routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import { loadingBarMiddleware } from 'react-redux-loading-bar';
import { applyMiddleware, compose, createStore, Store } from 'redux';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './rootReducers';
import rootSaga from './rootSagas';

export default function() {
  const loggerMiddleware = createLogger();
  const sagaMiddleware = createSagaMiddleware();

  let store;
  const history = createBrowserHistory({
    basename: process.env.BASE_URL,
  });

  const middlewares = applyMiddleware(
    routerMiddleware(history),
    sagaMiddleware,
    loggerMiddleware,
    loadingBarMiddleware(),
  );

  function createReducer() {
    return connectRouter(history)(rootReducer);
  }

  const reducer = createReducer();

  if (process.env.ENV === 'development') {
    const w = window;
    const composeEnhancers = w.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    store = createStore(reducer, composeEnhancers(middlewares));

    // Reselect dev tools setup
    const ReselectTools = require('reselect-tools');
    ReselectTools.getStateWith(() => store.getState());

    if (module.hot) {
      module.hot.accept('~/app/state/rootReducers', () => {
        store.replaceReducer(createReducer());
      });
    }
  } else {
    store = createStore(reducer, middlewares);
  }

  sagaMiddleware.run(rootSaga);

  return { store, history };
}
