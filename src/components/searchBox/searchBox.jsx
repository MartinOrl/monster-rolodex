import React from 'react'
import './searchBox.css'

export const SearchBox = ({ placeholder, handleChange }) => (
    <input type='search' placeholder={placeholder} onChange={handleChange} className='search'/>
)
