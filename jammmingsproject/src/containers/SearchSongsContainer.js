import React , {useState} from 'react';

import SearchSongsComponent from '../components/SearchSongsComponent';

function SearchSongsContainer(props){
    const [input,setInput] = useState("");
    
    function onSubmit(event){
        props.onSubmit(event.target.value);
    }

    function handleChange(event){
        event.preventDefault();
    }

    return(
        <SearchSongsComponent  onSubmit={onSubmit} />
    )
}

export default SearchSongsContainer;