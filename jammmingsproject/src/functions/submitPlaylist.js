async function submitPlaylist(songs,playListName,accessToken,userId){
    const urlToAccount =`https://api.spotify.com/v1/users/${userId}/playlists`;
    if(songs.length>0){
        const accountParameters = {
            method: "POST",
            headers:{
                "Authorization" : "Bearer " + accessToken,
                "Content-Type" : "application/json",
            },
            body: JSON.stringify({
                "name" : playListName,
                "description": "A new playlist",
                "public":false,
            }),
    
        };
     const responsePlaylist = await fetch(urlToAccount,accountParameters);
     const createdPlaylist = await responsePlaylist.json();
     const urlToPlaylist=`https://api.spotify.com/v1/playlists/${createdPlaylist.id}/tracks`;
     let arrayOfSongs= [];
       arrayOfSongs = songs.map(song=>{
        return "spotify:track:"+song.id});
        console.log(arrayOfSongs);

       const playlistParameters={
           method:"POST",
           headers:{
               "Authorization" : "Bearer "+accessToken,
               "Content-Type" : "application/json"
           },
           body:JSON.stringify({
               "uris" : arrayOfSongs,
               "position" : 0
           })
       };
       const addSongs = await fetch(urlToPlaylist,playlistParameters)

    }else{
        throw new Error ("No songs added to the Playlist");
    }
};
export default submitPlaylist;