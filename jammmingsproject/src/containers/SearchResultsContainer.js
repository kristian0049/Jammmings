import React, {useState} from 'react';

import SearchResultsComponent from '../components/SearchResultsComponent';

import TracklistContainer from './TracklistContainer';

function SearchResultsContainer(props){

    

    return(
        <SearchResultsComponent>
           <TracklistContainer trackList={props.trackList}/>
        </SearchResultsComponent>
    );
}

export default SearchResultsContainer;