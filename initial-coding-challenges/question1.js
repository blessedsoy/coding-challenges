// Question 1 -- sumOfTwo(a,b,v): You have two integer arrays: 
// a and b, and an integer target value v. 
// Determine whether there is a pair of numbers, 
// where one number is taken from a and the other from b, 
// that can be added together to get a sum of v. 
// Return true if such a pair exists, otherwise return false.


const sumOfTwo = (a,b,v) => {
  let a = a.sort((a,b) => a - b)
  let b = b.sort((a,b) => a - b)
  if (a[a.length-1] + b[b.length-1] < v){
    return false 
  } // return false when the sum of the largest number of both arrays is smaller than v.
  const [shorterArr, longerArr] = a.length < b.length ? [a, b] : [b, a]
 
  let ObjOfShorterArr = new Set();
  for (let n of shorterArr) {
    ObjOfShorterArr.add(v - n)
  } 
  for (let n of longerArr) {
    if(ObjOfShorterArr.has(n)){
      return true
    }
  }
  return false
}



