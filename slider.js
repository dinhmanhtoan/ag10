var slider = document.querySelector(".container_slider");
var img = document.querySelectorAll(".container_slider img");
var left = document.getElementById("left");
var right = document.getElementById("right");
var count = 1;
var size = img[0].clientWidth;
        slider.style.transform = "translate3d("+ count *-size +"px"+",0,0)";
function clickSlider() {
    
    right.addEventListener("click",function () {
        if (count>img.length -2) return;

        count++;
        slider.style.transform  = "translate3d("+ count *-size +"px"+",0,0)";
    })
    left.addEventListener("click",function () {
        if (count< 1) return;
        count--;
        slider.style.transform  = "translate3d("+ count *-size +"px"+",0,0)";     
    

    })
    slider.addEventListener("transitionend",function () {
        if (img[count].id === "end") {
            count = img.length-1;
            slider.style.transform  = "translate3d("+ count *-size +"px"+",0,0)";
        }
        if (img[count].id === "start") {
            count = img.length-3;
            slider.style.transform  = "translate3d("+ count *-size +"px"+",0,0)";
        }
    })
}
clickSlider()
