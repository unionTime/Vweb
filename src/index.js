import 'core-js/fn/object/assign';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import RouteConfig from './router';
import store from './stores/index'

// Render the main component into the dom
ReactDOM.render(<Provider store={store}>{RouteConfig}</Provider>, document.getElementById('app'));
