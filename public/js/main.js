$(() => {
	const burgerIcon = $('.burgerIcon');
	const tlNav = new TimelineMax({ paused: true });

	//NAV

	burgerIcon.hover(function () {
		TweenMax.to(burgerIcon.children()[0], .2, { x: 10 });
		TweenMax.to(burgerIcon.children()[2], .2, { x: -10 });
	}, function () {
		TweenMax.to(burgerIcon.children()[0], .2, { x: 0 });
		TweenMax.to(burgerIcon.children()[2], .2, { x: 0 });
	});
	tlNav.to('nav', .5, {
		autoAlpha: 1
	}).staggerFrom("nav li", 2, { scale: 0.5, opacity: 0, rotationY: -90, ease: Elastic.easeOut, force3D: true }, 0.2);
	/* .staggerFromTo('nav li', .6, {
 	opacity: 0,
 	y: 100,
 	scale: 0.8,
 	force3d: true
 	},
 {
 	opacity: 1,
 	y: 0,
 	scale: 1,
 	ease: Elastic.easeOut,
 	force3d: true
 }, .1) */
	// .to('.closeButton', .3, {
	// 	autoAlpha: 1
	//});

	$(burgerIcon).on('click', function () {
		tlNav.play(0);
	});

	$('.closeButton').on('click', function () {
		tlNav.reverse(0);
	});

	//Hero Section

	TweenMax.fromTo('#hero h1', .6, { x: 200, opacity: 0 }, { x: 0, opacity: 1, ease: Back.easeOut });
	TweenMax.fromTo('.learnMoreButton', .6, { x: -200, opacity: 0 }, { x: 0, opacity: 1, ease: Back.easeOut }).delay(.8);
	//For col section

	$('.fourColItem').hover(function () {
		// over
		TweenMax.to(this, .5, { scale: 1.05, y: -10 });
		TweenMax.to(this, .5, { boxShadow: '0 0 30px rgba(0,0,0,0.46)' });
	}, function () {
		TweenMax.to(this, .5, { scale: 1, y: 0 });
		TweenMax.to(this, .5, { boxShadow: '0 0 20px rgba(0,0,0,0.06)' });
	});

	//Services

	TweenMax.set('.serviceBoxInner', { y: 200 });

	$('.serviceBox').hover(function () {
		TweenMax.to($(this).find('.serviceBoxInner'), .6, {
			opacity: 1,
			y: 0,
			ease: Power3.easeOut
		});
	}, function () {
		TweenMax.to($(this).find('.serviceBoxInner'), .6, {
			opacity: 0,
			y: 200,
			ease: Power3.easeIn
		});
	});

	// COGS

	TweenMax.to('.cogRight', 6, { rotation: 360, repeat: -1, ease: Power0.easeNone });
	TweenMax.to('.cogLeft', 6, { rotation: 360, repeat: -1, ease: Power0.easeNone });
});
//# sourceMappingURL=main.js.map
