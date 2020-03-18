import { Type } from './actionTypes'
import {uuid} from "uuidv4";

export const addContact = (name, number) => {

    return {
        type: Type.ADD_CONTACT,
        payload: {
            id: uuid(),
            name: name,
            number: number
        }
    }
};

export const deleteContact = (id) => {
    return {
        type: Type.DELETE_CONTACT,
        payload: { id }
    }
};

export const filterUpdated = (filter) => {
    return {
        type: Type.UPDATE_FILTER,
        payload: { filter }
    }
};