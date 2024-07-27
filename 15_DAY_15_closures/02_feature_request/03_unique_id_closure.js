//  Write a script that generates unique IDs using a closure to keep track of the last generated ID.


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