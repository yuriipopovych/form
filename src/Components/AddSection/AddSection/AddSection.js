import React, { Component } from 'react'
import { connect } from 'react-redux';
import contactsAction from '../../../redux/contactsAction';
import styles from './AddSection.module.css';

class AddSection extends Component {
    state = {
        name: '',
        number: ''
    }
    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({[name]: value})
    }
   
    addContact = (e) => {
        e.preventDefault();
        this.props.onAddContact(this.state.name, this.state.number);
        // this.props.onNewContact(this.state.name, this.state.number);
        this.setState({
            name: '',
            number: ''
        })
    }
    render() {
        const { name, number } = this.state;
        return (
            <form className={styles.container} onSubmit={this.addContact }>
            <label>
                Name <br />
                <input type='text' onChange={this.handleChange} value={name} name='name'/> <br />
                Phone number <br />
                <input type='tel' onChange={this.handleChange} value={number} name='number'/> <br/>
                <button type="submit" disabled={name===''? true: false}>Add contact</button>
            </label>
        </form>
        )
    }
}
const mapDispatchToProps = {
    onAddContact: contactsAction.addContact
}
export default connect(null, mapDispatchToProps)(AddSection);




// import React from 'react';
// import styles from './AddSection.module.css';

// export default function AddSection({handleNameChange, addContact, handleNumberChange}) {
//     return (
//         <form className={styles.container} onSubmit={addContact }>
//             <label>
//                 Name <br />
//                 <input type='text' onChange={handleNameChange}  /> <br />
//                 Phone number <br />
//                 <input type='tel' onChange={handleNumberChange}  /> <br/>
//                 <button type="submit">Add contact</button>
//             </label>
//         </form>
//     )
// }
