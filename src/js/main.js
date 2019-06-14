$(() => {
	const burgerIcon = $('.burgerIcon');
	const tml = new TimelineMax({ paused: true });

	burgerIcon.hover(function () {
		TweenMax.to(burgerIcon.children()[0], .2, { x: 10 });
		TweenMax.to(burgerIcon.children()[2], .2, { x: -10 });
	}, function () {
		TweenMax.to(burgerIcon.children()[0], .2, { x: 0 });
		TweenMax.to(burgerIcon.children()[2], .2, { x: 0 });
	});
	tml
		.to('nav', .5, {
			autoAlpha: 1
		})
		.staggerFromTo('nav li', .6, {
			opacity: 0,
			y: 100

		}, 
		{
			opacity: 1,
			y: 0,
			ease: Back.easeOut
		}, .1);

	$(burgerIcon)
		.on('click', function () {
			tml.play(0);
		});
	
	$('.closeButton')
		.on('click', function () {
			tml.reverse(0);
		});

});	