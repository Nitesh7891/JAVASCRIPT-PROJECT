var text=document.querySelector("textarea");
var count=document.querySelector("span");
text.addEventListener("input",function(){
count.textContent=text.value.length;
})