import React, { Component } from 'react'
import AddSection from './Components/AddSection/AddSection/AddSection';
import ContactSection from './Components/AddSection/ContactSection/ContactSection';
import { v4 as uuidv4 } from 'uuid';
import Filter from './Components/Filter/Filter';

export default class App extends Component {
  // state = {
  //   contacts: [],
  //   filter: ''
  // }
  // componentDidMount() {
  //   const persistedContacts = localStorage.getItem('contacts');
  //   if (persistedContacts) {
  //     this.setState({
  //       contacts:  JSON.parse(persistedContacts)
  //     })
  //   }
    
  // }
  // componentDidUpdate(prevProps, prevState) {
  //   if (prevState.contacts !== this.state.contacts) {
  //     localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  //   }
    
  // }
  
  
  // handleFilterChange = (e) => {
  //   this.setState({filter: e.target.value})
  // }
  // getVisibleContacts = () => {
  //   const { contacts, filter } = this.state;
  //   return contacts.filter(contact =>
  //     contact.name.toLowerCase().includes(filter.toLowerCase()),
  //   );
  // }
  // deleteContact = (e) => {
  //   const eContact = e.target.id;
  //   this.setState((prev) => ({
  //     contacts: prev.contacts.filter(contact => contact.id !== eContact)
  //   }))
  // }

  // newContact = (name, number) => {
  //   const contact = {
  //     name,
  //     number,
  //     id: uuidv4()
  //   }
  //   this.setState(prev => {
  //     return {
  //       contacts: [...prev.contacts,
  //       { ...prev.contacts.find(person => person.name === contact.name) ? alert('contact already exists') : contact }]
  //     }
  //   })
  // }
  // clearFilter = () => {
  //   this.setState({filter: ''})
  // }




  render() {
    // const visibleConstacts = this.getVisibleContacts();
    return (
      <div>
        <h1>Phonebook</h1>
        {/* <AddSection onNewContact={this.newContact} /> */}
        <AddSection/>
        {/* <Filter value={this.state.filter} handleFilterChange={this.handleFilterChange} clearFilter={this.clearFilter} /> */}
        <Filter/>
        {/* <ContactSection contacts={visibleConstacts} handleFilterChange={this.handleFilterChange} deleteContact={this.deleteContact} /> */}
         <ContactSection/>
      </div>
    )
  }
}

