
let num = prompt("enter a number for which you want to find the factorial")
let store =1

num= Number(num)

if(isNaN(num)){
  alert("pleaase enter a valid number")
} else{
  do{
    store = store*num*(num-1)
    num=num-2
  } while(num>=1)
console.log(store)
}