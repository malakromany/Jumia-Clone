var args = api_getUriArgs()

var product_id = args["id"]


var savedCookies = document.cookie

var cookiesArr = savedCookies.split(";")
var obj = {}
for (var i = 0; i < cookiesArr.length; i++) {
    var arr = cookiesArr[i].split("=")
    obj[arr[0].trim()] = arr[1]
}

var emailFromCookie = obj.email
var passwordFromCookie = obj.password

if (emailFromCookie && passwordFromCookie) {
    function api_getSingleProducts() {

        var xhr = new XMLHttpRequest();
        xhr.open("GET", `https://fakestoreapi.com/products/${product_id}`);
        xhr.send();

        xhr.addEventListener("readystatechange", function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                var product = JSON.parse(xhr.response);
                document.getElementById('image').setAttribute('src', product.image);
                document.getElementsByTagName("h1")[0].innerHTML = product.title;
                document.getElementById("price").textContent = product.price;
                document.getElementById("price").style.display = "inline-block"
                document.getElementById("description").innerHTML = product.description;
                var numberrating = product.rating.rate;
                numberrating = Math.round(numberrating);

                for (var i = 0; i < numberrating; i++) {
                    document.getElementById("rating").innerHTML += '<i class="fa-sharp fa-solid fa-star"></i>'
                }
                for (var i = 0; i < 5 - numberrating; i++) {
                    document.getElementById("rating").innerHTML += '<i class="fa-regular fa-star"></i>'
                }
            }
        })
    }


    api_getSingleProducts()
} else {
    alert("You must log in to see product information..")
    location.href = `${api_getDomain()}?page=login`
}