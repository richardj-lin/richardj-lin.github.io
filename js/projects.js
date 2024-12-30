var menuCount = 1;
function menuOpen() {
    menuCount++;
    if (menuCount%2 == 1) {
        document.getElementById("menu-links").style = "right: -75%";
        document.getElementById("menu-burger-1").style = "background: var(--darknavy); transform: rotate(0deg);";
        document.getElementById("menu-burger-2").style = "background: var(--darknavy); transform: rotate(-0deg); margin-top: 15px;";
        document.getElementById("menu-burger-3").style = "opacity: 1; height: 20px;";
        setTimeout(() => {
            document.getElementById("menu").style = "z-index: 0";
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
