import { combineReducers } from "redux";

const contacts = (state = [], { type, payload }) => {
    switch (type) {
        case 'contact/add':
            return [...state, payload.contact];
        case 'contact/remove':
            return state.filter(contact => contact.id !== payload.id)
        default:
            return state;
    }
};
const filter = (state = '', { type, payload }) => {
    switch (type) {
        case 'contact/filter':
            return payload.text;
        default:
            return state;
    }
};


export default combineReducers({
    contacts,
    filter
});

//   state = {
//     contacts: [],
//     filter: ''
//   }
//   componentDidMount() {
//     const persistedContacts = localStorage.getItem('contacts');
//     if (persistedContacts) {
//       this.setState({
//         contacts:  JSON.parse(persistedContacts)
//       })
//     }
    
//   }
//   componentDidUpdate(prevProps, prevState) {
//     if (prevState.contacts !== this.state.contacts) {
//       localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
//     }
    
//   }
  
  
//   handleFilterChange = (e) => {
//     this.setState({filter: e.target.value})
//   }
//   getVisibleContacts = () => {
//     const { contacts, filter } = this.state;
//     return contacts.filter(contact =>
//       contact.name.toLowerCase().includes(filter.toLowerCase()),
//     );
//   }
//   deleteContact = (e) => {
//     const eContact = e.target.id;
//     this.setState((prev) => ({
//       contacts: prev.contacts.filter(contact => contact.id !== eContact)
//     }))
//   }

//   newContact = (name, number) => {
//     const contact = {
//       name,
//       number,
//       id: uuidv4()
//     }
//     this.setState(prev => {
//       return {
//         contacts: [...prev.contacts,
//         { ...prev.contacts.find(person => person.name === contact.name) ? alert('contact already exists') : contact }]
//       }
//     })
//   }
//   clearFilter = () => {
//     this.setState({filter: ''})
//   }