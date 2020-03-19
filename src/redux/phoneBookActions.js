// import { Type } from './actionTypes'
// import {uuid} from "uuidv4";
import { createAction } from '@reduxjs/toolkit';

export const addContact = createAction('ADD_CONTACT');
export const deleteContact = createAction('DELETE_CONTACT');
export const filterUpdated = createAction('UPDATE_FILTER');
export const loadContacts = createAction('LOAD_CONTACTS');
//
// export const addContact = (name, number) => {
//
//     return {
//         type: Type.ADD_CONTACT,
//         payload: {
//             id: uuid(),
//             name: name,
//             number: number
//         }
//     }
// };
//
// export const deleteContact = (id) => {
//     return {
//         type: Type.DELETE_CONTACT,
//         payload: { id }
//     }
// };
//
// export const filterUpdated = (filter) => {
//     return {
//         type: Type.UPDATE_FILTER,
//         payload: { filter }
//     }
// };
//
// export const loadContacts = (contacts) => {
//     return {
//         type: Type.LOAD_CONTACTS,
//         payload:  {contacts}
//     }
// };