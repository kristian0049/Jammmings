import React from 'react';

import PlaylistComponent from '../components/PlaylistComponent';

function PlaylistContainer(props){

    return(
        <PlaylistComponent playList={props.playList} setPlayList={props.setPlayList} />
    );
};

export default PlaylistContainer;