function searchSongs(input,spotifyAPIList){

    //Issue with this code 
    //If i input Kendrick , it does not find Kendrick Lamar 

    const trackList = [];
    const isConnected = new Promise ((resolve,reject) => {
        resolve(spotifyAPIList);

        reject((error)=> {throw new Error(error)});
    })

    isConnected.then((resolve)=>{
        const resolvedValue = resolve.listOfSongs;
       
        if(resolve.listOfSongs.length>0){
        
            for(let  i  = 0 ; i< resolvedValue.length;i++){
                if(resolvedValue[i].name === input){
                    trackList.push(resolvedValue[i]);
                }
    
                if(resolvedValue[i].artist === input){
                    trackList.push(resolvedValue[i]);
                }
            }
    
            
        }
        
    }).catch((error)=> {throw new Error(error)});
    
    return trackList;
}


export  {searchSongs as default};