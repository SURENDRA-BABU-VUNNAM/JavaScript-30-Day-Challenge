// Task 3: Write a script that includes a try-catch block and a finally block. Log messages in the try, catch, and finally blocks to observe the execution flow.

let demo = function(a,b) {
  if (b===0){
    throw Error("this is mathematical undefinied error ")
  } else {
    return a/b
  }
} 

let demo_2 = function(){
    let json = '{"name":"bittu","age":}'
    let obj = JSON.parse(json)
  }


try{
  console.log("entering the try block")
  console.log(demo(5,5))
  demo_2()
  console.log("exiting the try block")
} catch(error){
  console.log("entering the catch block")
  console.log(error.message)
  console.log("exiting the catch block")
} finally {
  console.log("both try and catch block has been done")
}