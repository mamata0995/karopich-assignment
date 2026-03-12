const hamburger=document.getElementById("hamburger");
const navLinks=document.getElementById("navLinks");
const hero = document.querySelector(".hero");
let btn = document.querySelectorAll(".btn");
let primaryBtn = document.querySelector(".primary");
let secondaryBtn = document.querySelector(".secondary");
let heroContent = document.querySelector(".hero-content");
// const howitworksSection = document.querySelector(".how-it-works");
// const whocanapplySection = document.querySelector(".who-can-apply");


gsap.registerPlugin(ScrollTrigger);

hamburger.addEventListener("click",()=>{
navLinks.classList.toggle("active");
hero.style.filter = navLinks.classList.contains("active") ? "blur(5px)" : "none";
});


//button hover
btn.forEach(button => {
    button.addEventListener("mouseover", () => {
        let tl = gsap.timeline();
        tl.to(button, {scale: 1.1, duration: 0.3})
          .to(button, {backgroundColor:"black", color:"#fff", duration:0.3, ease:"power1.out"}, 0);
    });
    button.addEventListener("mouseleave", () => {
        let tl = gsap.timeline();
        tl.to(button, {scale: 1, duration: 0.3})
          .to(button, {backgroundColor:"transparent", color:"black", duration:0.3, ease:"power1.out"}, 0);
    });
})

// navbar slide animation
gsap.from(".navbar",{
y:-80,
opacity:0,
duration:1
});

// logo animation
gsap.from(".logo",{
x:-50,
opacity:0,
duration:1,
delay:0.5
});

gsap.from(".btn.apply-btn",{
x:50,
opacity:0,
duration:1,
delay:0.5
});

// menu items appear one by one
gsap.from(".nav-link li",{
y:-20,
opacity:0,
duration:0.5,
stagger:0.2,
delay:0.8
});

//hero section animation
gsap.from(".hero-content h1",{
y:80,
opacity:0,
duration:1
});

gsap.from(".hero-content p",{
y:50,
opacity:0,
duration:1,
delay:0.3
});

gsap.from(".hero-buttons",{
scale:0.8,
opacity:0,
duration:0.6,
delay:0.6
});

//about secction animation

gsap.to(".about-image",{
  opacity:1,
  y:0,
  duration:0.4,
  stagger:0.2,
  scrollTrigger:{
    trigger:".about-image",
    start:"top 80%",
    toggleActions: "restart none restart none"
  }
});

gsap.to(".about-content",{
  opacity:1,
  y:0,
  duration:0.4,
  stagger:0.2,
   delay:0.5,
  scrollTrigger:{
    trigger:".about-content",
    start:"top 80%",
    toggleActions: "restart none restart none"
  }
});

//how it works card animation


gsap.to(".section-title",{
  opacity:1,
  y:0,
  duration:0.2,
  delay:0.3,
  ease:"power2.out",
  scrollTrigger:{
    trigger:".section-title",
    start:"top 80%",
    scrub: 1
  }
});

gsap.utils.toArray(".card").forEach(card => {
gsap.to(".card",{
opacity:1,
y:0,
duration:0.4,
stagger:0.2,
ease:"power2.out",
scrollTrigger:{
trigger:".grid",
start:"top 80%",
scrub: 1,
}
});
});


//who can apply section animation
gsap.to(".section-title",{
  opacity:1,
  y:0,
  duration:0.2,
  delay:0.3,
  ease:"power2.out",
  scrollTrigger:{
    trigger:".who-can-apply .section-title",
    start:"top 80%",
    scrub: 1
  }
});

gsap.utils.toArray(".card").forEach(card => {
gsap.to(".card",{
opacity:1,
y:0,
duration:0.4,
stagger:0.2,
ease:"power2.out",


scrollTrigger:{
trigger:".grid",
start:"top 80%",
scrub: 1,
}
});
});

//investors section animation
gsap.to(".section-title",{
  opacity:1,
  y:0,
  duration:0.2,
  delay:0.3,
  ease:"power2.out",
  scrollTrigger:{
    trigger:".investors .section-title",
    start:"top 80%",
    scrub: 1
  }
});
//image slider animation of investors
const track = document.querySelector(".card-track")
const next = document.querySelector(".next")
const prev = document.querySelector(".prev")

let cardWidth = document.querySelector(".card").offsetWidth + 25

/* NEXT */

next.addEventListener("click", () => {

gsap.to(track,{
x:-cardWidth,
duration:0.7,
ease:"ease3.inOut",

onComplete:()=>{

track.appendChild(track.firstElementChild)

gsap.set(track,{x:0})

}

})

})

/* PREV */

prev.addEventListener("click", () => {

track.prepend(track.lastElementChild)

gsap.set(track,{x:cardWidth})

gsap.to(track,{
x:0,
duration:0.7,
ease:"ease3.inOut",
})

})

//starttup animation
gsap.from(".section-title", {
  y: 50,
  opacity: 0,
  duration: 1,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".section-title",
    start: "top 80%",
    toggleActions: "play none none reverse"
  }
});

// Animate each startup card individually
gsap.to(".section-title",{
  opacity:1,
  y:0,
  duration:0.2,
  delay:0.3,
  ease:"power2.out",
  scrollTrigger:{
    trigger:".featured-startups .section-title",
    start:"top 80%",
    scrub: 1
  }
});

gsap.from(".startup-card", {
  y: 50,
  opacity: 0,
  duration: 1,
  ease: "power3.out",
  stagger: 0.3, // each card appears one after another
  scrollTrigger: {
    trigger: ".startups",
    start: "top 80%",
    toggleActions: "play none none reverse"
  }
});

//karo startup section animation
gsap.to(".section-title",{
  opacity:1,
  y:0,
  duration:0.2,
  delay:0.3,
  ease:"power2.out",
  scrollTrigger:{
    trigger:".karoStartup .section-title",
    start:"top 80%",
    scrub: 1
  }
});

// Animate the section title

