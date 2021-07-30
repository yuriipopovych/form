import { createStore, combineReducers } from 'redux';
import contactsReducer from './contactsReducer';

const rootReducer = combineReducers({
    contactsBook: contactsReducer,
})

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;