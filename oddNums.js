/* Given an array of numbers, "filterOddElements" returns an array containing only the odd numbers of the given array. 
If the input array contains no odd numbered elements, your function should return an empty array. */

// 1 input - array of numbers
function filterOddElements(arrayNums) {
    
    //creating a result variable - accumulator
    var oddElements = [];
    
    //iterating through the input array using a for loop
    for (var i = 0; i < arrayNums.length; i++) {
        
        //checking for all odd numbers in the input array
        if (arrayNums[i] % 2 === 1) {
            //adding the odd numbers to the result variable/accumulator
            oddElements.push(arrayNums[i]);
        }
    }
    //returning the array containing only the odd numbers
    return oddElements;
}

// testing the function by calling it

var output = filterOddElements([1, 2, 3, 4, 5]);
console.log(output); // --> [1, 3, 5]