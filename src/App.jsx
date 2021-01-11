import React, { Component } from 'react';
import './App.scss';
import Gif from './components/Gif';
import GifList from './components/GifList';
import Search from './components/Search';
import giphy from 'giphy-api';

class App extends Component {
  state = {
    ids: [],
    selectedId: 'tOWyML1WPzKjm'
  }

  handleGifSelect = (id) => {
    this.setState({ selectedId: id });
  }

  handleSearch = (event) => {
    const { value } = event.target

    giphy('M46PkeokTrImTrkib2H9Pj5LiGMv6NGK').search({
      q: value,
      rating: 'g',
      limit: 10 },
      (_err, res) => {
        console.log(res);
        this.setState({ ids: res.data.map(gif => gif.id) });
    });
  }

  render() {
    const { ids } = this.state;

    return (
      <div className="app">
        <div className="left-scene">
          <Search className="form-search" onChange={this.handleSearch} />
          <div className="selected-gif">
            <Gif id={this.state.selectedId} />
          </div>
        </div>

        <div className="right-scene">
          <GifList ids={ids} onSelect={this.handleGifSelect} />
        </div>
      </div>
    );
  }
}

export default App;
