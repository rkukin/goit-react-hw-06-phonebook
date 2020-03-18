import { Type } from './actionTypes';

const initStore = {
    contacts: [],
    filter: ''
}

const phoneBookReducer = (store = initStore, action) => {
    switch (action.type) {
        case Type.ADD_CONTACT:
            return {
                ...store,
                contacts: [...store.contacts, action.payload]
            };

        case Type.DELETE_CONTACT:
            return {
                ...store,
                contacts: store.contacts.filter(contact => contact.id !== action.payload.id)
            };

        case Type.UPDATE_FILTER:
            return {
                ...store,
                filter: action.payload.filter
            };

        default:
            return store;
    }
};


export default phoneBookReducer;