import './App.css';
import React ,{useState,useEffect} from 'react';
import SearchSongsContainer from './containers/SearchSongsContainer';
import SearchResultsContainer from './containers/SearchResultsContainer';
import PlaylistContainer from './containers/PlaylistContainer';
import SaveToSpotifyButtonContainer from './containers/SaveToSpotifyButtoinContainer';
import requestAccessToken from './functions/spotifyAPI';
import authorizeUserLink from './functions/authorizeUserLink';
import getCurrentUser from './functions/getCurrentUser';
function App() {
  const [trackList,setTrackList] = useState([]);
  const [playList,setPlayList] = useState([]);
  const [input,setInput]=useState("");
  const [nameOfList,setNameOfList]=useState("");
  const [accessToken,setAccessToken]=useState("");
  const [userId,setUserId]=useState("");
  useEffect(()=>{
    if(window.location.href.includes("callback"))
    {
     setAccessToken(requestAccessToken());
     getCurrentUser(accessToken).then((response)=>{
      setUserId(response.id);
     })
    }
    

  },[])
  return (
    <div id="main">  
    <button onClick={authorizeUserLink}>Sign In</button>
      <div id="input-search">
        <SearchSongsContainer setTrackList={setTrackList} input={input} setInput={setInput} accessToken={accessToken}/>{/*Search Bar and Search Button*/}  
      </div>
      <div id="searchResults">
        <SearchResultsContainer trackList={trackList} playList={playList} setPlayList={setPlayList}/> 
      </div>
      <div id="playList">
        <SaveToSpotifyButtonContainer   nameOfList={nameOfList} setNameOfList={setNameOfList} playList={playList} accessToken={accessToken} userId={userId}/>
        <PlaylistContainer  playList={playList} setPlayList={setPlayList} />
      </div>      
    </div>
  );
}
export default App;
