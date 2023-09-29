import React from 'react';
import searchSongs from "../functions/searchSongs";
function SearchSongsComponent(props){
    return(
        <form method="get" onSubmit={props.onSubmit}>
            <input type="text" placeholder="Input here..." value={props.input} onChange={(e)=>{
                props.setInput(e.target.value)
                if(e.target.value.length===0){
                    props.setTrackList([]);
                }else{
                    searchSongs(e.target.value).then((response)=>{
                    props.setTrackList(response);
                }); 
                }
            }} />
        </form>
    )
};
export default SearchSongsComponent;