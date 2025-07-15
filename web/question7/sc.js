var start=document.querySelector("#start");
var stop=document.querySelector("#stop");
var pro=document.querySelector("#progress")
var op=document.querySelector("opa")
var count=0;
var int;
start.addEventListener("click",function(){
 int =setInterval(function(){
    if(count===100)
    {
        clearInterval(int);
opa.style.opacity=1;
alert("download completed");
count=0;
    }
count++;
pro.style.width=count+'%';
},100)
})
stop.addEventListener("click",function(){
    clearInterval(int);
})