var home=document.querySelector("#home")
var about=document.querySelector("#about")
var contact=document.querySelector("#contact")

var hometext=document.querySelector("#hometext")
var abouttext=document.querySelector("#abouttext")
var contacttext=document.querySelector("#contacttext")


home.addEventListener("click",function(){
    remove();
    hometext.style.display="block";
hometext.style.width="50%";
})
about.addEventListener("click",function(){
    remove();
    abouttext.style.display="block";
hometext.style.width="50%";
})
contact.addEventListener("click",function(){
    remove();
    contacttext.style.display="block";
hometext.style.width="50%";
})

function remove(){
    document.querySelectorAll("h3").forEach(function(h3){
        h3.style.display="none";
    })
}