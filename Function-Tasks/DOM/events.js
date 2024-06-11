function setupButtonClickListener() {
    let button = document.getElementById("myButton");
    button.addEventListener("click", function () {
        console.log("Button clicked!");
    });


    var myDiv = document.getElementById("myDiv");
    myDiv.addEventListener("mouseover", function () {
        myDiv.style.color = "red";
    });


    var myInput = document.getElementById("myInput");
    myInput.addEventListener("input", function () {
        console.log(myInput.value);
    });



    var toggleButton = document.getElementById("toggleButton");
    var toggleDiv = document.getElementById("toggleDiv");
    toggleButton.addEventListener("click", function () {
        if (toggleDiv.style.display === "none") {
            toggleDiv.style.display = "block";
        } else {
            toggleDiv.style.display = "none";
        }
    });
}
document.addEventListener("DOMContentLoaded", setupButtonClickListener);

