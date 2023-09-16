import React from 'react';

function SearchSongsComponent(props){
    return(
        <form method="get" onSubmit={props.onSubmit}>
            <input type="text" placeholder="Input here..." value={props.input} onChange={(e)=>props.setInput(e.target.value)}  />
            
        </form>
        
    )
};

export default SearchSongsComponent;