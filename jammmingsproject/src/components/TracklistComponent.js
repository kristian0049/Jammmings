import React from 'react';

import TrackContainer from '../containers/TrackContainer';

function TracklistComponent(props){

    
    const checkLength = ()=>{
        const arr = [];
        if(props.trackList.length>0){
            for(let i = 0;i < props.trackList.length;i++){
                const song = props.trackList[i];
                arr.push(<TrackContainer name={song.name} duration={song.duration} artist={song.artist}/>)
            }
        };
        return arr;
    }
    return(
        <ul>
            {checkLength()}
        </ul>
    );
};

export default TracklistComponent;