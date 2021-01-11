import React, { useState } from 'react';

const Gif = (props) => {
  const { id } = this.props;
  const [clicked, setClicked] = useState(false);

  const url = `https://media.giphy.com/media/${id}/giphy.gif`;

  const handleClick = () => {
    setClicked(id);
  }

  return (
    <div>
      <img src={url} alt="Gif by Giphy" onClick={handleClick} />
    </div>
  );
}

export default Gif;