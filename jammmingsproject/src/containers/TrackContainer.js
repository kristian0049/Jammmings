 import React ,{useState}  from 'react';

 import TrackComponent from '../components/TrackComponent';

 function TrackContainer(props){
    const [isInPlaylist,setIsInPlaylist]=useState(false);
    const [songId,setSongId]= useState(0);

    function addToPlayList(e){
        
        if(isInPlaylist === false){
            props.setPlayList([...props.playList,
                <TrackContainer key={props.name} name={props.name} artist={props.artist} duration={props.duration} playList={props.setPlayList} setPlayList={props.setPlayList} listLocation={"playList"}/>
            ]);
            
        }
    };

    
    function removeFromPlayList(e){
        if(isInPlaylist===true){
            console.log(props);
            // props.setPlayList([...props.playList,
                
            // ]);
           
        }
        
    };
    return(
        <TrackComponent isInPlaylist={isInPlaylist} setIsInPlaylist={setIsInPlaylist} songTitle={props.name} songDuration={props.duration} songArtist={props.artist} addToPlayList={addToPlayList} removeFromPlayList={removeFromPlayList} listLocation={props.listLocation} />
    );
 };

 export default TrackContainer;