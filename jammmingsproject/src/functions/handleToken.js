import requestAccessToken from '../functions/spotifyAPI';

function handleToken(setAccessToken,setTokenTime){
   requestAccessToken().then((response)=>{
      setAccessToken(response.access_token);
      setTokenTime(response.expires_in);
    });

}