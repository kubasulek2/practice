$(()=>{!function(){const e=$(".cube");let o=0,n=0,t=!1;$(document).on("keydown",function(c){!function(c){if(console.log("working"),t)return;switch(!0){case 37===c.keyCode||65===c.keyCode:o+=60;break;case 39===c.keyCode||68===c.keyCode:o-=60}e.css("transform",`rotateX(${n}deg) rotateY(${o}deg)`),t=!0,setTimeout(function(){t=!1,console.log(t)},500)}(c)})}()});
//# sourceMappingURL=main.js.map
