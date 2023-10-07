import generateRandomString from "./generateRandomString";
 function authorizeUserLink(){
    const clientId="b8986874fd7048d89e5e148053643fcd";
    const scope = "playlist-modify-private playlist-modify-public user-read-private user-read-email";
    const stateString = generateRandomString(16);
    const redirect_uri="http://localhost:3000/callback";
    const url =`https://accounts.spotify.com/authorize?`+
    'response_type=token'+
    '&client_id='+encodeURIComponent(clientId)+
    '&scope='+encodeURIComponent(scope)+
    '&redirect_uri='+encodeURIComponent(redirect_uri)+
    '&state='+encodeURIComponent(stateString);                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
     window.location.href = url;
};
export default authorizeUserLink;