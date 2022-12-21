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