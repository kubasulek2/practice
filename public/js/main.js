'use strict';

// let x = {};

// Object.defineProperty(x, 'readOnly', {
// 	value: 2,
// 	writable: false,
// 	configurable: true,
// 	enumerable: false


// });

// Object.defineProperty(x, 'readOnly', {
// 	writable: true,
// });
// x.readOnly = 3;
// console.log(x);
// $(() => {
// 	console.time('load');

// 	$(window).on('load', () => {
// 		console.timeEnd('load');

// 	});
// 	const burgerIcon = $('.burgerIcon');
// 	const tlNav = new TimelineMax({ paused: true });

// 	//NAV

// 	burgerIcon.hover(function () {
// 		TweenMax.to(burgerIcon.children()[0], .2, { x: 10 });
// 		TweenMax.to(burgerIcon.children()[2], .2, { x: -10 });
// 	}, function () {
// 		TweenMax.to(burgerIcon.children()[0], .2, { x: 0 });
// 		TweenMax.to(burgerIcon.children()[2], .2, { x: 0 });
// 	});
// 	tlNav
// 		.to('nav', .5, {
// 			autoAlpha: 1
// 		})
// 		.staggerFrom('nav li', .5, { x: -200, opacity: 0, }, .1)
// 		.staggerFrom('nav li', .6, { rotationY: -90, ease: Back.easeOut.4}, .2);
// 	/* .staggerFromTo('nav li', .6, {
// 			opacity: 0,
// 			y: 100,
// 			scale: 0.8,
// 			force3d: true

// 		},
// 		{
// 			opacity: 1,
// 			y: 0,
// 			scale: 1,
// 			ease: Elastic.easeOut,
// 			force3d: true
// 		}, .1) */
// 	// .to('.closeButton', .3, {
// 	// 	autoAlpha: 1
// 	//});

// 	$(burgerIcon)
// 		.on('click', function () {
// 			tlNav.play(0);
// 		});

// 	$('.closeButton').on('click', function () {
// 		tlNav.reverse(0);
// 	});

// 	//Hero Section

// 	TweenMax.fromTo('#hero h1', .6, { x: 200, opacity: 0 }, { x: 0, opacity: 1, ease: Back.easeOut });
// 	TweenMax.fromTo('.learnMoreButton', .6, { x: -200, opacity: 0 }, { x: 0, opacity: 1, ease: Back.easeOut });
// 	//For col section

// 	$('.fourColItem').hover(function () {
// 		// over
// 		TweenMax.to(this, .5, { scale: 1.05,  y: -10 });	
// 		TweenMax.to(this, .5, { boxShadow: '0 0 30px rgba(0,0,0,0.46)'});
// 	}, function () {
// 		TweenMax.to(this, .5, { scale: 1, y: 0 });
// 		TweenMax.to(this, .5, { boxShadow: '0 0 20px rgba(0,0,0,0.06)'});
// 	}	);

// 	//Services

// 	TweenMax.set('.serviceBoxInner', { y: 200 });

// 	$('.serviceBox').hover(function () {
// 		TweenMax.to($(this).find('.serviceBoxInner'), .6, {
// 			opacity: 1,
// 			y: 0,
// 			ease: Power3.easeOut
// 		});	

// 	}, function () {
// 		TweenMax.to($(this).find('.serviceBoxInner'), .6, {
// 			opacity: 0,
// 			y: 200,
// 			ease: Power3.easeIn
// 		});	
// 	});

// 	// COGS

// 	TweenMax.to('.cogRight', 6, {rotation: 360, repeat: -1 , ease: Power0.easeNone });
// 	TweenMax.to('.cogLeft', 6, {rotation: 360, repeat: -1 , ease: Power0.easeNone });
// });	
// $(() => {
// 	function transition(event) {
// 		event.preventDefault();

// 		const href = $(event.currentTarget).attr('href');


// 		const myfunc = () => window.location = href;
// 		const
// 			columnEven = $('.column:nth-child(even)'),
// 			columnOdd = $('.column:nth-child(odd)'),
// 			columnWrapper = $('.column-wrap'),
// 			background = $('.background'),
// 			tm = new TimelineMax();

