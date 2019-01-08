var timeline = new TimelineMax();
const controller = new ScrollMagic.Controller();

timeline.from("#aboutContainer", 0.7, {opacity:0});
timeline.from("#scheduleContainer", 1, {opacity:0});



const scene = new ScrollMagic.Scene({
	triggerElement: "#about"
}).setTween(timeline).addTo(controller);

