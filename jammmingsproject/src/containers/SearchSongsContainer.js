import React from 'react';

import SearchSongsComponent from '../components/SearchSongsComponent';
import searchSongs from "../functions/searchSongs";

function SearchSongsContainer(props){
    
   

    function onSubmit(event){
        event.preventDefault();
        searchSongs(props.input).then((response)=>{
            props.setTrackList(response);
        }); 
    };

    return(
        <SearchSongsComponent  onSubmit={onSubmit} input={props.input} setInput={props.setInput} />
    )
}

export default SearchSongsContainer;