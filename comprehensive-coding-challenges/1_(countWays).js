const countWays = n => {
  if (n <= 1){
    return 1
  }
  let numArr = [0, 1, 1];
  for(let i = 2; i <= n; i++){
    numArr.push(numArr.reduce((a,b)=>a+b))
    numArr.shift()
  }
 return numArr[numArr.length-1]
}