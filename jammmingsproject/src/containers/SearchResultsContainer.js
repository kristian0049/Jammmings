import React, {useState} from 'react';

import SearchResultsComponent from '../components/SearchResultsComponent';

import TracklistContainer from './TracklistContainer';

function SearchResultsContainer(props){

    

    return(
        <SearchResultsComponent>
           <TracklistContainer trackList={props.trackList} playList={props.playList} setPlayList={props.setPlayList}/>
        </SearchResultsComponent>
    );
}

export default SearchResultsContainer;