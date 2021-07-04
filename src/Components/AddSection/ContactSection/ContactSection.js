import React from 'react'

export default function ContactSection({ contacts, deleteContact}) {
    return (
        <div>
            
            <ul>
                {contacts.map((contact) => <li key={contact.name} >{contact.name}: {contact.number} <button onClick={deleteContact} value={contact.name}>Delete</button></li>)}
            </ul>
            
            
        </div>
    )
}
