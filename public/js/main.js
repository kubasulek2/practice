$(()=>{!function(){const e=$(".cube");let o=0,t=0,n=!1;$(document).on("keydown",function(c){!function(c){if(n)return;switch(!0){case 37===c.keyCode||65===c.keyCode:o+=60;break;case 39===c.keyCode||68===c.keyCode:o-=60}e.css("transform",`rotateX(${t}deg) rotateY(${o}deg)`),n=!0,setTimeout(function(){n=!1},1e3)}(c)})}()});
//# sourceMappingURL=main.js.map
