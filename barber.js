
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