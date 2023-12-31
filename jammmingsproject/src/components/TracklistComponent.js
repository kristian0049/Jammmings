import React from 'react';
import TrackContainer from '../containers/TrackContainer';
function TracklistComponent(props){
    const checkLength = ()=>{
        let arr = [];
        if(props.trackList.length>0){
            arr = props.trackList.map((song,index)=>{
               
            return (<li key={`TrackList_${song.name}_${index}`}>
                <TrackContainer  name={song.name} duration={song.duration} artist={song.artist}/>
                <button onClick={()=>{props.setPlayList([...props.playList,{name:song.name,duration:song.duration,artist:song.artist,id:song.id}])}}><>&#43;</></button>
            </li>)})
        };
        return arr;
    }
    return(
        <ul id="list-results">
            {checkLength()}
        </ul>
    );
};
export default TracklistComponent;