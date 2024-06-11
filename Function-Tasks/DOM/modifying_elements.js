function changeParagraphText(){
    let paragraph=document.getElementById("myParagraph");
    paragraph.textContent="New Text";


    let divElement=document.getElementById("text-div");
    divElement.innerHTML="<b>New Text</b>";

    
    document.getElementById("myparagraph").style.color = "red";


    document.getElementById("myLink").href = "https://www.facebook.com/";
    

    document.getElementById("myDiv").classList.add("myClass");


}
document.addEventListener("DOMContentLoaded",changeParagraphText);


// function changeDivContent(){
//     let divElement=document.getElementById("text-div");
//     divElement.innerHTML="<b>New Text</b>";
// }
// document.addEventListener("DOMContentLoaded",changeDivContent);


// function changeColor() {
//     document.getElementById("myparagraph").style.color = "red";
// }
// document.addEventListener("DOMContentLoaded",changeColor)


// function changeHref() {
//     document.getElementById("myLink").href = "https://www.facebook.com/";
// }
// document.addEventListener("DOMContentLoaded",changeHref)


// function addClass() {
//     document.getElementById("myDiv").classList.add("myClass");
// }
// document.addEventListener("DOMContentLoaded",addClass)

