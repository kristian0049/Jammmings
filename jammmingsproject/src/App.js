import logo from './logo.svg';
import './App.css';
import React ,{useState,useEffect} from 'react';

import SearchSongsContainer from './containers/SearchSongsContainer';
import SearchResultsContainer from './containers/SearchResultsContainer';
import PlaylistContainer from './containers/PlaylistContainer';
import SaveToSpotifyButtonContainer from './containers/SaveToSpotifyButtoinContainer';







function App() {
  const [trackList,setTrackList]= useState([]);
  const [input,setInput]=useState("");

 

  return (
    <div id="main">  
      <div id="input-search">
        <SearchSongsContainer setTrackList={setTrackList} input={input} setInput={setInput} />{/*Search Bar and Search Button*/}  
      </div>

       <SearchResultsContainer trackList={trackList}/> 
      <SaveToSpotifyButtonContainer/>
      <PlaylistContainer/>
      
      
      
      
      {/*Save to Spotify*/}
    </div>
  );
}

export default App;
