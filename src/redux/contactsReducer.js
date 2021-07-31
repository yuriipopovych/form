import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import contactsAction from "./contactsAction";

const onAddContact = (state, action) => {
    return [...state, action.payload.contact]
};
const onContactRemove = (state, action) => {
    return state.filter(contact => contact.id !== action.payload)
};

const contacts = createReducer([], {
    [contactsAction.addContact]: onAddContact,
    [contactsAction.removeContact]: onContactRemove,
})
// const contacts = (state = [], { type, payload }) => {
//     switch (type) {
//         case contactsAction.addContact.type:
//             return [...state, payload.contact];
//         case contactsAction.removeContact.type:
//             return state.filter(contact => contact.id !== payload)
//         default:
//             return state;
//     }
// };

const filter = createReducer('', {
    [contactsAction.changeFilter]: (state, action) => action.payload
})
// const filter = (state = '', { type, payload }) => {
//     switch (type) {
//         case contactsAction.changeFilter.type:
//             return payload;
//         default:
//             return state;
//     }
// };


export default combineReducers({
    contacts,
    filter
});
