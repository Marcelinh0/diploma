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


    var searchNameFlag = 0 
    var sortFlag = 0
    var categoryFlag = 0

function searchNameReveal() {

    var searchName = document.querySelector('#search-name')

    if(searchNameFlag == 0){
        searchName.style = "transform: translate(1vw,-220%);"
        searchNameFlag = 1
    }else{
        searchName.removeAttribute("style")
        searchNameFlag = 0
    }
}

function sortReveal() {
    var sort = document.querySelector('#sort')

    if(sortFlag == 0){
        sort.style = "transform: translate(1vw,-110%);"
        sortSelect = 
        sortFlag = 1
    }else{
        sort.removeAttribute("style")
        sortFlag = 0
    }
}

function categoryReveal() {
    var category = document.querySelector('#category')

    if(categoryFlag == 0){
        category.style = "transform: translateX(1vw)"
        categoryFlag = 1
    }else{
        category.removeAttribute("style")
        categoryFlag = 0
    }
}
