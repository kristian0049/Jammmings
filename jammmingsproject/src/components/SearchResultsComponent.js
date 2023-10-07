import React from 'react';
function SearchResultsComponent(props){
    return(
        <div id="results">
            <h1>Results</h1>
            {props.children}
        </div>
       
    );
}
export default SearchResultsComponent;