// Task 6: Use closures to create a simple module for managing a collection of items. Implement methods to add, remove, and list

export default function outer (){
  let collection = [];

  return {
    list : function(){
      collection.forEach((item,index)=>(console.log(index+1,item)))
    },
    add : function (item){
      collection.push(item)
    },
    remove : function (item){
      let store = collection.indexOf(item)
      if(store !== -1){
        collection.splice(store,1)
      }
    }
  }
}


