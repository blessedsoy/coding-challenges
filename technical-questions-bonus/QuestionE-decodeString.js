// Question E -- decodeString(s): Given an encoded string, return its corresponding decoded string. 

// The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is repeated exactly k times. Note: k is guaranteed to be a positive integer. 

// For s = "4[ab]", the output should be decodeString(s) = "abababab" 
// For s = "2[b3[a]]", the output should be decodeString(s) = "baaabaaa"


const decodeString = (s) => {
  let arr = s.split('[');
  let tempLetters = [];
  let tempNums = '';
  let letters = [];

  for(let i = arr.length-1; i >= 0; i--){  
    if(arr[i].match(/[0-9]/g)){
      tempNums =  arr[i].match(/[0-9]/g) ? arr[i].match(/[0-9]/g).join('') : arr[i];
    }
    if(tempLetters.length > 0 && tempNums.length > 0){
      let j = tempNums
      while(j > 0){
        letters.unshift(tempLetters.join(''))
        j--
      }
      tempNums = "";
      tempLetters = letters
    }
    if (arr[i].match(/[a-z]/gi)){
      tempLetters.unshift(arr[i].match(/[a-z]/gi).join(''));
      letters =[];
    }
  }
  return letters.join('')
}