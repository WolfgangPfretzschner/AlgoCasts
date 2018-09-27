// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
   const matches = str.match(/[aeiou]/gi)
   return matches ? matches.length : 0
}

module.exports = vowels;

// function vowels(str) {
//    const vls = ["a","e","i","o","u"]
//    let counter = 0 
//    for (let i = 0; i < str.length; i++){
//       if(vls.includes(str.toLowerCase().charAt(i))){
//          counter++
//       }
//    }

//    return counter
// }