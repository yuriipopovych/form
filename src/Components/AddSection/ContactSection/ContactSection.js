import React from 'react';
import { connect } from 'react-redux';
import contactsAction from '../../../redux/contactsAction';


const ContactSection = ({ contacts, deleteContact}) => {
    return (
        <div>
            
            <ul>
                {contacts.map(({name, number, id}) => <li key={id}>{name}: {number}<button onClick={()=>deleteContact(id)} value={name} id={id}>Delete</button></li>)}
            </ul>
            
            
        </div>
    )
}
const mapStateToProps = state => {
    const { contacts, filter } = state.contactsBook;
    const visibleConstacts = contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase()))
    return {
        contacts: visibleConstacts
    }
}
const mapDispatchToProps = {
    deleteContact: contactsAction.removeContact
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactSection);