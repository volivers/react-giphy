import React, { useState } from 'react';

const Search = ({className}) => {

  const [query, setQuery] = useState('');
  const [gif, setGif] = useState([]);


  const handleChange = (event) => {
    const { value } = event.target;
    setQuery(value);
  };

  return (
    <input className={className} onChange={handleChange} />
  );
}

export default Search;