import React,{useState}  from 'react';

import SearchSongsComponent from '../components/SearchSongsComponent';
import searchSongs from "../functions/searchSongs";
import listOfSongs from "../ListOfSongs.json";

function SearchSongsContainer(props){
    
   

    function onSubmit(event){
        event.preventDefault();
        props.setTrackList(searchSongs(props.input,listOfSongs));
    
    }

    

    return(
        <SearchSongsComponent  onSubmit={onSubmit} input={props.input} setInput={props.setInput} />
    )
}

export default SearchSongsContainer;