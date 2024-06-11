let arr = [1, 2, 3, 4, 5];

//ForEach: Write a function called forEachArray that takes an array and a callback function as arguments. 
//The forEachArray function should apply the callback function to each element of the array but does not 
//return anything. Note: You cannot use the inbuilt forEach function.
    
function forEachArray(array, callback) {
    for (let i=0; i<array.length; i++){
        callback(array[i], i, array);
    }
}
function newElement(element, index, array){
    console.log(`element ${element} index ${index} array ${array}`);
}
forEachArray(arr,newElement);


//Map: Write a function called mapArray that takes an array and a callback function as arguments.
//The mapArray function should apply the callback function to each element of the array and return a new array 
//containing the transformed elements. Note: You cannot use the inbuilt map function.

function mapArray(array, callback){
    let newMapArray=[];
    for (let i=0; i<array.length; i++) {
        newMapArray.push(callback(array[i], i,array));
    }
    return newMapArray;
}
function double(element){
    return element*2;
};
console.log(mapArray(arr, double))


//Filter: Write a function called filterArray that takes an array and a callback function as arguments. 
//The filterArray function should apply the callback function to each element of the array and return a new array 
//containing only the elements for which the callback function returns true. Note: You cannot use the inbuilt filter function.

function filterArray(array, callback) {
    let filterArr=[];
    for (let i=0; i<array.length; i++) {
        if (callback(array[i], i, array)) {
            filterArr.push(array[i]);
        }
    }
    return filterArr;
}
function Even(element){
    return element%2===0;
}
console.log(filterArray(arr,Even))

