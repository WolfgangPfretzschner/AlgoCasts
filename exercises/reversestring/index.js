// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
   return str.split('').reduce( (rev, char) =>
      char + rev
   , '')
}

module.exports = reverse;


// function reverse(str) {
//    return  str.split('').reverse().join('')
// }

// function reverse(str) {
//    let rev = ''

//    for (let character of str){
//       rev = character + rev
//    }
//    return rev
// }


function reverse(str){
   let newString = ''
   for(let i = str.length -1; i >= 0 ; i--){
     newString += str[i]
   }
   return newString
 }
 reverse("wolfgangPfretzschner")