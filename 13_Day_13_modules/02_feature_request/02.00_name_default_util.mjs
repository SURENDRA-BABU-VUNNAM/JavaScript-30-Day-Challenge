//  Create a script demonstrating both named and default exports and their usage.

export default function just_log (name) {
  console.log(`loged in as ${name}`)
}

export function just_log_2 (){
  console.log ("not a default export 1")
}

export function just_log_3 (){
  console.log ("not a default export 2")
}
