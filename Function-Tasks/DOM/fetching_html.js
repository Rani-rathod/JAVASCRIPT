let myDiv = document.getElementById('myDiv');
console.log(myDiv.textContent);

let myClassElements = document.getElementsByClassName('myClass');
for (let i = 0; i < myClassElements.length; i++) {
    console.log(myClassElements[i].textContent);
}

let pElements = document.getElementsByTagName('p');
for (let i = 0; i < pElements.length; i++) {
    console.log(pElements[i].textContent);
}
// The querySelector() method returns the first child element that matches a specified CSS selector(s) 
// of an element.
let anotherDiv = document.querySelector('#anotherDiv');
console.log(anotherDiv);

let anotherClass = document.querySelector('.anotherClass');
console.log(anotherClass)
