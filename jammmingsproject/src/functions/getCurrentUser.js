async function getCurrentUser(accessToken){
    const response = await fetch("https://api.spotify.com/v1/me",{
        method:"GET",
        headers:{
           "Authorization" : `Bearer `+accessToken
        }
    });
    return response.json();
}
export default getCurrentUser;