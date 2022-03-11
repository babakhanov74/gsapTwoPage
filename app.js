const tl = gsap.timeline();
tl.to('.one',0.5,{
    y:'-100%',
    delay:'1'
})
.to('.two',0.5,{
    y:'-100%',
   
},
'-=0.2')
.to('.three',0.5,{
    y:'-100%',
   
},
'-=0.2');
tl.to('.one',0.5,{
    height:'0px',

})
.to('.two',0.5,{
   height:'0px'
   
},
'-=0.5')
.to('.three',0.5,{
    height:'0px'
   
},
'-=0.5')
.to('.yellow',0.5,{
    height:'0px'
   
},
'-=0.5')
tl.from('.h1 h1',0.6,{
    y:'100%'
})
.from('.h4 h4',0.6,{
    y:'100%'
},
'-=0.3')
.from('.paragraf p',0.6,{
    y:'100%'
},'-=0.3')
.from('.bottom',1,{
    x:"-10px",
    opacity:'0'
},'-=0.2')
.from('.header_main .nav',1,{
    x:"-10px",
    opacity:'0'
},'-=1')
.from('.navbar',1,{
    y:"10px",
    opacity:'0'
},'-=1')
.from('.big h1',0.6,{
    x:"-100%",
},'=-1')