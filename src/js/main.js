$(() => {

  let planes = $('#top-layer>div');

  planes.on('click', function () {
    const plane = $(this).attr("id");
    const parentElement = $(this).parent();
    let rotation;

    switch (plane) {
      case "front":
        rotation = 0;
        break;
      case "right":
        rotation = -90;
        break;
      case "back":
        rotation = -180;
        break;
      case "left":
        rotation = -270;
        break;
    }
    parentElement
      .css("animation-play-state", 'paused')
      //.css('transform', `translateZ(-250px) rotateY(${rotation}deg)`)
    $(this).addClass("focus");

  });

  function animateRotationY(obj, startAngle, timeInSec) {
    let frame = (timeInSec *1000 / 360).toFixed(4);
    let deg = startAngle;



      const animation = window.setInterval(()=>{
        deg = deg < -360 ? 0 : deg;
        deg++;
        console.log(deg);
        obj.css("transform", ` translateZ(-250px) rotateY(${deg}deg)`)
      },frame)

  }
  //animateRotationY($('#top-layer'), 0, 6);


  function getRotationDegrees(obj) {
    let angle;
    let matrix = obj.getComputedStyle("-webkit-transform") ||
      obj.getComputedStyle("-moz-transform")    ||
      obj.getComputedStyle("-ms-transform")     ||
      obj.getComputedStyle("-o-transform")      ||
      obj.getComputedStyle("transform");
    if(matrix !== 'none') {
      let values = matrix.split('(')[1].split(')')[0].split(',');
      let a = values[0];
      let b = values[1];
      angle = Math.round(Math.atan2(b, a) * (180/Math.PI));

    } else {
      angle = 0;
    }
    return (angle < 0) ? angle + 360 : angle;
  }

});