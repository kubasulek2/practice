$(() => {
	TweenMax.set('.oval', { x: 100 });

	const tlAnimation = new TimelineMax({ repeat: -1, yoyo: true });
	tlAnimation.to($('.oval'), 1, { x: -100 });

	TweenMax.staggerFromTo('.triangle', 1, {
		rotation: 90,
		y: 200,
		opacity: 0,
	}, {
			rotation: 0,
			y: 0,
			opacity: 1,
			ease: Back.easeOut
		}, 0.2)

	const tlShapes = new TimelineMax();
	tlShapes
		.to('.circle', 1, { x: 100, ease: Bounce.easeOut },'first')
		.to('.square', 1, { x: 100, ease: Bounce.easeOut, delay: .5 })
		.to('.rectangle', 1, { x: 100, ease: Bounce.easeOut },'first+=0.25')
		.delay(2)
		.eventCallback('onComplete', function(){
			console.log(arguments[0]);		
		},['info'])


		
});
