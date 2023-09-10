import logo from './logo.svg';
import './App.css';
import React from 'react';

import SearchSongsContainer from './containers/SearchSongsContainer';
import SearchResultsContainer from './containers/SearchResultsContainer';
import PlaylistContainer from './containers/PlaylistContainer';
import SaveToSpotifyButtonContainer from './containers/SaveToSpotifyButtoinContainer';

function App() {
  return (
    <div id="main">  
      <div id="input-search">
        <SearchSongsContainer/>{/*Search Bar and Search Button*/}  
      </div>
      <SaveToSpotifyButtonContainer/>
      <SearchResultsContainer/>{/*SearchResults*/}
      <PlaylistContainer/>
      
      
      
      
      {/*Save to Spotify*/}
    </div>
  );
}

export default App;
