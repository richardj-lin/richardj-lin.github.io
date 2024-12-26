document.getElementById("email").onmouseover = function() {
    document.getElementById("email-copy").style="opacity: 100; margin-top: -30px;";
    document.getElementById("email-copy").innerHTML = "rlin@unc.edu<br>[Click to copy]";
};

document.getElementById("email").onmouseleave = function() {
    document.getElementById("email-copy").style="color: var(--text); opacity: 0; margin-top: -50px;";
};
document.getElementById("email").onmousedown = function() {
    navigator.clipboard.writeText("rlin@unc.edu");
    document.getElementById("email-copy").innerHTML = "rlin@unc.edu<br>[Copied!]";
    document.getElementById("email-copy").style="color: var(--check); opacity: 100; margin-top: -30px;";
};
document.getElementById("linkedin").onmousedown = function() {
    window.open('https://www.linkedin.com/in/richardlin4375/', '_blank');
}
