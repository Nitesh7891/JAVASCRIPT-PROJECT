var t1=gsap.timeline();

t1.from("#nav h3",{
    y:-50,
    duration:0.8,
    opacity:0,
    delay :0.3,
    stagger:0.3
})
t1.from("#main h1",{
    x:-500,
    duration:0.8,
    opacity:0,
    stagger:0.3
})

t1.from("img",{
    x:100,
    rotate:45,
    opacity:0,
    duration:0.6,
    stagger:0.5
})
