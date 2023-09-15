import React from 'react';

function SearchSongsComponent(props){
    return(
        
        <form onSubmit={}>
            <input type="text" placeholder="Input here..." onChange={props.onSubmit}/>
            <button type="submit">Search</button>
        </form>
        
    )
}

export default SearchSongsComponent;