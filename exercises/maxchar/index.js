// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
   let map = {}
   let maxChar = ''
   let maxApp = 0

   for (let char of str){
      
      map[char] = map[char] +1 || 1

      // map[i] ? map[i] += 1 : map[i] = 1

      // if(map[char]){
      //    map[char]++
      // }else{
      //    map[char] = 1
      // }
   }
   for(let key in map){
      if (map[key] > maxApp){
         maxChar = key
         maxApp = map[key]
      }
   }

   return maxChar
}

module.exports = maxChar;
