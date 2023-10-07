function generateRandomString(length){
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const characterLength = characters.length;
    let counter = 0;
    while(counter < length){
        result += characters.charAt(Math.floor(Math.random()*characterLength));
        counter+=1;
    }
    return result;
}

export default generateRandomString;