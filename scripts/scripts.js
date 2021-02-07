var opacity = 0;
var intervalID=0;
function fadein(){
    intervalID=setInterval(show,90);
}
function show(){   
    var section = document.getElementById("catalogo");
    opacity = Number(window.getComputedStyle(section).getPropertyValue("opacity"));
    console.log("Fade");    
    if(opacity<1){
        opacity=opacity+0.1
        section.style.opacity=opacity;
    }else{
        clearInterval(intervalID);
    }
}
fadein();