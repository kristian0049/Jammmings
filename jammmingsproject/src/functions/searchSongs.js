function removeDuplicate(arr){
    let unique = arr.reduce(function (acc,curr){
        if(!acc.includes(curr))
            acc.push(curr);
        return acc;
    },[]);
    console.log(unique);
    return unique;
}

function searchSongs(input,spotifyAPIList){

    //Issue with this code 
    //If i input Kendrick , it does not find Kendrick Lamar 
    const inputLowerCase = input.toLowerCase();
    let trackList = [];
    const isConnected = new Promise ((resolve,reject) => {
        resolve(spotifyAPIList);

        reject((error)=> {throw new Error(error)});
    })

    isConnected.then((resolve)=>{
        const resolvedValue = resolve.listOfSongs;
       
        if(resolve.listOfSongs.length>0 && input.length>0){
        
            for(let  i  = 0 ; i< resolvedValue.length;i++){
                
                if(resolvedValue[i].name.toLowerCase().includes(inputLowerCase )){
                    
                    trackList.push(resolvedValue[i]);
                   
                } else if(resolvedValue[i].artist.toLowerCase().includes(inputLowerCase )){
                    trackList.push(resolvedValue[i]);
                    
                }
            }
    
            
        }
        
    }).catch((error)=> {throw new Error(error)});

  
    // trackList = removeDuplicate(trackList);
    
    return trackList;
};


export  {searchSongs as default};