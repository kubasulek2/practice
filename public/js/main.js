$(()=>{const n=new TimelineMax;n.staggerFrom($(".shape"),.5,{x:50,y:50,opacity:0},.3),$(".playButton").on("click",function(){n.play()}),$(".pauseButton").on("click",function(){n.pause()}),$(".resumeButton").on("click",function(){n.resume()}),$(".reverseButton").on("click",function(){n.reverse()}),$(".slowButton").on("click",function(){n.timeScale(.5)}),$(".fastButton").on("click",function(){n.timeScale(4)}),$(".seekButton").on("click",function(){n.seek(2)}),$(".progressButton").on("click",function(){n.time(0).stop(),console.log(tlS)})});
//# sourceMappingURL=main.js.map
