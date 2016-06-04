// Import vendors
import React from 'react';
import { render } from 'react-dom';

// Import components
import App from './App';
import Single from './Single';
import PhotoGrid from './PhotoGrid';

// Import react router deps
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

const router = (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={PhotoGrid} />
      <Route path="/view/:postId" component={Single} />
    </Route>
  </Router>
);

render(router, document.getElementById('root'));
