//a
function doubleNumber(number) {
    return number*2;
}

//b
function squareNumber(number) {
    return number**number;
}

//c
function incrementNumber(number) {
    return number+1;
}

//d
function performOperation(num, operation) {
    return operation(num);
}

//e
console.log(performOperation(5,8,doubleNumber))
console.log(performOperation(5,8,squareNumber))
console.log(performOperation(5,8,incrementNumber))
    