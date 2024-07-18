//  Create a script that demonstrates the creation and manipulation of a two-dimensional array.

let array_2d = [
  [1,2,3],
  [4,5,6],
  [7,8,9],
]

let manupulate_array = array_2d.map(function(e){
  return e.filter(function(e){
    return e%2===0
  })
})

console.log(manupulate_array)