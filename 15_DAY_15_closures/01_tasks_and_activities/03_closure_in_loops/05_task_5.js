// Task 5:Write a loop that creates an array of functions. Each function should log its index when called. Use a closure to ensure each function logs the correct index.

function outer (){
  let func = {}
  let arr = []
  for(let i = 0; i < 5; i++){
    func[`func${i}`] = function (){
      console.log(i+1)
    }
  }
  return {
    get_arr_index : function(){
      arr= Object.values(func).map(function(item){item()})
      return arr
    },
  }
}

let index_generator = outer()

index_generator.get_arr_index()

