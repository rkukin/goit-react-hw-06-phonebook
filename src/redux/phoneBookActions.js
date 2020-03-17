import { Type } from './actionTypes'

export const addContact = (contact) => {
    return {
        type: Type.ADD_CONTACT,
        payload: { contact }
    }
}

export const deleteContact = (id) => {
    return {
        type: Type.DELETE_CONTACT,
        payload: { id }
    }
}

export const filterContact = (filter) => {
    return {
        type: Type.UPDATE_FILTER,
        payload: { filter }
    }
}