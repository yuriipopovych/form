import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './contactsReducer';


const store = configureStore({
    reducer: {
        contactsBook: contactsReducer
    }
})

export default store;