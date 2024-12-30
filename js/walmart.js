var menuCount = 1;
function menuOpen() {
    menuCount++;
    if (menuCount % 2 == 1) {
        document.getElementById("menu-links").style = "right: -75%";
        document.getElementById("menu-burger-1").style = "background: var(--darknavy); transform: rotate(0deg);";
        document.getElementById("menu-burger-2").style = "background: var(--darknavy); transform: rotate(-0deg); margin-top: 15px;";
        document.getElementById("menu-burger-3").style = "opacity: 1; height: 20px;";
        setTimeout(() => {
            document.getElementById("menu").style = "z-index: 0";
            document.getElementById("menu-burger").style = "box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);";
        }, 300);
    }
    else {
        document.getElementById("menu-links").style = "right: 0px";
        document.getElementById("menu-burger-1").style = "background: var(--coral); transform: rotate(45deg);";
        document.getElementById("menu-burger-2").style = "background: var(--coral); transform: rotate(-45deg); margin-top: -20px;";
        document.getElementById("menu-burger-3").style = "opacity: 0; height: 0;";
        document.getElementById("menu").style = "z-index: 200";
    }
};

if (window.screen.width < 1024) {
    setInterval(function () {
        if (window.scrollY <= 500) {
            document.getElementById("menu-burger").style = "box-shadow: none;";
        }
        else {
            if (menuCount % 2 == 0){
                document.getElementById("menu-burger").style = "box-shadow: none;";
            }
            else {
                document.getElementById("menu-burger").style = "box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);";
            }
            
        }
}, 10)
}
