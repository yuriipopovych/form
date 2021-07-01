import React from 'react'

export default function Filter({value, handleFilterChange}) {
    return (
        <div>
            <input type='text' value={value } onChange={ handleFilterChange}/>
        </div>
    )
}
