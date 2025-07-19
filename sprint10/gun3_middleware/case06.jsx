import { applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux";
import { thunk } from "redux-thunk";
import { logger } from "redux-logger";


export const store = createStore(reducers, applyMiddleware(logger));

