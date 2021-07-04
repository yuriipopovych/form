import React from 'react'

export default function Filter({value, handleFilterChange}) {
    return (
        <div>
            <h2>Contacts</h2>
            <h3>Find contact name</h3>
            <input type='text' value={value } onChange={ handleFilterChange}/>
        </div>
    )
}
