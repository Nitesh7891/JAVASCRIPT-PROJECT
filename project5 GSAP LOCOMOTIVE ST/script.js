function loco(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});



// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh()
}





function splitText(){
    var allh1=document.querySelectorAll("#page2 h1")

allh1.forEach(function(elem){
    var h1Text=elem.textContent
    var splittedText=h1Text.split("")

var clutter=""
splittedText.forEach(function(e){
     clutter+=`<span>${e}</span>`
})
elem.innerHTML=clutter;
})
}

function GSAP(){
gsap.to("#page2 h1 span",{
    color:"#E3E3C4",
    stagger:0.1,
    scrollTrigger:{
        trigger:"#page2 h1",
        scroller:"#main",

        start:"top 50%",
        end:"top 10%",
        scrub:1
    }

}
)

gsap.to("#page1 img",{
    width:"100%",
    scrollTrigger:{
    trigger:"#page1",
    scroller:"#main",
    start:"top 0%",
    end:"top -30%",
    scrub:2,
    pin:true
    }
})

}
  
loco()
splitText()
GSAP()

var t1=gsap.timeline();

t1.from("#nav h3",{
    y:-50,
    duration:0.8,
    opacity:0,
    delay :0.3,
    stagger:0.3
})
t1.from("#page3 h1",{
    x:-500,
    duration:0.8,
    opacity:0,
    stagger:0.3
})

t1.from("#page3 img",{
    x:100,
    rotate:45,
    opacity:0,
    duration:0.6,
    stagger:0.5
})