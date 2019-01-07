var timeline = new TimelineMax();
const controller = new ScrollMagic.Controller();

timeline.from("#aboutImage", 0.2, {opacity:0});
timeline.from(".lead", 0.4, {opacity:0});




const scene = new ScrollMagic.Scene({
	triggerElement: "#about"
}).setTween(timeline).addTo(controller);

