import React from 'react';

function SearchResultsComponent(props){

    return(
        <ul>
            
            {
                ()=>{
                    if(props.trackList.length > 0 ){
                        return ()=>{
                            props.trackList.map((track)=> <li>{track}</li>);
                        }
                    }
                }
                
                
            }
        </ul>
    );
}

export default SearchResultsComponent;