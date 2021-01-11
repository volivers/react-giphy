// import React, { useState } from 'react';
import React, { Component } from 'react';

// const Gif = (props) => {
//   const { id } = this.props;
//   const [clicked, setClicked] = useState(false);

//   const url = `https://media.giphy.com/media/${id}/giphy.gif`;

//   const handleClick = () => {
//     setClicked(id);
//   }

//   return (
//     <div>
//       <img src={url} alt="Gif by Giphy" onClick={handleClick} />
//     </div>
//   );
// }

class Gif extends Component {
  handleClick = () => {
    const { id, onClick } = this.props;
    onClick(id);
  }

  render() {
    const { id } = this.props;
    const url = `https://media2.giphy.com/media/${id}/200w.webp`;

    return (
      <img src={url} alt="Gif by Giphy" className="gif" onClick={this.handleClick} />
    );
  }
}

export default Gif;