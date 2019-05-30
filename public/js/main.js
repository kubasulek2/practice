$(()=>{$("#top-layer>div").on("click",function(){const a=$(this).attr("id"),t=$(this).parent();let s;switch(a){case"front":s=0;break;case"right":s=-90;break;case"back":s=-180;break;case"left":s=-270}t.css("animation-play-state","paused"),$(this).addClass("focus")})});
//# sourceMappingURL=main.js.map
