import React from 'react';

import SearchSongsComponent from '../components/SearchSongsComponent';
import searchSongs from "../functions/searchSongs";

function SearchSongsContainer(props){
    
   

    function onSubmit(event){
        event.preventDefault();
        // if(props.input.length===0){
        //     props.setTrackList([]);
        // }else{
        //     searchSongs(props.input).then((response)=>{
        //     props.setTrackList(response);
        // }); 
    
        // }

   };

    return(
        <SearchSongsComponent  onSubmit={onSubmit} input={props.input} setInput={props.setInput} setTrackList={props.setTrackList}/>
    )
}

export default SearchSongsContainer;