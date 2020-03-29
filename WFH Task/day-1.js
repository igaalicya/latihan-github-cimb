// WFH Task Day 1 - Iga Alicya

const tripleTrouble = (one, two, three) => {

  let result = []
  one = one.split('')
  two = two.split('')
  three = three.split('')

  for(let i=0; i<one.length; i++){
      result.push(one[i])
      result.push(two[i])
      result.push(three[i])
  }
  return result.join('')
}

console.log(tripleTrouble("ab", "cd", "ef"))


const altCaps = (string) => {

  string = string.toLowerCase()
  let result = [[],[]]
  
  for(let i=0; i<string.length; i++){
    if(i%2 == 0){
      result[0].push(string[i].toUpperCase())
    } else if (i%2 !== 0){
      result[0].push(string[i])
    }
  }
  result[0] = result[0].join('')

  for(let i=0; i<string.length; i++){
    if(i%2 == 0){
      result[1].push(string[i])
    } else if (i%2 !== 0){
      result[1].push(string[i].toUpperCase())
    }
  }
  result[1] = result[1].join('')

  return result
}

console.log(altCaps("abcdef"))