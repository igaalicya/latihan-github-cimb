const newString = (str) =>{
    
    str = str.split('')
    let result = []
    for (i=0; i<str.length; i++){
        result += `${str[i].toUpperCase()}`
        for(j=0; j<i; j++){
            result += str[i]
        }
        result += `-`
    }
    result =result.slice(0, -1);
    return result
}
console.log(newString('hello'))