// 		tm
// 			.to(background, .5, { y: 0, opacity: 1 })
// 			.to(columnWrapper, .6, { rotationZ: 0 }, 'synchro')
// 			.to(columnEven, .6, { width: 0 }, 'synchro')
// 			.to(columnOdd, .6, { width: '12.5%' }, 'synchro')
// 			.set(columnWrapper, { background: '#599193' })
// 			.add(myfunc);

// 	}

// 	$('#startTransition').on('click', () => transition(event));

// 	$('.upload').on('click touch', function (e) {

// 		e.preventDefault();

// 		const self = $(this);
// 		self.addClass('loading');
// 	});


// });


// let array = [1, 2, 3, 4, 5];
// function reverseArray(arr) {
// 	let n = arr.length;
// 	for (let i = 0; i < n /2; i++) {
// 		let 
// 			startIndex = i,
// 			endIndex = n -1 - i,
// 			temp = arr[startIndex];


// 		arr[startIndex] = array[endIndex];
// 		arr[endIndex] = temp; 


// 	}
// 	return arr;
// }
// const arrayReversed = reverseArray(array);
// console.log(arrayReversed);

// let arrayToSort = [10,7,2,5,8,4,2];

// function sortArray(arr) {

// 	let sorted = [],
// 		n = arr.length;

// 	for (let i = 0; i < n; i++) {
// 		let min = arr[0],
// 			minIndex = 0;
// 		for (let j = 1; j < arr.length; j++) {

// 			if (arr[j] < min){
// 				min = arr[j];
// 				minIndex = j;
// 			}

// 		}

// 		sorted.push(min);
// 		arr.splice(minIndex,1);

// 	}
// 	return sorted;
// }
// let sortedArray = sortArray(arrayToSort);
// console.log(sortedArray);

$(() => {
	const controller = new ScrollMagic.Controller();
	new ScrollMagic.Scene({
		triggerElement: '#parallax',
		triggerHook: 1
	}).duration('200%').setTween(TweenMax.from('#parallax', 1, {
		y: '-50%',
		ease: Linear.easeNone
	})).addIndicators() // for debugging purposes
	.addTo(controller);

	new ScrollMagic.Scene({
		triggerElement: '#slidein',
		triggerHook: 'onLeave'
	}).setPin('#slidein').addIndicators() // add indicators (requires plugin)
	.addTo(controller);

	new ScrollMagic.Scene({
		triggerElement: '#slidein2',
		triggerHook: 'onLeave'
	}).setPin('#slidein2').addIndicators() // add indicators (requires plugin)
	.addTo(controller);

	const fromLeftTimeline = new TimelineMax();
	const fromLeftFrom = TweenMax.from('#left', 1, {
		x: -500
	});
	const fromLeftTo = TweenMax.to('#left', 1, {
		x: 0
	});
	fromLeftTimeline.add(fromLeftFrom).add(fromLeftTo);

	new ScrollMagic.Scene({
		triggerElement: '#slidein2',
		offset: 200
	}).setTween(fromLeftTimeline).duration(400)
	//.reverse(false) // uncoment if animation is to happen only one, not back and forth
	.addIndicators().addTo(controller);

	// Fade in
	const fadeInTimeline = new TimelineMax();
	const fadeInFrom = TweenMax.from('#opacity', 1, {
		autoAlpha: 0
	});
	const fadeInTo = TweenMax.to('#opacity', 1, {
		autoAlpha: 1
	});
	fadeInTimeline.add(fadeInFrom).add(fadeInTo);

	new ScrollMagic.Scene({
		triggerElement: '#slidein2',
		offset: 200
	}).setTween(fadeInTimeline).duration(400)
	//    .reverse(false)
	//.addIndicators() // add indicators (requires plugin)
	.addTo(controller);

	//Fly in from the left
	const fromBottomTimeline = new TimelineMax();
	const fromBottomFrom = TweenMax.from('#bottom', 1, {
		y: 300
	});
	const fromBottomTo = TweenMax.to('#bottom', 1, {
		y: 0
	});
	fromBottomTimeline.add(fromBottomFrom).add(fromBottomTo);

	new ScrollMagic.Scene({
		triggerElement: '#slidein2',
		offset: 200
	}).setTween(fromBottomTimeline).duration(400)
	//    .reverse(false)
	//.addIndicators() // add indicators (requires plugin)
	.addTo(controller);
});
//# sourceMappingURL=main.js.map
