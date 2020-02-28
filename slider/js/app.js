var left = document.getElementById("btnLeft");
var right = document.getElementById("btnRight");
var item = document.querySelectorAll(".slider-item");
var slide = 0;
left.onclick=function(){
    slBtn(slide-1)
}
right.onclick=function(){
    slBtn(slide+1)
}

function slBtn(say){
    item[slide].className="slider-item"; 
    slide=(say+item.length)%item.length;
    item[slide].className="slider-item active";
}

document.addEventListener('keyup', function(e){
    
        if(e.keyCode==39 || e.keyCode==40){
            slBtn(slide+1)
        }
        if(e.keyCode==37 || e.keyCode==38){
            slBtn(slide-1)
        }
    
})