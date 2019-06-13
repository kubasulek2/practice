/* $(() => {
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
		.to('.circle', 1, { x: 100, ease: Bounce.easeOut },.5)
		.to('.square', 1, { x: 100, ease: Bounce.easeOut },'x-=0.25')
		.to('.rectangle', 1, { x: 100, ease: Bounce.easeOut },'x-=0.25')
		.eventCallback('onComplete', function(){
			console.log(arguments[0]);		
		},['info']);




});
 */
$(() => {
	const tlShapes = new TimelineMax()

	tlShapes.staggerFrom($('.shape'), .5, { x: 50, y: 50, opacity: 0 }, .3)
	$('.playButton').on('click', function () {
		tlShapes.play()
	});
	$('.pauseButton').on('click', function () {
		tlShapes.pause()
	});
	$('.resumeButton').on('click', function () {
		tlShapes.resume()
	});
	$('.reverseButton').on('click', function () {
		tlShapes.reverse()
	});
	$('.slowButton').on('click', function () {
		tlShapes.timeScale(.5)
	});
	$('.fastButton').on('click', function () {
		tlShapes.timeScale(4)
	});
	$('.seekButton').on('click', function () {
		tlShapes.seek(2)
	});
	$('.progressButton').on('click', function () {
		tlShapes
			.time(0)
			.stop()
			console.log(tlS);
			
	});


})