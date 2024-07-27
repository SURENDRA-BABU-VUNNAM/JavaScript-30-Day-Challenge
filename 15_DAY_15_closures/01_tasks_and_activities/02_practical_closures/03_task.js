// Task 3: Write a function that generates unique IDs. Use a closure to keep track of the last generated ID and increment it with each call.

function outer (){
  let id = 0
  let track = []
  return {
    generate_id :function(){
      id++
      track.push(id)
    },
    last_gen_id : function(){
      return track[track.length - 1]
    },
    total : function (){
      return track
    }
  }
}

let id_generator = outer()


  id_generator.generate_id()
  id_generator.generate_id()
console.log(id_generator.total())
