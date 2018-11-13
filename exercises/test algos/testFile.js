class Node {
   constructor(data, next = null) {
      this.data = data
      this.next = next
   }
}

class LinkedList {
   constructor() {
      this.head = null
   }

   insertFirst(data) {
      this.head = new Node(data, this.head)
   }
   size() {
      let counter = 0
      let node = this.head

      while (node) {
         counter++
         node = node.next
      }
      return counter
   }

   getFirst() {
      let node = this.head.data
      return node
   }
}

const nodeOne = new Node(5)
const list = new LinkedList()
// list.head = nodeOne
// list.insertFirst(15)
// list.insertFirst(99)
// list.getFirst()

let str = "Hello world How are you"

function multy(str, sep) {
   let regex = new RegExp(`^${sep}`)
   let res = str.replace(/[A-Z]/g, (letter) => {
      return sep + letter.toLowerCase()
   })
   return res.replace(regex, '')
}

// multy(str," ")

const camel = (str) => {
   return str.replace(/\s[A-Za-z]/g, (letter) => letter[1].toUpperCase() + letter[0])
}

// camel(str)

let str1 = "HelloWorldHowAreYou"
function recursive01(str) {
   let rev = []
   let res = str1.split("")
   for (let i = 0; i <= res.length - 1; i++) {

      res.unshift(res.pop())
      rev.push(res[0])
   }
   return rev.join('')
}

// recursive01(str1)



function reverse(str) {
   return str.split('').reverse().join('')
}
// reverse(str1)

function reverse1(str) {
   let rev = ""
   for (let i = str.length; i >= 0; i--) {
      rev += str[i]
   }
   return rev
}
// reverse1(str1)

function upToLowVise(str) {
   return str.replace(/([A-Z]+)|([a-z]+)/g, (match, p1, p2) => {
      return p1 ? match.toLowerCase() : match.toUpperCase()
   })
}
// upToLowVise("aBcDeF")

function pal(str) {
   return str.split('').every((char, i) => {
      return char == str[str.length - i - 1]
   })
}
// pal("abnnba")

function cleaner(str) {

   let mapper = {}
   for (let i of str.replace(/[^\w]/g, '').toLowerCase()) {
      mapper[i] = mapper[i] + 1 || 1
   }
   return mapper

}

function anagram(strA, strB) {
   strA = cleaner(strA)
   strB = cleaner(strB)

   if (Object.keys(strA).length !== Object.keys(strB).length) {
      return false
   }

   for (let i in strA) {
      if (strA[i] !== strB[i]) {
         return false
      }
   }
   return true



}
// anagram("poota..to","oo . //..ptota")

function capitalFirst(str) {
   return str.replace(/\w\S*/g, (letters) => {
      return letters.charAt(0).toUpperCase() + letters.substring(1).toLowerCase()
   })
}

// capitalFirst("wolfgang ist ein toller typ")

function intRev(n) {
   const reversed = n.toString().split('').reverse().join('')
   return parseInt(reversed) * Math.sign(n)
}
// intRev(-876)

function maxChar(str) {
   let mapper = {}

   for (let i of str.replace(/\s/g, "").toUpperCase()) {
      mapper[i] = mapper[i] + 1 || 1
   }
   let sortable = []
   for (let letter in mapper) {
      sortable.push([letter, mapper[letter]])
   }
   sortable.sort((a, b) => {
      return a[1] - b[1]
   })
   console.log(sortable)
   return "the letter " + sortable[sortable.length - 1][0] + " appears " + sortable[sortable.length - 1][1] + " times."
}

// maxChar('wolfgggggggang hallllllo')

function chunk(arr, size) {
   let chunked = []
   let index = 0
   for (let i = arr.length; i > 0; i -= size) {
      chunked.push(arr.slice(index, index + size))
      index += size
   }
   return chunked
}

// chunk([1,2,3,4,5,6,7,8,9,10,11], 5)

function chuncked2(arr, size) {
   let chunked = []
   for (let i of arr) {
      const last = chunked[chunked.length - 1]
      if (!last || last.length === size) {
         chunked.push([i])
      } else {
         last.push(i)
      }

   }
   return chunked
}

// chuncked2([1,2,3,4,5,6,7,8,9,10], 3)

function findFirst(A) {
   A = A.sort()

   for (let i = 0; i < A.length; i++) {
      console.log(A[i])

      if (A[i] > 0 && A[i + 1] === undefined) {
         return A[i] + 1
      }
      if (A[i] < 0 && A[i + 1] === undefined) {
         return 1
      }
      if (A[i + 1] > 0 && A[i + 1] - A[i] > 1) {
         return A[i] + 1
      }

   }
}

// findFirst([-3,-1,-2,-2,3,4,7,8])
// fin
let arr = [2, 2, 3, 4, 3, 2, 1, 1, 3, 4, 7]
function findHillsAndVallies(arr) {
   let lots = []

   for (let i = 1; i < arr.length - 2; i++) {
      let templot = []
      if (arr[i] <  ) {

      }
   }
   console.log(lots)
}
// findHillsAndVallies(arr)