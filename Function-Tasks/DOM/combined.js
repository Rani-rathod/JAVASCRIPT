// //a
function setupFormSubmitListener() {

    // document.getElementById("myForm").addEventListener("submit", function (event) {
    //     event.preventDefault();
    //     console.log("Form submitted!");
    // });



    // //b
    // // let mouseDiv = document.getElementById("mouseDiv");
    // // let coordinates = document.getElementById("coordinates");
    // // mouseDiv.addEventListener("mousemove", function(event) {

    // // });



    // //c
    // let paragraphs = document.querySelectorAll("p");
    // function handleMouseOver() {
    //     this.style.color = "red";
    // }
    // function handleMouseOut() {
    //     this.style.color = "";
    // }
    // paragraphs.forEach(function(paragraph) {
    //     paragraph.addEventListener("mouseover", handleMouseOver);
    //     paragraph.addEventListener("mouseout", handleMouseOut);
    // });



    // //d
    // let divs=document.querySelectorAll("div");
    // function toggleBackgroundColor(){
    //     if (this.style.backgroundColor === "red") {
    //         this.style.backgroundColor = "white";
    //     } else {
    //         this.style.backgroundColor = "red";
    //     }
    // }
    // divs.forEach(function(div) {
    //     div.addEventListener("click", toggleBackgroundColor);
    // });



    //e
    var page= document.getElementById("colorDiv");
        
    var redbut=document.getElementById('Red');
    redbut.onclick=function(){
        page.style.backgroundColor = "red";
    }
    var greenbut=document.getElementById("Green");
    greenbut.onclick=function(){
        page.style.backgroundColor="green"
    }
    var pinkbut=document.getElementById("Pink");
    pinkbut.onclick=function(){
        page.style.backgroundColor="pink"
    }
    var blubut=document.getElementById("Blue");
    blubut.onclick=function(){
        page.style.backgroundColor="blue"
    }
}

	document.getElementById('small').addEventListener('click', function() {
	    changeFontSize('small');
	});
	document.getElementById('medium').addEventListener('click', function() {
	    changeFontSize('medium');
	});
	document.getElementById('large').addEventListener('click', function() {
	    changeFontSize('large');
	});
	document.getElementById('xlarge').addEventListener('click', function() {
	    changeFontSize('xlarge');
	});

	function changeFontSize(size) {
	    const content = document.getElementById('fontDiv');
	    if (size === 'small') {
		content.style.fontSize = '12px';
	    } else if (size === 'medium') {
		content.style.fontSize = '16px';
	    } else if (size === 'large') {
		content.style.fontSize = '20px';
	    } else if (size === 'xlarge') {
		content.style.fontSize = '24px';
	    }
	}

document.addEventListener("DOMContentLoaded", setupFormSubmitListener);
