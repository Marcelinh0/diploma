    var menuFlag = 0    
   

function menuReveal() {
    var menu = document.querySelector('.menu')

    if(menuFlag == 0){
        menu.style = "transform: translateX(0);"
        menuFlag = 1;
    }else{
        menu.style = "transform: translateX(110%);"
        menuFlag = 0;
    }

}


    var cityFlag = 0 
    var sortFlag = 0
    var categoryFlag = 0

function cityReveal() {
    var city = document.querySelector('#city')
    var cityImg = document.querySelector('.city-img')
    var cityInput = document.querySelector('#city-search2')

    if(cityFlag == 0){
        cityImg.style = "display: none"
        city.style = "border-radius: 25px; width: 300px; height: 2vw;"
        cityInput.style = "display: block"
        cityFlag = 1
    }else{
        city.removeAttribute("style")
        cityImg.removeAttribute("style")
        cityInput.removeAttribute("style")
        cityFlag = 0
    }
}

function sortReveal() {
    var sort = document.querySelector('#sort')

    if(cityFlag == 0){
        sort.style = "border-radius: 25px; width: 300px; height: 300px"
        cityFlag = 1
    }else{
        sort.removeAttribute("style")
        cityFlag = 0
    }
}

function categoryReveal() {
    var category = document.querySelector('#category')

    if(cityFlag == 0){
        category.style = "border-radius: 25px; width: 300px; height: 300px"
        cityFlag = 1
    }else{
        category.removeAttribute("style")
        cityFlag = 0
    }
}
