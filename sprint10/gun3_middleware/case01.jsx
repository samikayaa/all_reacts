//redux-thunk middleware'ını store'a bağla. 
//thunk'ı redux-thunk'tan default import edebilirsin.

import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import thunk from "redux-thunk";


const store = createStore(rootReducer, applyMiddleware(thunk));
