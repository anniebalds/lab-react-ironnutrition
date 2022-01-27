import React from 'react';

const Search = ({searchedString, callbackSearch}) => {
  return <div>

    <input className='search'
        type='text'
        placeholder='Search for a food item'
        value={searchedString}
        onChange={(e) => callbackSearch(e.target.value)}
    />

  </div>;
};


export default Search;
