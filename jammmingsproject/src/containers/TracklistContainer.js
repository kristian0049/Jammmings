import React from 'react';
import TracklistComponent from '../components/TracklistComponent';
function TracklistContainer(props){
    return(
        <TracklistComponent trackList={props.trackList} playList={props.playList} setPlayList={props.setPlayList} />
    );
};
export default TracklistContainer;