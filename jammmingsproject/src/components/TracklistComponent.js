import React from 'react';

import TrackContainer from '../containers/TrackContainer';

function TracklistComponent(props){

    
    const checkLength = ()=>{
        const arr = [];
        if(props.trackList.length>0){
            for(let i = 0;i < props.trackList.length;i++){
                const song = props.trackList[i];
                arr.push(<TrackContainer key={`TrackList_${song.name}`} name={song.name} duration={song.duration} artist={song.artist} playList={props.playList} setPlayList={props.setPlayList} listLocation={"trackList"}/>)
            }
        };
        return arr;
    }
    return(
        <ul id="list-results">
            {checkLength()}
        </ul>
    );
};

export default TracklistComponent;