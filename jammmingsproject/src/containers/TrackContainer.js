 import React ,{useState}  from 'react';

 import TrackComponent from '../components/TrackComponent';

 function TrackContainer({trackId,trackName,trackAuthor,trackDuration}){
    const [songId,setId] = useState(trackId);
    const [nameOfSong,setNameOfSong] = useState(trackName);
    const [nameOfAuthor,setNameOfAuthor] = useState(trackAuthor);
    const [songLength,setSongLength]=useState(trackDuration); 

    const [isInPlaylist,setIsInPlaylist] = useState(false);
    
    

    

    return(
        <TrackComponent isInPlaylist={isInPlaylist} songTitle={"I'm Dat Nigga"} songDuration={3.30} songAuthor={"Future"}/>
    )
 };

 export default TrackContainer;