import logo from './logo.svg';
import './App.css';
import React from 'react';

import SearchSongsContainer from './containers/SearchSongsContainer';
import SearchResultsContainer from './containers/SearchResultsContainer';

function App() {
  return (
    <div id="background">  
      <h1>Hello,Kris</h1>
      <div>
        <SearchSongsContainer/>{/*Search Bar and Search Button*/}  
      </div>
      <div>
        <SearchResultsContainer/>{/*SearchResults*/}
      </div>
      
      {/*Playlist*/}
      {/*Tracklist*/}
      {/*Track*/}
      {/*Save to Spotify*/}
    </div>
  );
}

export default App;
