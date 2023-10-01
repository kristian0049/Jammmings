import React from 'react';
import SearchSongsComponent from '../components/SearchSongsComponent';
function SearchSongsContainer(props){
    function onSubmit(event){
        event.preventDefault();
   };
    return(
        <SearchSongsComponent  onSubmit={onSubmit} input={props.input} setInput={props.setInput} setTrackList={props.setTrackList}/>
    )
}
export default SearchSongsContainer;