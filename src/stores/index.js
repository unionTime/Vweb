import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import * as admin from '../reducers/admin'
import * as plants from '../reducers/plants'
import thunk from 'redux-thunk';
const enhancer = compose(
    applyMiddleware(thunk),
    // DevTools.instrument()
)
const store = createStore(
    combineReducers(Object.assign({}, admin, plants)),
    enhancer
);

export default store;