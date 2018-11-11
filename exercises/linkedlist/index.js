
// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

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
      let node = this.head
      return node
   }

   getLast(){
      let node = this.head
      if(!this.head){
         return null
      }
      while(node){
         if(!node.next){
            return node
         }
         node = node.next
      }
   }
   clear(){
      this.head = null
   }

   removeFirst(){
      if(!this.head){
         return
      }
      this.head = this.head.next
   }
   removeLastt(){
      let node = this.head
      if(!this.head){
         return
      }
      while(node){

         node = node.next
      }
   }

   
}

module.exports = { Node, LinkedList };
