// Question A -- countWays(n): A child is climbing up a staircase with n steps, 
// and can hop either 1 step, 2 steps, or 3 steps at a time. 
// Implement a method to count how many possible ways the child can jump up the stairs.

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