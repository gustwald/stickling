import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { browserHistory, Router } from 'react-router';
import routes from './routes';
import createStore from './store/store';
import { PersistGate } from 'redux-persist/integration/react';

const { store, persistor } = createStore();

render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <Router history={browserHistory} routes={routes} />
    </PersistGate>
  </Provider>,
  document.getElementById('app')
);
