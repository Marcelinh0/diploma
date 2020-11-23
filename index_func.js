    var menuFlag = 0

function menuReveal() {
    var menu = document.querySelector('.menu')
    var hero = document.querySelector('.hero')
    var gap = document.querySelector('.gap')
    var mainSection = document.querySelector('#main-section')

    if(menuFlag == 0){
        menu.style = "transform: translateX(0);"
        menuFlag = 1;
    }else{
        menu.style = "transform: translateX(110%);"
        menuFlag = 0;
    }

}


function cityReveal() {

}

function sortReveal() {

}

function categoryReveal() {

}
