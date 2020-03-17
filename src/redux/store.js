import { createStore, combineReducers } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension'
import phoneBookReducer from './phoneBookReducer';

const rootReducer = combineReducers({
    contacts: phoneBookReducer
})

const store = createStore(rootReducer, devToolsEnhancer());

export default store;