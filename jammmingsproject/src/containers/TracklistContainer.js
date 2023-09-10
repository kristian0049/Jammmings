import React from 'react';

import TracklistComponent from '../components/TracklistComponent';

const aListOfSongs=[{
    id:1,
    name:"I'm Dat Nigga",
    author:"Future",
    duration:3.30
},
{
    id:2,
    name:"DNA",
    author:"Kendrick Lamar",
    duration:3.05
},
{
    id:3,
    name:"I'm Dat Nigga",
    author:"Future",
    duration:3.30
}];

function TracklistContainer(){
    return(
        <TracklistComponent/>
    );
};

export default TracklistContainer;