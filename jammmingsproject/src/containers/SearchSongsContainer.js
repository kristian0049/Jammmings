import React,{useState}  from 'react';

import SearchSongsComponent from '../components/SearchSongsComponent';
import searchSongs from "../functions/searchSongs";

function SearchSongsContainer(props){
    
   

    function onSubmit(event){
        event.preventDefault();
        const arr = searchSongs(props.input);
        console.log(arr);
        if(props.input.length>0){
            props.setTrackList((prev)=>[...prev,arr]);
        }   
       

    }

    

    return(
        <SearchSongsComponent  onSubmit={onSubmit} input={props.input} setInput={props.setInput} />
    )
}

export default SearchSongsContainer;