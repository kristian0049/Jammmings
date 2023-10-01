import requestAccessToken from '../functions/spotifyAPI';
async function submitPlaylist(songs,playListName){
    const isConnect = requestAccessToken();
    const accessToken = await isConnect;
    const urlToAccount ="https://api.spotify.com/v1/users/11181975625/playlists";
    const accountParameters = {
        method: "POST",
         body: JSON.stringify({
            "name": playListName,
            "public":true,
        }),
        headers:{
            "Authorization" : "Bearer " + accessToken.access_token,
            "Content-Type" : "application/json",
        },
    };
    
    const responsePlaylist = await fetch(urlToAccount,accountParameters);
   
    const createdPlaylist = await responsePlaylist.json();
  
    const urlToPlaylist=`https://api.spotify.com/v1/playlists/${createdPlaylist.id}/tracks`;
    let arrayOfSongs= [];
    arrayOfSongs = songs.map(song=>{
        console.log(song.id);
        return "spotify:track"+song.id});
    const playlistParameters={
        method:"POST",
        headers:{
            "Authorization" : "Bearer "+accessToken.access_token,
            "Content-Type" : "application/json"
        },
        data:{
            "uris" : arrayOfSongs,
            "position" : 0
        }
    };
    const addSongs = await fetch(urlToPlaylist,playlistParameters)
    console.log(addSongs);
};
export default submitPlaylist;