var imgs = document.querySelectorAll("#imgSlider img");
var i = 0;
var intervalShow;
var firstImgSRC = imgs[0].src


function move(dir = "next") {
    (dir == "next") ? i++ : i--;
    if (i >= imgs.length) {
        i = 0;
        imgs[0].src = firstImgSRC;
    }

    if (i < 0) {
        i = imgs.length - 1;
    }

    imgs[0].src = imgs[i].src;
}

document.getElementById("next").onclick = function (evt) {
    evt.preventDefault();
    clearInterval(intervalShow);
    move()
}

document.getElementById("slider").onmouseout = function () {
    clearInterval(intervalShow);
    intervalShow = setInterval(() => {
        move();
    }, 2000);
}

document.getElementById("slider").onmouseover = function () {
    clearInterval(intervalShow);
}

document.getElementById("previous").onclick = function (evt) {
    evt.preventDefault();
    clearInterval(intervalShow);
    move("previous")
}

intervalShow = setInterval(() => {
    move();
}, 2000);


