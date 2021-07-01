import React, { Component } from 'react'
import AddSection from './Components/AddSection/AddSection/AddSection';
import ContactSection from './Components/AddSection/ContactSection/ContactSection';
import { v4 as uuidv4 } from 'uuid';
import Filter from './Components/Filter/Filter';
import TryProp from './Components/TryProp/TryProp';

export default class App extends Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: ''
  }
  
  handleFilterChange = (e) => {
    this.setState({filter: e.target.value})
  }
  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    );
  }
  deleteContact = (e) => {
    const eContact = e.target.value;
    this.setState((prev) => ({
      contacts: prev.contacts.filter(contact => contact.name !== eContact)
    }))
  }

  newContact = (name, number) => {
    const contact = {
      name,
      number,
      id: uuidv4()
    }
    this.setState(prev => {
      return {
        // contacts: [...prev.contacts, contact]
        contacts: [...prev.contacts, { ...prev.contacts.find(person => person.name === contact.name) ? alert('contact already exists'): contact}]
      }
    })
  }




  render() {
    const visibleConstacts = this.getVisibleContacts();
    return (
      <div>
        <h1>Phonebook</h1>
        <AddSection  onNewContact={this.newContact} />
        <Filter value={this.state.filter} handleFilterChange={this.handleFilterChange} />
        <ContactSection contacts={visibleConstacts} handleFilterChange={this.handleFilterChange} deleteContact={this.deleteContact} />
        <TryProp cont={this.state.contacts} />
      </div>
    )
  }
}

