import logo from './logo.svg';
import './App.css';
import React ,{useState,useEffect} from 'react';

import SearchSongsContainer from './containers/SearchSongsContainer';
import SearchResultsContainer from './containers/SearchResultsContainer';
import PlaylistContainer from './containers/PlaylistContainer';
import SaveToSpotifyButtonContainer from './containers/SaveToSpotifyButtoinContainer';




const listOfUri=["spotify:track:7IDJ19VgYwZSzDH5Ku5FT9",
"spotify:track:6HZILIRieu8S0iqY8kIKhj",
"spotify:track:4KDNRh9Oor80z3XIxdWlui"];


function App() {
  const [trackList,setTrackList] = useState([]);
  const [playList,setPlayList] = useState([]);
  const [input,setInput]=useState("");
  const [nameOfList,setNameOfList]=useState("");
  const [uriList,setUriList]=useState(listOfUri);

 

  return (
    <div id="main">  
      <div id="input-search">
        <SearchSongsContainer setTrackList={setTrackList} input={input} setInput={setInput} />{/*Search Bar and Search Button*/}  
      </div>
      <div id="searchResults">
        <SearchResultsContainer trackList={trackList} playList={playList} setPlayList={setPlayList}/> 
      </div>
      <div id="playList">
        <SaveToSpotifyButtonContainer   nameOfList={nameOfList} setNameOfList={setNameOfList} playList={playList} uriList={uriList}/>
        <PlaylistContainer  playList={playList} setPlayList={setPlayList} />
      </div>      

    </div>
  );
}

export default App;
