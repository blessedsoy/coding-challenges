// Question D -- stringPermutations(s): Find all permutations of a string 
// (do not use a built in language method). 
// For s = "CBA", the output should be stringPermutations(s) = 
// ["ABC", "ACB", "BAC", "BCA", "CAB", "CBA"]. 
// For s = "ABA", the output should be stringPermutations(s) = ["AAB", "ABA", "BAA"].


const stringPermutations = (str) => {
  let arr = str.split('')
  let i, ch;
  for (i = 0; i < arr.length; i++) {
    ch = arr.splice(i, 1)[0];
    usedChars.push(ch);
    if (arr.length == 0) {
      permArr.push(usedChars.join(''));
    }
    stringPermutations(arr.join(''));
    arr.splice(i, 0, ch);
    usedChars.pop();
  }
  return permArr.sort();
}