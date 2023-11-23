var header = document.getElementById("header");
var navigation = document.getElementById("navigation_header");
var content = document.getElementById("content");
var showSidebar = false;

function btnMenu() {

    showSidebar = !showSidebar;
    if(showSidebar) {
        navigation.style.marginLeft = "-10vw";
        navigation.style.animationName = "showSidebar";
    
    } else {
        navigation.style.marginLeft = "-100vw";
        navigation.style.animationName = "";
    }

}


const buttonMenu = document.getElementById("btn_icons");
buttonMenu.addEventListener("click", btnMenu);

const buttonClose = document.getElementById("btn_icons_navigation");
buttonClose.addEventListener("click", btnMenu);

/* let count = 1;
document.getElementById("radio1").checked = true;

setInterval(function() {

    nextImage();

}, 2000);

function nextImage() {
    count++;
    if(count > 4) {
        count = 1;
    }

    document.getElementById("radio" + count).checked = true;
} */

/* código para inserir uma transição na página (preciso revisar)

document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        document.querySelector('.content').classList.add('show');
    }, 10);
}); 

window.addEventListener("scroll", function() {
    var element = document.querySelector('.content');
    var positionFromTop = element.getBoundingClientRect().top;

    if(positionFromTop - window.innerHeight < 0) {
        element.classList.add('show');
    }
}); */