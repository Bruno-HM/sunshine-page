var menuButton = document.getElementById("menu-button");
var menu = document.getElementById("menu");
var backButton = document.getElementById("back-button");
var header = document.getElementById("main-header")

window.onscroll = function() {
    scrollFunction();
    
};

menuButton.addEventListener("click", function() {
    if (menu.style.display === "block") {
        menu.style.display = "none"
    } else {
        menu.style.display = "block"
    }
})

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        backButton.style.display = "block";
    } else {
        backButton.style.display = "none";
    }
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        backButton.style.right = "2rem";
    } else {
        backButton.style.right = "-3rem";
    }
   
}

function fixFunction() {
    if (document.body.scrollTop > 90 || document.documentElement.scrollTop > 90) {
        header.style.position = "fixed";
    } else if (document.body.scrollTop < 90 || document.documentElement.scrollTop < 90){
        header.style.position = "none";
    }
        
}


function toTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

