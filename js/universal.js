window.transitionToPage = function(href) {
    document.querySelector('body').style.opacity = 0
    setTimeout(function() { 
        window.location.href = href
    }, 500)
}
document.addEventListener('DOMContentLoaded', function(event) {
    document.querySelector('body').style.opacity = 1
})

let width = window.screen.width;
if (width > 1024) {
    setInterval(function () {
    if (window.scrollY <= 500) {
        document.getElementById("overlay-menu").style = "opacity: 0; margin-top: -50px;";
    }
    else {
        document.getElementById("overlay-menu").style = "opacity: 100; margin-top: 15px;";
    }
}, 10)
}


