//Create a function in that takes an array of numbers and return both the minimum(lowest) and maximum(highest) numbers, in that order.



 
function find_min_max(array) {
const min = array[0]
const max = array[array.length-1]
return (`Minimum: ${min}, Maximum: ${max}`) // Minimum: 55, Maximum: 25
}

console.log(find_min_max([55,20,-5,-7,5,25]))