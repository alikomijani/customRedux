import { combineReducers } from "redux";
import { createStore, applyMiddleware } from "redux";
import logger from 'redux-logger'

import todoReducer from "./todo.reducer/todo.reducer";

const rootReducer = combineReducers({
  todo: todoReducer,
});

const store = createStore(
    rootReducer,
    applyMiddleware(logger)
    );


export default store