let t0 = gsap.timeline();

t0.from(".circle-big",{width: 0, height:0, opacity:0, duration: 0.5})
  .from(".circle-medium",{width: 0, height:0, duration: 0.5}, "=-0.2")
  .from(".city-search-wrapper",{opacity:0, x: -200, duration: 0.5})
  .from(".burger-wrapper",{opacity:0, x: 20, duration: 0.5}, "=-0.5")
  .from(".login-wrapper",{opacity:0, x: 20, duration: 0.5}, "=-0.5")


let tl = gsap.timeline({
    onComplete: rightBarStay,
    scrollTrigger: {
        trigger: '.trigger1',
        start: "center center",       
    }
});

tl.from(".right-bar", {x: 20, opacity: 0},{})
  .from(".main-element", {x: -100, opacity: 0},{});

let t2 = gsap.timeline({
    scrollTrigger: {
        trigger: '.gap',
        start: 'center bottom',
    }
});

t2.from(".gap",{x: -200, opacity:0, duration: 0.6})
  .from(".trigger1",{x: -200, opacity: 0, duration: 0.6}, "=-0.6");

  

function rightBarStay() {  

  $(window).scroll(function (event) { 
    var mainSection = $('#main-section').offset().top
    var city = $('#city').offset().top
    var screenBottom = (window.scrollY + window.innerHeight)

   if(screenBottom - mainSection -250 <= mainSection - city){
    document.getElementById("city").style = "position: absolute; bottom: unset; top: 1vw; right: 2vw; transform: translateY(0%)";
    document.getElementById("sort").style = "position: absolute; bottom: unset; top: 1vw; right: 2vw; transform: translateY(120%)";
    document.getElementById("category").style = "position: absolute; bottom: unset; top: 1vw; right: 2vw; transform: translateY(240%)";
    }
    else if (screenBottom - mainSection > city - mainSection + 250){
    document.getElementById("city").removeAttribute("style");
    document.getElementById("sort").removeAttribute("style");
    document.getElementById("category").removeAttribute("style"); 
    }

});

}













