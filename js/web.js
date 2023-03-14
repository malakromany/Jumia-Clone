document.getElementById("searchButton").onclick=function (evt) {
    evt.preventDefault();
    var inputVal = document.getElementById("searchInput").value;
    api_search(inputVal);
}

var currPage = api_currentpage()

if(currPage == "home"){
    api_loadPage("aside-slider");
    
    api_getCategories();
}else{
    api_loadPage("content");
}

if(currPage == "home"){
    api_getProducts()
    load_js("js/slider.js")
}else if(currPage == "singleproduct"){
    load_css("css/singleproduct.css")
    load_js("js/singleproduct.js")
}else if (currPage == "cart"){
    load_js("js/cart.js")
}else if (currPage == "login"){
    load_css("css/login.css")
    load_js("js/login.js")
}

setCartCount();