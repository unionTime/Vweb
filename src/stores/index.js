import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
const enhancer = compose(
    applyMiddleware(thunk),
    // DevTools.instrument()
)
const store = createStore(
    enhancer
);

export default store;