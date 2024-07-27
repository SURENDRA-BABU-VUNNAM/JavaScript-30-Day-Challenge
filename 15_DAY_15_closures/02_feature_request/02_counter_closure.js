//  Create a script that uses a closure to maintain a private counter with increment and get functions.
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