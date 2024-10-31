 // use a script tag or an external JS file
 document.addEventListener("DOMContentLoaded", (event) => {
    // gsap code here!
        function relativeValues(value) {
            vw = innerWidth;
            return value/100*vw;
        }
        gsap.registerPlugin(TextPlugin,Flip);
        // Declaring variables and creates a timeline
        let tl = gsap.timeline()
        let tl2 = gsap.timeline()
        div1 = $(".movingDiv");
        //configure timelines
        tl.from(".lilDiv", { rotation: -360, x: relativeValues(-50), duration: 2, delay:1, stagger: .5,opacity: 0,ease: "expoScale(0.5,7,power2.in)",})
            .from("h1", {y: -200, ease: "bounce", opacity: 0, duration: 2, stagger: 1}, "-=1")
            .to("h1:nth-child(2)", {text: {value: " crazy!!!", speed: 3, newClass: "text-warning"}});

        tl2.to(".movingDiv",{height: 400, ease:"bounce"});

        div1.mouseenter(function() {
            tl2.play();
        });
        div1.mouseleave(function() {
            tl2.reverse();
        });

});

