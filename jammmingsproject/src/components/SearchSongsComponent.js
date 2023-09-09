import React from 'react';

function SearchSongsComponent(props){
    return(
        
        <form>
            <input type="text" value={props.text} placeholder="Input here..."/>
            <button>Search</button>
        </form>
        
    )
}

export default SearchSongsComponent;