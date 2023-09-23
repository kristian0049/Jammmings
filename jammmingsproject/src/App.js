import logo from './logo.svg';
import './App.css';
import React ,{useState,useEffect} from 'react';

import SearchSongsContainer from './containers/SearchSongsContainer';
import SearchResultsContainer from './containers/SearchResultsContainer';
import PlaylistContainer from './containers/PlaylistContainer';
import SaveToSpotifyButtonContainer from './containers/SaveToSpotifyButtoinContainer';







function App() {
  const [trackList,setTrackList] = useState([]);
  const [playList,setPlayList] = useState([]);
  const [input,setInput]=useState("");
  const [nameOfList,setNameOfList]=useState("");

 

  return (
    <div id="main">  
      <div id="input-search">
        <SearchSongsContainer setTrackList={setTrackList} input={input} setInput={setInput} />{/*Search Bar and Search Button*/}  
      </div>
      <div id="searchResults">
        <SearchResultsContainer trackList={trackList} playList={playList} setPlayList={setPlayList}/> 
      </div>
      <div id="playList">
        <SaveToSpotifyButtonContainer   nameOfList={nameOfList} setNameOfList={setNameOfList} playList={playList}/>
        <PlaylistContainer  playList={playList} setPlayList={setPlayList} />
      </div>      

    </div>
  );
}

export default App;
