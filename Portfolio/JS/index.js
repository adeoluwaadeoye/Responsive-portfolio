/*----------------------TYPING ANIMATION----------------- */
var typed = new Typed(".typing",{
    strings:["","Web Designer","Web Developer","IT Consultant","Youtuber"],
    typeSpeed:100,
    BackSpeed:60,
    loop:true
})



AOS.init();


AOS.init({

    disable: false, 
    startEvent: 'DOMContentLoaded', 
    initClassName: 'aos-init', 
    animatedClassName: 'aos-animate', 
    useClassNames: false, 
    disableMutationObserver: false, 
    debounceDelay: 50, 
    throttleDelay: 99, 

    offset: 120,
    delay: 0,     duration: 400, 
    easing: 'ease', 
    once: false, 
    mirror: false,
    anchorPlacement: 'top-bottom', 

});



document.addEventListener('aos:in', ({ detail }) => {
    console.log('animated in', detail);
});

document.addEventListener('aos:out', ({ detail }) => {
    console.log('animated out', detail);
});




