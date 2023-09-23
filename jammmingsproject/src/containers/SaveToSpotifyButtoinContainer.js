import React from 'react';

import SaveToSpotifyButtonComponent from '../components/SaveToSpotifyButtonComponent';

function SaveToSpotifyButtonContainer(props){
    return(
        <SaveToSpotifyButtonComponent nameOfList={props.nameOfList} setNameOfList={props.setNameOfList} playList={props.playList}/>
    )
};

export default SaveToSpotifyButtonContainer;