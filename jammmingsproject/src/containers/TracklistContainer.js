import React from 'react';

import TracklistComponent from '../components/TracklistComponent';

 

function TracklistContainer(props){
    return(
        <TracklistComponent trackList={props.trackList}/>
    );
};

export default TracklistContainer;