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

var decrease = setInterval(function () {
    if (window.scrollY > 50 && window.scrollY < 450) {
        document.getElementById("healthymind").style = "width: 300px; height: 400px; background: size: 500px 500px;"; 
        document.getElementById("healthymind-name").style = "letter-spacing: 0px; font-size: 0px; color: transparent;";
    }
    if (window.scrollY < 50) {
        document.getElementById("healthymind").style = "width: 1000px; height: 600px;"; 
        document.getElementById("healthymind-name").style = "letter-spacing: 35px; font-size: 50px; color: white;";
    }

    if (window.scrollY > 450 && window.scrollY < 900) {
        document.getElementById("fluorescence").style = "width: 300px; height: 400px; background: size: 500px 500px;"; 
        document.getElementById("fluorescence-name").style = "letter-spacing: 0px; font-size: 0px; color: transparent;";
    }
    if (window.scrollY < 450 && window.scrollY > 50) {
        document.getElementById("fluorescence").style = "width: 1000px; height: 600px;"; 
        document.getElementById("fluorescence-name").style = "letter-spacing: 35px; font-size: 50px; color: white;";
    }

    if (window.scrollY > 900 && window.scrollY < 1350) {
        document.getElementById("epanos").style = "width: 300px; height: 400px; background: size: 500px 500px;"; 
        document.getElementById("epanos-name").style = "letter-spacing: 0px; font-size: 0px; color: transparent;";
        
    }
    if (window.scrollY < 900 && window.scrollY > 450) {
        document.getElementById("epanos").style = "width: 1000px; height: 600px;"; 
        document.getElementById("epanos-name").style = "letter-spacing: 35px; font-size: 50px; color: white;";
    }

    if (window.scrollY > 1350) {
        document.getElementById("websymphonies").style = "width: 300px; height: 400px; background: size: 500px 500px;"; 
        document.getElementById("websymphonies-name").style = "letter-spacing: 0px; font-size: 0px; color: transparent;";
        
    }
    if (window.scrollY < 1350 && window.scrollY > 900) {
        document.getElementById("websymphonies").style = "width: 1000px; height: 600px;"; 
        document.getElementById("websymphonies-name").style = "letter-spacing: 35px; font-size: 50px; color: white;";
    }

    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        clearInterval(decrease);
        document.getElementById("all").style = "flex-direction: row; justify-content: space-between; overflow-x: auto; margin-top: 100px;";
        document.getElementById("bottom").style = "height: 0px;"; 

    }
    
}, 10)