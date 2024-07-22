//  Create a script that demonstrates the creation and manipulation of a two-dimensional array.

let array_2d = []

for (let i = 0; i < 3; i++){
  array_2d[i]= []
  for(let j=0; j<3; j++){
    array_2d[i][j] = Number(prompt(`enter the value for ${i} ${j}`))
  }
}

let manupulate_array = array_2d.map(function(e){
  return e.filter(function(e){
    return e%2===0
  })
})

console.log(manupulate_array)