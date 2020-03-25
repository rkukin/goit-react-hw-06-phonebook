// import {Type} from './actionTypes';
import {combineReducers, createReducer} from '@reduxjs/toolkit';
import {addContact, deleteContact, filterUpdated, loadContacts} from './phoneBookActions';

const items = createReducer([], {
  [addContact]: (state, action) => {
    return [...state, action.payload]
  },

  [deleteContact]: (state, action) => {
    return [
      ...state.filter(contact => contact.id !== action.payload)
    ]
  },

  [loadContacts]: (state, action) => {
    return JSON.parse(action.payload);
  }
});

const filter = createReducer('', {

  [filterUpdated]: (state, action) => {
    return action.payload;
  },
});

export default combineReducers({
  items,
  filter
});


//
// const phoneBookReducer = (store = initStore, action) => {
//   switch (action.type) {
//     case Type.ADD_CONTACT:
//       return {
//         ...store,
//         contacts: [...store.contacts, action.payload]
//       };
//
//     case Type.DELETE_CONTACT:
//       return {
//         ...store,
//         contacts: store.contacts.filter(contact => contact.id !== action.payload.id)
//       };
//
//     case Type.UPDATE_FILTER:
//       return {
//         ...store,
//         filter: action.payload.filter
//       };
//
//     case Type.LOAD_CONTACTS:
//       return {
//         ...store,
//         contacts: JSON.parse(action.payload.contacts)
//       };
//
//     default:
//       return store;
//   }
// };
//
//
// export default phoneBookReducer;