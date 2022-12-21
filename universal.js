AOS.init()
function disableScrolling(){
    var x=window.scrollX;
    var y=window.scrollY;
    window.onscroll=function(){window.scrollTo(x, y);};
}

function enableScrolling(){
    window.onscroll=function(){};
}

window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}

window.onload = function(){document.getElementById("bg").style = "opacity: 0";};

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

document.getElementById("back").onclick = function() {
    document.getElementById("bg").style = "opacity: 1";

    sleep(1000).then(() => {
        location.href = "./index.html";
    })

}

document.getElementById("scrolltop").onclick = function() {
    window.scrollTo({top: 0, behavior: 'smooth'});
}

var pagemain = document.getElementById("pagemain");
setInterval(function () {
    if (window.scrollY > 100) {
        pagemain.style = "width: 70%; height: 400px;"; 
    }
    if (window.scrollY < 100) {
        pagemain.style = "width: 100%; height: 55vh;"; 
    }
}, 10)

