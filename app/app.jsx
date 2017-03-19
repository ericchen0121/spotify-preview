import React from 'react';
import ReactDOM from 'react-dom';
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

import SpotifyApp from 'SpotifyApp';

// Load foundation
$(document).foundation();

// app css
require('style!css!sass!appStyles');


ReactDOM.render(
  <SpotifyApp />,
  document.getElementById('app')
);
