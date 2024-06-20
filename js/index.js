var offset;
let width = window.screen.width;
if (width >= 1024) {
    offset = 100;
}
else {
    offset=300;
    
}
function scrollIndex() {
    window.scrollTo({top: 0, behavior: 'smooth'});
}
function scrollAbout() {
    var topAbout = document.getElementById("about").offsetTop - offset;
    window.scrollTo({top: topAbout, behavior: 'smooth'});
}
function scrollWork() {
    var topAbout = document.getElementById("work").offsetTop - offset;
    window.scrollTo({top: topAbout, behavior: 'smooth'});
}

document.getElementById("email").onmouseover = function() {
    document.getElementById("emails").style = "color: var(--text)";
    document.getElementById("emails").innerHTML = "rlin@unc.edu  [Click to Copy]";

}
document.getElementById("email").onmousedown = function() {
    navigator.clipboard.writeText("rlin@unc.edu");
    document.getElementById("emails").style = "color: var(--check)";
    document.getElementById("emails").innerHTML = "rlin@unc.edu  [Copied!]";
}
document.getElementById("linkedin").onmousedown = function() {
    window.open('https://www.linkedin.com/in/richardlin4375/', '_blank');
}


document.getElementById("link1").onmouseover = function() {
    document.getElementById("linktext1").style="background-position: top left 100%;";
    document.getElementById("linktext2").style="background-position: top right 100%;";
    document.getElementById("linktext3").style="background-position: top right 100%;";
    document.getElementById("linktext4").style="background-position: top right 100%;";
    document.getElementById("linktext5").style="background-position: top right 100%;";
    document.getElementById("work-img").src = "https://youthhealthymind.com/images/unsplash-hike.jpg";
};
document.getElementById("link2").onmouseover = function() {
    document.getElementById("linktext1").style="background-position: top right 100%;";
    document.getElementById("linktext2").style="background-position: top left 100%;";
    document.getElementById("linktext3").style="background-position: top right 100%;";
    document.getElementById("linktext4").style="background-position: top right 100%;";
    document.getElementById("linktext5").style="background-position: top right 100%;";
    document.getElementById("work-img").src = "https://cansforkidsnc.org/images/canholding.jpg";
};
document.getElementById("link3").onmouseover = function() {
    document.getElementById("linktext1").style="background-position: top right 100%;";
    document.getElementById("linktext2").style="background-position: top right 100%;";
    document.getElementById("linktext3").style="background-position: top left 100%;";
    document.getElementById("linktext4").style="background-position: top right 100%;";
    document.getElementById("linktext5").style="background-position: top right 100%;";
    document.getElementById("work-img").src = "https://thepowcenter.com/images/kenjibed.jpg";
};
document.getElementById("link4").onmouseover = function() {
    document.getElementById("linktext1").style="background-position: top right 100%;";
    document.getElementById("linktext2").style="background-position: top right 100%;";
    document.getElementById("linktext3").style="background-position: top right 100%;";
    document.getElementById("linktext4").style="background-position: top left 100%;";
    document.getElementById("linktext5").style="background-position: top right 100%;";
    document.getElementById("work-img").src = "https://tsapulsar.github.io/images/earth.jpg";
};
document.getElementById("link5").onmouseover = function() {
    document.getElementById("linktext1").style="background-position: top right 100%;";
    document.getElementById("linktext2").style="background-position: top right 100%;";
    document.getElementById("linktext3").style="background-position: top right 100%;";
    document.getElementById("linktext4").style="background-position: top right 100%;";
    document.getElementById("linktext5").style="background-position: top left 100%;";
    document.getElementById("work-img").src = "https://fluorescencetsa.github.io/images/balloons.jpg";
};



