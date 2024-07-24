// Create a script that defines and throws custom errors, handling them with try-catch blocks.

class custom_error extends Error {
  constructor(message) {
    super(message);
    this.name = " custom try catch error ";
  }
}

try {
  throw new Error ("this is custom error created using classes")
} catch (error){
  console.log(error.message)
}