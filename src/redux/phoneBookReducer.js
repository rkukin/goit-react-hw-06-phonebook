import { Type } from './actionTypes';

const initStore = {
    contacts: [],
    filter: ''
}

const phoneBookReducer = (store = initStore, action) => {
    switch (action.type) {
        case Type.ADD_CONTACT:
            console.log(action.payload)
            return {
                // contacts: [...store.contacts, action.payload.contact]
            };

        case Type.DELETE_CONTACT:
            return {
                contacts: [store.contacts.filter(contact => contact.id !== action.payload.id)]
            };

        case Type.UPDATE_FILTER:
            return {
                filter: action.payload.filter
            };

        default:
            return store;
    }
};


export default phoneBookReducer;