import React from 'react';

function PlaylistComponent(props){
    return(
        <ul>
            {()=>{
                if(props.playList.length > 0){
                    return (()=>{
                        props.playList.map((track)=><li>{track}</li>);
                    })
                }
            }}
        </ul>
    );
};

export default PlaylistComponent;