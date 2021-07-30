import { v4 as uuidv4 } from 'uuid';

const addContact = (name, number) => ({
    type: 'contact/add',
    payload: {
        contact: {
            name,
            number,
            id: uuidv4()
        }
    }
})
const removeContact = id => ({
    type: 'contact/remove',
    payload: {
        id,
    }
})
const changeFilter = text => ({
    type: 'contact/filter',
    payload: {
        text,
        }
})

export default {
    addContact,
    removeContact,
    changeFilter
}