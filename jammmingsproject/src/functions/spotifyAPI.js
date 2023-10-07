function requestAccessToken(){
    const queryString = window.location.hash;
    const urlParams= new URLSearchParams(queryString);
    const code = urlParams.get('#access_token')|| null;   
    return code
};
export default requestAccessToken;