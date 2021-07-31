import { v4 as uuidv4 } from 'uuid';
import { createAction } from '@reduxjs/toolkit';

const addContact = createAction('contact/add', (name, number) => ({
    payload: {
        contact: {
            name,
            number,
            id: uuidv4()
        }
    }
}));

// const addContact = (name, number) => ({
//     type: 'contact/add',
//     payload: {
//         contact: {
//             name,
//             number,
//             id: uuidv4()
//         }
//     }
// })
const removeContact = createAction('contact/remove');
// const removeContact = id => ({
//     type: 'contact/remove',
//     payload: {
//         id,
//     }
// })
const changeFilter = createAction('contact/filter');
// const changeFilter = text => ({
//     type: 'contact/filter',
//     payload: {
//         text,
//         }
// })

export default {
    addContact,
    removeContact,
    changeFilter
}