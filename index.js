function duplicateCount(text){
    let arrUnique = []
    let arrCount = []
    text = text.split('')
    let count = 0
  
    for(var i = 0; i < text.length; i++) {
    if (arrUnique.includes(text[i])) { 
        } else {
            arrUnique.push(text[i])
            arrCount.push(0)
        }
    }
    for(let j = 0; j<arrUnique.length; j++){
          if ( text[i] == arrUnique[j] ) {
              
              let index = arrUnique.indexOf(text[i])
              arrCount[index] += 1
          }
      }
    
    for(let k=0; k<arrCount.length; k++){
      if(arrCount[i] > 1){
      count += 1
      }
    }
  
  return count
  
  }