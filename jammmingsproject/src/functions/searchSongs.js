import requestAccessToken from '../functions/spotifyAPI';
function millisToMinutesAndSeconds(millis){
    let  minutes = Math.floor(millis/60000);
    let seconds =((millis % 60000) / 1000).toFixed(0);
    return seconds === 60 ? (minutes+1)+ ":00" : minutes + ":" + ( seconds < 10 ? "0" : "")+seconds;
}
async function searchSongs(input){

    const trackList = [];

    const trackURL=`https://api.spotify.com/v1/search?q=${input}&type=track%2Cartist&market=GB&limit=10&include_external=audio`;
    const isConnected = requestAccessToken();
    const accessToken = await isConnected;
    const trackParam = {
        method:"GET",
        headers:{
           "Authorization" : `Bearer `+accessToken.access_token
        }
    };

    const tracks = await fetch(trackURL,trackParam);
    const tracksData = await tracks.json();
    const tracksItems = tracksData.tracks.items;
   

   
    for(let i =0; i<tracksItems.length;i++){
        const song = tracksItems[i];
        const songDuration = millisToMinutesAndSeconds(song.duration_ms);
        let artists= '';
        for( let y = 0;y<song.artists.length;y++){
            if(y!== song.artists.length-1){
                artists+= song.artists[y].name + ',';
             }else{
                artists+= song.artists[y].name;
            }
        }
        
        trackList.push({name:song.name,duration:songDuration,artist:artists,id:song.id});
    }
   
   return trackList;
};


export  {searchSongs as default};