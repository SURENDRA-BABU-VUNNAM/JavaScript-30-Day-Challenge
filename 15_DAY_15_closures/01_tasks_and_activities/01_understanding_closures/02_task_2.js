// Task 2: Create a closure that maintains a private counter. Implement functions to increment and get the current value of the counter.

function outer() {
  let count = 0;
  return {
    increment: function (){
      count++
    },
    get_increment : function() {
      return count
    },
    get_multiple : function(){
      return count*100
    }
  }
}



let counter = outer()
console.log(counter.get_increment())
console.log("before loop")
for(let i = 0; i < 10; i++){
  counter.increment()
}
console.log("after loop")
console.log(counter.get_increment())
console.log(counter.get_multiple())