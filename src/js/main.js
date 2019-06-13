$(() => {
	TweenMax.set('.oval', { x: 100 });


	const tlAnimation = new TimelineMax({ repeat: -1, yoyo: true });
	tlAnimation.to($('.oval'), 1, { x: -100 })
});
