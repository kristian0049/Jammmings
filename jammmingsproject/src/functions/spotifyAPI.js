async function requestAccessToken(){
    const url ="https://accounts.spotify.com/api/token";
    const clientId="b8986874fd7048d89e5e148053643fcd";
    const clientSecret="3c170cb99374499f9161fb0f229f5b99";
    const response = await fetch(url,{
        method:"POST",
        headers:{
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body:`grant_type=client_credentials&client_id=${clientId}&client_secret=${clientSecret}`
       
    }).catch((error)=>{throw new Error(error)});

    return response.json();
};

export default requestAccessToken;