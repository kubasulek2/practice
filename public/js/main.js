$(()=>{$("#top-layer>div").on("click",function(){const a=$(this).attr("id"),t=$(this).parent();let e;switch(a){case"front":e=0;break;case"right":e=-90;break;case"back":e=-180;break;case"left":e=-270}t.css("animation-play-state","paused")})});
//# sourceMappingURL=main.js.map
