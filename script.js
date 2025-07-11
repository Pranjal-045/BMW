gsap.set(".slidesm", {scale: 5})

function loco() {
  (function () {
    const locomotiveScroll = new LocomotiveScroll();
})();
}

function homeAnimation() {
  var tl = gsap.timeline({
    scrollTrigger:{
    trigger: ".home",
    start: "top top",
    end: "bottom top",
    pin: true,
    scrub: 1,
  },
})

tl
.to(".vdodiv", {
  '--clip': "0%",
  ease: Power2,
  duration: 2
}, 'a')
.to(".slidesm", {
  scale: 1,
  ease: Power2,
  duration: 2,
}, 'a')
.to(".lft", {
  xPercent: -10,
  stagger: 0.03,
  ease: Power2,
}, 'b')
.to(".rgt", {
  xPercent: 10,
  stagger: 0.03,
  ease: Power2,
}, 'b')
}

function realPageAnimation() {
  gsap.to(".slide", {
    scrollTrigger: {
      trigger: ".real",
      start: "top top",
      end: "bottom bottom",
      scrub: 2
    },
    xPercent: -200,
    ease: Power4
  })  
}

function modelAnimation() {
  document.querySelectorAll('.listelem').forEach(function(el){
    el.addEventListener("mousemove", function (dets){
      gsap.to(this.querySelector(".picture"),{
        opacity: 1,
        x: gsap.utils.mapRange(0, window.innerWidth, -200, 200, dets.clientX),
        ease: Power4,
        duration: 0.5,
      });
    });
  
    el.addEventListener("mouseleave", function(dets) {
      gsap.to(this.querySelector(".picture"),{
        opacity: 0,
        ease: Power4,
        duration: 0.5,
      });
    })
  })
  document.querySelectorAll('.listelem').forEach(function(el){
    el.addEventListener("mousemove", function (dets){
      gsap.to(this.querySelector(".bluelayer"),{
        height: "100%",
      });
      gsap.to(this.querySelector(".listelem"),{
        color: white,
      });
    });
  
    el.addEventListener("mouseleave", function(dets) {
      gsap.to(this.querySelector(".bluelayer"),{
        height: "0%",
      });
      gsap.to(this.querySelector(".listelem"),{
        color: black,
      });
    })
  })
}

function paraAnimation() {
  clutter = "";
document.querySelector(".textpara")
.textContent.split("")
.forEach(function(e){
  if( e === " " ) clutter += `<span>&nbsp;</span>`
  clutter += `<span>${e}</span>`
})
document.querySelector(".textpara").innerHTML = clutter;

gsap.set(".textpara span", {opacity: 0.1});
gsap.to(".textpara span", {
  scrollTrigger: {
    trigger: ".para",
    start: "top 50%",
    end: "bottom 90%",
    scrub: .2,
  },
    opacity: 1,
    stagger: 0.03,
    ease: Power4,
  })
}

function bodyColorChanger() {
document.querySelectorAll(".section")
.forEach(function(e) {
  ScrollTrigger.create({
    trigger: e,
    start: "top 50%",
    end: "bottom 50%",
    onEnter: function(){
      document.body.setAttribute("theme", e.dataset.color);
    },
    onEnterBack: function(){
      document.body.setAttribute("theme", e.dataset.color);
    },
  })
})
}

loco();
homeAnimation();
realPageAnimation();
modelAnimation();
paraAnimation();
bodyColorChanger();