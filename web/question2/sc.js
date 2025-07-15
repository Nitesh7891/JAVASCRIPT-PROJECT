var ab=document.querySelector('button');
var img1=document.querySelector("#one")
img1.style.width="300px";
img1.style.height="300px";
var img2=document.querySelector("#two")
img2.style.width="350px";
img2.style.height="300px";
ab.addEventListener("click",function(){
    var t=img1.src;
    img1.src=img2.src;
    img2.src=t;
})
