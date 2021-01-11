import React from 'react';
import './App.scss';
import Gif from './components/Gif';
import GifList from './components/GifList';
import Search from './components/Search';

function App() {
  return (
    <div className="app">
      <div className="left-scene">
        <Search className="form-search" />
        <div className="selected-gif">
          <Gif />
        </div>
      </div>

      <div className="right-scene">
        <GifList />
      </div>
    </div>
  );
}

export default App;
