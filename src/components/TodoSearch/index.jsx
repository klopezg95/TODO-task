import React from 'react'
import './TodoSearch.css'
import {TodoContext} from '../TodoContext'

function TodoSearch() {

    const {
        searchValue,
        setSearchValue,
    } = React.useContext(TodoContext);

    return (
        <input
            className='TodoSearch'
            placeholder='Search TODO'
            value={searchValue}
            onChange={(e) => {
                setSearchValue(e.target.value);
            }} />
    )
}

export default TodoSearch