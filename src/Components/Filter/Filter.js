import React from 'react'
import styles from './Filter.module.css';

export default function Filter({value, handleFilterChange, clearFilter}) {
    return (
        <div>
            <h2>Contacts</h2>
            <h3>Find contact name</h3>
            <div className={styles.btnDiv}>
                <input type='text' value={value} onChange={handleFilterChange} placeholder='enter name' />
                {value.length > 0 ? <div onClick={clearFilter} className={styles.close}></div> : null}
            </div>
            
            
        </div>
    )
}
