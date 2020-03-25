// import { createStore, combineReducers } from 'redux';
// import { devToolsEnhancer } from 'redux-devtools-extension'
import {configureStore} from "@reduxjs/toolkit";
import phoneBookReducer from './phoneBookReducer';

const store = configureStore({
    reducer: {
      contacts: phoneBookReducer
    }
  }
);

// const rootReducer = combineReducers({
//   contacts: phoneBookReducer
// });
//s
// const store = createStore(rootReducer, devToolsEnhancer());

export default store;