import logo from './logo.svg';
import './App.css';
import React ,{useState} from 'react';

import SearchSongsContainer from './containers/SearchSongsContainer';
import SearchResultsContainer from './containers/SearchResultsContainer';
import PlaylistContainer from './containers/PlaylistContainer';
import SaveToSpotifyButtonContainer from './containers/SaveToSpotifyButtoinContainer';

import listOfSongs from './ListOfSongs.json';
import searchSongs from "./functions/searchSongs";




function App() {
  const [trackList,setTrackList]= useState([]);

  function onSubmit(event){
    event.preventDefault();
    setTrackList(searchSongs(event.target.value,listOfSongs));
    
  }

  return (
    <div id="main">  
      <div id="input-search">
        <SearchSongsContainer onSubmit={onSubmit}/>{/*Search Bar and Search Button*/}  
      </div>
      <SaveToSpotifyButtonContainer/>
      <SearchResultsContainer/>{/*SearchResults*/}
      <PlaylistContainer/>
      
      
      
      
      {/*Save to Spotify*/}
    </div>
  );
}

export default App;
