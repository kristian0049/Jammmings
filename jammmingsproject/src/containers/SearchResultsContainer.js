import React, {useState} from 'react';

import SearchResultsComponent from '../components/SearchResultsComponent';

import TracklistContainer from './TracklistContainer';

function SearchResultsContainer(){

    

    return(
        <SearchResultsComponent>
           <TracklistContainer/>
        </SearchResultsComponent>
    );
}

export default SearchResultsContainer;