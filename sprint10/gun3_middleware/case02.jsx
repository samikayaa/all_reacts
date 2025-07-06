//redux-thunk ve customMiddleware'i store'a ekle.


import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';


const customMiddleware = (store) => (next) => (action) => {
    console.log('Custom Middleware:', action);
    return next(action);
};


const store = createStore(rootReducer);
