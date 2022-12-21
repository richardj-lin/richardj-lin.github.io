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
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

var decrease = setInterval(function () {
    if (window.scrollY > 50 && window.scrollY < 450) {
        document.getElementById("healthymind").style = "width: 300px; height: 400px;"; 
        document.getElementById("healthymind-name").style = "letter-spacing: 0px; font-size: 0px; color: transparent;";
    }
    if (window.scrollY < 50) {
        document.getElementById("healthymind").style = "width: 1000px; height: 600px;"; 
        document.getElementById("healthymind-name").style = "letter-spacing: 35px; font-size: 50px; color: white;";
    }

    if (window.scrollY > 450 && window.scrollY < 900) {
        document.getElementById("fluorescence").style = "width: 300px; height: 400px;"; 
        document.getElementById("fluorescence-name").style = "letter-spacing: 0px; font-size: 0px; color: transparent;";
    }
    if (window.scrollY < 450 && window.scrollY > 50) {
        document.getElementById("fluorescence").style = "width: 1000px; height: 600px;"; 
        document.getElementById("fluorescence-name").style = "letter-spacing: 35px; font-size: 50px; color: white;";
    }

    if (window.scrollY > 900 && window.scrollY < 1200) {
        document.getElementById("epanos").style = "width: 300px; height: 400px;"; 
        document.getElementById("epanos-name").style = "letter-spacing: 0px; font-size: 0px; color: transparent;";
        
    }
    if (window.scrollY < 900 && window.scrollY > 450) {
        document.getElementById("epanos").style = "width: 1000px; height: 600px;"; 
        document.getElementById("epanos-name").style = "letter-spacing: 35px; font-size: 50px; color: white;";
    }

    if (window.scrollY > 1200) {
        document.getElementById("websymphonies").style = "width: 100px; height: 150px;"; 
        document.getElementById("websymphonies-name").style = "letter-spacing: 0px; font-size: 0px; color: transparent;";
        
    }
    if (window.scrollY < 1200 && window.scrollY > 900) {
        document.getElementById("websymphonies").style = "width: 1000px; height: 600px;"; 
        document.getElementById("websymphonies-name").style = "letter-spacing: 35px; font-size: 50px; color: white;";
    }

    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        disableScrolling();
        clearInterval(decrease);
        document.getElementById("healthymind").style = "width: 100px; height: 150px; margin-top: 10px;"; 
        document.getElementById("fluorescence").style = "width: 100px; height: 150px; margin-top: 10px;"; 
        document.getElementById("epanos").style = "width: 100px; height: 150px; margin-top: 10px;"; 
        document.getElementById("websymphonies").style = "width: 100px; height: 150px; margin-top: 10px;"; 
        document.getElementById("all").style = "width: 100px; margin-left: 20%";
        document.getElementById("bottom").style = "height: 0px;"; 
        sleep(2000).then(() => { 
            document.getElementById("all").style = "width: 60%; margin-left: 20%";
            document.getElementById("websymphonies").style = "width: 100px; height: 150px; margin-top: 10px; margin-left: 70%;";
            document.getElementById("epanos").style = "width: 100px; height: 150px; margin-top: 10px; margin-left: 25%;";
            document.getElementById("fluorescence").style = "width: 100px; height: 150px; margin-top: 10px; margin-left: -25%;";
            document.getElementById("healthymind").style = "width: 100px; height: 150px; margin-top: 10px; margin-left: -70%;";
            
            sleep(2000).then(() => {
                document.getElementById("all").style = "width: 60%; margin-left: 20%;";
                document.getElementById("healthymind").style = "width: 100px; height: 150px; margin-left: -70%; margin-top: 5%; box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.4);";
                document.getElementById("fluorescence").style = "width: 100px; height: 150px; margin-left: -25%; margin-top: -13%; box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.4);";
                document.getElementById("epanos").style = "width: 100px; height: 150px; margin-left: 25%; margin-top: -13%; box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.4);";
                document.getElementById("websymphonies").style = "width: 100px; height: 150px; margin-left: 70%; margin-top: -13%; box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.4);";
                sleep(1000).then(() => {
                    enableScrolling();
                    document.getElementById("healthymind").onclick = function() {
                        document.getElementById("healthymind").style = "position: absolute; width: 100%; height: 100%; margin-top: -100px";
                        sleep(1000).then(() => {
                            location.href = "./healthymind.html";
                        });
                    }   
                });
                
            });
         });
    }
    
}, 10)