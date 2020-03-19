// import {Type} from './actionTypes';
import {createReducer} from '@reduxjs/toolkit';
import {addContact, deleteContact, filterUpdated, loadContacts} from './phoneBookActions';

const initStore = {
  contacts: [],
  filter: ''
};

export const phoneBookReducer = createReducer(initStore, {
  [addContact]: (state, action) =>
  {
    const {payload} = action;
    return {
      ...state,
      contacts:
    [...state.contacts, payload]
    }
  },

  [deleteContact]: (state, action) => {
    const {payload} = action;
    return {
      ...state,
        contacts: state.contacts.filter(contact => contact.id !== payload)
    }
  },

  [filterUpdated]: (state, action) => {
    const {payload} = action;
    return {
      ...state,
      filter: payload
    };
  },

  [loadContacts]: (state, action) => {
    const {payload} = action;
    return {
      ...state,
      contacts: JSON.parse(payload)
    };
  }
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