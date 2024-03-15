function capitalizer(string){
    let capitalisedString = ''
    for (let i = 0; i < string.length; i++){
        if(i === 0){
            capitalisedString += string[i].toUpperCase()
        }
        else capitalisedString += string[i]
    }
    return capitalisedString
}

export default capitalizer