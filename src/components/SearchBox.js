import React from 'react';

const SearchBox = ({ searchfield, searchChange }) => {
  return (
    <div className='pa2'>
      <input
        className='pa3 ba b--green bg-near-white'
        type='search'
        placeholder='search news'
        onChange={searchChange}
      />
    </div>
  );
}

export default SearchBox;