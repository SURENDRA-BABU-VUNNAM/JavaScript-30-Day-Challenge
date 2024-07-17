// Write a script that includes a higher-order function to apply a given function multiple times.

function hello (v) {
  console.log("hello world",v)
}

function higher (fun , value){
  for (i=1; i<=value; i++){
    fun(i)
  }
}

higher(hello, 12)
