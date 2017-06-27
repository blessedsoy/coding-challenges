// Question 3 -- getClosingParen(sentence, openingParenIndex): 
// "Sometimes (when I nest them (my parentheticals) too much (like this (and this))) they get confusing." 
// Write a function that, given a sentence like the one above, 
// along with the position of an opening parenthesis, finds the corresponding closing parenthesis. 
// Example: if the example string above is input with the number 10 (position of the first parenthesis), 
// the output should be 79 (position of the last parenthesis).

const getClosingParen = (sentence, openingParenIndex) => {
  let opening = [];
  let closing = [];
  for (let i in sentence){
    if(sentence[i] === '('){
      opening.push(parseInt(i))
    }
    else if(sentence[i] === ')'){
      closing.push(parseInt(i))
    }
  }
  const position = opening.indexOf(openingParenIndex)
  return closing[closing.length - 1 - position]
}