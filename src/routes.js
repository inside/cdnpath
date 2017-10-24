import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components';
import Start from './components/start';
// import Fetching from './components/fetching';
import Redux from './components/redux';

const Fetching = (nextState, cb) => {
  require.ensure([], (require) => {
    cb(null, require('./components/fetching/index.js').default);
  });
};

export default () => (
  <Route component={App}>
    <IndexRoute component={Start} />
    <Route getComponent={Fetching} path="/fetching/" />
    <Route component={Redux} path="/redux/" />
  </Route>
);
