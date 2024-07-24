// Write a script that demonstrates basic error handling using try-catch and finally blocks.

try {
  throw new Error ("this is error")
} catch (error) {
  console.log(error.message)
} finally {
  console.log("this is finished")
}