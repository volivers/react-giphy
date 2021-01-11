// import React, { useState } from 'react';
import React from 'react';
import { DebounceInput } from 'react-debounce-input';

// const Search = ({className}) => {

//   const [query, setQuery] = useState('');
//   const [gif, setGif] = useState([]);


//   const handleChange = (event) => {
//     const { value } = event.target;
//     setGif(value);
//   };

//   return (
//     <input className={className} onChange={handleChange} />
//   );
// }

const Search = ({ onChange }) => {
  return(
    <DebounceInput
      minLength={2}
      debounceTimeout={300}
      type="text"
      onChange={onChange}
      className="form-search form-control" />
  );
}

export default Search;
