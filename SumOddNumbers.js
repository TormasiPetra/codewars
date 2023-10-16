function rowSumOddNumbers(n) {
	const startNumber = n * n - (n - 1)
  let latestNumber = startNumber 
  let result = startNumber 
  
  for(let i = 2; i <= n ; i++){
    latestNumber += 2 
    result += latestNumber 
    
  }
   return result
  
  /*let counter = 1 
  let result = 0
  
  for(let i = startNumber; counter <= n; i += 2){
    result += i
    counter++
  }
  return result */
  
  
 /* let result = [startNumber]
  let sum = 0
  
  for (let i = 2; i <= n; i++){
     result.push(result[result.length - 1] + 2)
  }
  
  for(let i = 0; i < result.length; i++){
    sum += result[i]
  } 
  return sum */
  
}