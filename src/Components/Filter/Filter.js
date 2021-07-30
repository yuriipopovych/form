import React from 'react'
import { connect } from 'react-redux';
import contactsAction from '../../redux/contactsAction';
import styles from './Filter.module.css';

const Filter = ({value, handleFilterChange}) => {
    return (
        <div>
            <h2>Contacts</h2>
            <h3>Find contact name</h3>
            <div className={styles.btnDiv}>
                <input type='text' value={value} onChange={e=>handleFilterChange(e.target.value)}/>
                {/* {value.length > 0 ? <div onClick={clearFilter} className={styles.close}></div> : null} */}
            </div>
            
            
        </div>
    )
}
const mapStateToProps = state => ({
    value: state.contactsBook.filter
})
const mapDispatchToProps = {
    handleFilterChange: contactsAction.changeFilter
}

export default connect(mapStateToProps, mapDispatchToProps)(Filter)
