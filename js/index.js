var offset;
if (width >= 1024) {
    offset = 125;
}
else {
    offset=300;
}

function scrollAbout() {
    document.getElementById("scrolldown").scrollIntoView({behavior: "smooth"});
}
function scrollWork() {
    document.getElementById("workline").scrollIntoView({behavior: "smooth"});
}

