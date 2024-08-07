// Write a script that includes a function to solve the "Add Two Numbers" problem and logs the sum as a linked list.

function add_two_numbers(list_1, list_2) {
    let store_list_1 = []
    let store_list_2 = []
    let result_store = []
    function push_data_array(list, array) {
        let current = list.head
        while (current) {
            array.push(current.data)
            current = current.next
        }   
        return array
    }

    store_list_1 = push_data_array(list_1, store_list_1).reverse()
    store_list_2 = push_data_array(list_2, store_list_2).reverse()

    let max_length = Math.max(store_list_1, store_list_2)
    
    for (let i = 0; i <= (max_length - 1); i++){
        result_store.push((store_list_1[i]|| 0)+store_list_2[i]||0)
    }

    let added_list = new Linked_List()
    
    for (let i = 0; i <= (result_store.length -1);i++){
        added_list.add_data(result_store[i])
    }
    return added_list
}