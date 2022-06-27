import React from 'react';
import './Searchbar.css';

const Searchbar = ({ onSearchChange }) => {
  return (
    <div className='tc'>
      <input
        className='pa3 ba b--green bg-lightest-blue input'
        type='search'
        placeholder='Search Robots'
        onChange={onSearchChange}
      />
    </div>
  );
};

export default Searchbar;
