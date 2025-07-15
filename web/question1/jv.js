var help=document.querySelector("button");
var par=document.querySelector("p");

help.addEventListener("click",function(){
    par.textContent="how can i help you sir!";
    help.style.opacity=0;
})