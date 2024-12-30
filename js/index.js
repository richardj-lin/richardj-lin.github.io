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

document.getElementById("linkedin").onmousedown = function() {
    window.open('https://www.linkedin.com/in/richardlin4375/', '_blank');
}
document.getElementById("email").onmouseover = function() {
    document.getElementById("email-copy").style="opacity: 100; margin-top: -30px;";
    document.getElementById("email-copy").innerHTML = "rlin@unc.edu<br>[Click to copy]";
};

document.getElementById("email").onmouseleave = function() {
    let width = window.screen.width;
    if (width > 1024) {
        document.getElementById("email-copy").style="color: var(--text); opacity: 0; margin-top: -50px;";
    }
    else {
        document.getElementById("email-copy").style="color: var(--text); opacity: 0; margin-top: -400px;";
    }
}
document.getElementById("email").onmousedown = function() {
    navigator.clipboard.writeText("rlin@unc.edu");
    let width = window.screen.width;
    if (width > 1024) {
        document.getElementById("email-copy").innerHTML = "rlin@unc.edu<br>[Copied!]";
        document.getElementById("email-copy").style="color: var(--check); opacity: 100; margin-top: -30px;";
    }
    else {
        document.getElementById("email-copy").innerHTML = "rlin@unc.edu [Copied!]";
        document.getElementById("email-copy").style="color: var(--check); opacity: 100; margin-top: -350px;";
    }
    
};

