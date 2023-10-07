import React from 'react';
import SearchSongsComponent from '../components/SearchSongsComponent';
function SearchSongsContainer(props){
    function onSubmit(event){
        event.preventDefault();
   };
    return(
        <SearchSongsComponent  onSubmit={onSubmit} input={props.input} setInput={props.setInput} setTrackList={props.setTrackList}  accessToken={props.accessToken}/>
    )
}
export default SearchSongsContainer;