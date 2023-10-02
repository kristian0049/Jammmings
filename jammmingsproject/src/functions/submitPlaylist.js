import requestAccessToken from '../functions/spotifyAPI';
async function submitPlaylist(songs,playListName,accessToken){
    const isConnect = requestAccessToken();
    
    const urlToAccount ="https://api.spotify.com/v1/users/11181975625/playlists";
    const accountParameters = {
        method: "POST",
        headers:{
            "Authorization" : "Bearer " + accessToken,
            "Content-Type" : "application/json",
        },
         body: JSON.stringify({
            "name" : playListName,
            "description": "A new playlist",
           "public":true,
        }),

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
};
export default submitPlaylist;