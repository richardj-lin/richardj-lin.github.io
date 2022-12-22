window.onload = function(){document.getElementById("bg").style = "opacity: 0";};
var healthymind = document.getElementById("healthymind");
var fluorescence = document.getElementById("fluorescence");
var epanos = document.getElementById("epanos");
var websymphonies = document.getElementById("websymphonies");

var decrease = setInterval(function () {
    if (window.scrollY > 50 && window.scrollY < 450) {
        healthymind.style = "width: 300px; height: 400px;"; 
        document.getElementById("healthymind-name").style = "letter-spacing: 0px; font-size: 0px; color: transparent;";
    }
    if (window.scrollY < 50) {
        healthymind.style = "width: 1000px; height: 600px;"; 
        document.getElementById("healthymind-name").style = "letter-spacing: 35px; font-size: 50px; color: white;";
    }

    if (window.scrollY > 450 && window.scrollY < 900) {
        fluorescence.style = "width: 300px; height: 400px;"; 
        document.getElementById("fluorescence-name").style = "letter-spacing: 0px; font-size: 0px; color: transparent;";
    }
    if (window.scrollY < 450 && window.scrollY > 50) {
        fluorescence.style = "width: 1000px; height: 600px;"; 
        document.getElementById("fluorescence-name").style = "letter-spacing: 35px; font-size: 50px; color: white;";
    }

    if (window.scrollY > 900 && window.scrollY < 1500) {
        epanos.style = "width: 300px; height: 400px;"; 
        document.getElementById("epanos-name").style = "letter-spacing: 0px; font-size: 0px; color: transparent;";
        
    }
    if (window.scrollY < 900 && window.scrollY > 450) {
        epanos.style = "width: 1000px; height: 600px;"; 
        document.getElementById("epanos-name").style = "letter-spacing: 35px; font-size: 50px; color: white;";
    }

    if (window.scrollY > 1500) {
        websymphonies.style = "width: 100px; height: 150px;"; 
        document.getElementById("websymphonies-name").style = "letter-spacing: 0px; font-size: 0px; color: transparent;";
        
    }
    if (window.scrollY < 1500 && window.scrollY > 900) {
        websymphonies.style = "width: 1000px; height: 600px;"; 
        document.getElementById("websymphonies-name").style = "letter-spacing: 35px; font-size: 50px; color: white;";
    }

    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        disableScrolling();
        clearInterval(decrease);
        document.getElementById("healthymind-name").style = "letter-spacing: 0px; font-size: 0px; color: transparent;";
        document.getElementById("fluorescence-name").style = "letter-spacing: 0px; font-size: 0px; color: transparent;";
        document.getElementById("epanos-name").style = "letter-spacing: 0px; font-size: 0px; color: transparent;";
        document.getElementById("websymphonies-name").style = "letter-spacing: 0px; font-size: 0px; color: transparent;";
        healthymind.style = "width: 100px; height: 150px; margin-top: 10px;"; 
        fluorescence.style = "width: 100px; height: 150px; margin-top: 10px;"; 
        epanos.style = "width: 100px; height: 150px; margin-top: 10px;"; 
        websymphonies.style = "width: 100px; height: 150px; margin-top: 10px;"; 
        document.getElementById("all").style = "width: 100px; margin-left: 20%";
        document.getElementById("bottom").style = "height: 0px;"; 
        sleep(1500).then(() => { 
            document.getElementById("all").style = "width: 60%; margin-left: 20%";
            websymphonies.style = "width: 100px; height: 150px; margin-top: 10px; margin-left: 70%;";
            epanos.style = "width: 100px; height: 150px; margin-top: 10px; margin-left: 25%;";
            fluorescence.style = "width: 100px; height: 150px; margin-top: 10px; margin-left: -25%;";
            healthymind.style = "width: 100px; height: 150px; margin-top: 10px; margin-left: -70%;";
    
            healthymind.style = "width: 100px; height: 150px; margin-left: -70%; margin-top: 5%; box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.4);";
            fluorescence.style = "width: 100px; height: 150px; margin-left: -25%; margin-top: -10%; box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.4);";
            epanos.style = "width: 100px; height: 150px; margin-left: 25%; margin-top: -10%; box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.4);";
            websymphonies.style = "width: 100px; height: 150px; margin-left: 70%; margin-top: -10%; box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.4);";
            
            sleep(1000).then(() => {
                enableScrolling();
                /*
                document.addEventListener('mousemove', (event) => {
                    var w = event.clientX;
                    healthymind.style = "transition: 0s; width: 100px; height: 150px; margin-left: -70%; margin-top: 5%; box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.4);";
                    fluorescence.style = "transition: 0s; width: 100px; height: 150px; margin-left: -25%; margin-top: -10%; box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.4);";
                    epanos.style = "transition: 0s; width: 100px; height: 150px; margin-left: 25%; margin-top: -10%; box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.4);";
                    websymphonies.style = "transition: 0s; width: 100px; height: 150px; margin-left: 70%; margin-top: -10%; box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.4);";
                    healthymind.style.backgroundPosition = (-1 * w/(window.innerWidth/120 + 160) - 75) + "px";
                    fluorescence.style.backgroundPosition = (-1 * w/(window.innerWidth/120 + 160)) + "px";
                    epanos.style.backgroundPosition = (-1 * w/(window.innerWidth/120 + 160) -175) + "px";
                    websymphonies.style.backgroundPosition = (-1 * w/(window.innerWidth/120 + 160) - 113) + "px";
                    
                });
                */     

                healthymind.onmouseover = function(){
                    healthymind.style = "cursor: pointer; width: 100px; height: 150px; margin-left: -70%; margin-top: 5%; box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.4); transform: scale(1.1);";
                    healthymind.onclick = function() {
                        document.getElementById("bg").style = "opacity: 1"
                        sleep(1000).then(() => {
                            location.href = "./healthymind.html";
                        });
                    }   
                };
                healthymind.onmouseout = function() {
                    healthymind.style = "cursor: default; width: 100px; height: 150px; margin-left: -70%; margin-top: 5%; box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.4); transform: scale(1);";
                }

                fluorescence.onmouseover = function(){
                    fluorescence.style = "cursor: pointer; width: 100px; height: 150px; margin-left: -25%; margin-top: -10%; box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.4); transform: scale(1.1);";
                    fluorescence.onclick = function() {
                        document.getElementById("bg").style = "opacity: 1"
                        sleep(1000).then(() => {
                            location.href = "./fluorescence.html";
                        });
                    }   
                };
                fluorescence.onmouseout = function() {
                    fluorescence.style = "cursor: default; width: 100px; height: 150px; margin-left: -25%; margin-top: -10%; box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.4); transform: scale(1);";
                }

                epanos.onmouseover = function(){
                    epanos.style = "cursor: pointer; width: 100px; height: 150px; margin-left: 25%; margin-top: -10%; box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.4); transform: scale(1.1);";
                    epanos.onclick = function() {
                        document.getElementById("bg").style = "opacity: 1"
                        sleep(1000).then(() => {
                            location.href = "./healthymind.html";
                        });
                    }   
                };
                epanos.onmouseout = function() {
                    epanos.style = "cursor: default; width: 100px; height: 150px; margin-left: 25%; margin-top: -10%; box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.4); transform: scale(1);";
                }

                websymphonies.onmouseover = function(){
                    websymphonies.style = "cursor: pointer; width: 100px; height: 150px; margin-left: 70%; margin-top: -10%; box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.4); transform: scale(1.1);";
                    websymphonies.onclick = function() {
                        document.getElementById("bg").style = "opacity: 1"
                        sleep(1000).then(() => {
                            location.href = "./healthymind.html";
                        });
                    }   
                };
                websymphonies.onmouseout = function() {
                    websymphonies.style = "cursor: default; width: 100px; height: 150px; margin-left: 70%; margin-top: -10%; box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.4); transform: scale(1);";
                }
            });

         });
    }
    
}, 10)