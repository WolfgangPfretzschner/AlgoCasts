// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
   let mapA = charMapMaker(stringA)
   let mapB = charMapMaker(stringB)

   if(Object.keys(mapA).length !==  Object.keys(mapB).length){
      return false
   }
   for(let i in mapA){
      if(mapA[i] !== mapB[i]){
         return false
      }
   }
   return true

   

}

function charMapMaker(str){
   const charMap = {}

   for (let char of str.replace(/[^\w]/g , '').toLowerCase()){
      charMap[char] = charMap[char] +1 || 1
   }
   return charMap
}

module.exports = anagrams;


// function anagrams(stringA, stringB) {
//    let cleanStringA = cleanString(stringA)
//    let cleanStringB = cleanString(stringB)
//    return cleanStringA === cleanStringB
// }

// function cleanString(str) {
//    return str .replace(/[^\w]/g, "") .toLowerCase() .split("") .sort() .join("");
// }
