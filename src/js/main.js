class htmlElement {
  constructor(element){
    this.element = element
  }
  copy(){
    return this.element.clone()
  }
  remove(){
    this.element.remove()
  }
  append(parent){
      this.element.append(parent)
  }
}

class tetragon3d extends htmlElement{
  constructor(element ,speed){
    super(element);
    this.rotationSpeed = speed > 1 ? 1 : speed;

    this.planes = this.element.children('div');
    this.timeData = {
      then: undefined,
      now: undefined
    };
    this.motionData = {
      currentAngle: 0,
      targetAngle: undefined,
      speed: undefined,
      move: true

    }
  }

  animateRotationY() {

    if ( this.motionData.move ){

      this.motionData.speed = this.computeRotatingTime( 45 );

      this.motionData.currentAngle = this.motionData.currentAngle < -360 ? 0 : this.motionData.currentAngle;
      this.motionData.currentAngle -= this.rotationSpeed;

      this.element.css( "transform", ` translateZ(-250px) rotateY(${this.motionData.currentAngle}deg)` );

      // targetAngle is set in click event, so after click event rotation will stop
      if( Math.ceil(this.motionData.currentAngle) === this.motionData.targetAngle )
        this.motionData.move = false;

      window.requestAnimationFrame( ()=> this.animateRotationY() )
    }
  }

  computeTransitionSpeed(){
    let distance = Math.abs(this.motionData.targetAngle) - Math.abs(this.motionData.currentAngle);
    let ratio = distance / 45;
    return ratio * this.motionData.speed
  }

  computeRotatingTime(angle){
    console.log(this.motionData.speed);
    let rotationTime;
    let measure = Math.abs( Math.floor(this.motionData.currentAngle) );

    if (Number(measure) === 1) this.timeData.then = new Date();
    else if (measure === 1 + angle)  this.timeData.now = new Date;

    if(this.timeData.now && this.timeData.then) {
      rotationTime =  (this.timeData.now - this.timeData.then)/1000;
      this.timeData.now = undefined;
      this.timeData.then = undefined;
      return rotationTime;
    }
    return this.motionData.speed;
  }

  getTargetAngle (e) {

    const targetId = $(e.target).attr("id");

    switch (targetId) {
      case "front":
        this.motionData.targetAngle = 0;
        break;
      case "right":
        this.motionData.targetAngle = -90;
        break;
      case "back":
        this.motionData.targetAngle = -180;
        break;
      case "left":
        this.motionData.targetAngle = -270;
        break;
    }
  }
  shouldChangeDirection(){
    if ( this.motionData.currentAngle < this.motionData.targetAngle )
      this.rotationSpeed = -this.rotationSpeed;
   console.log(this.motionData.currentAngle < this.motionData.targetAngle);
  }

  planeClickEvent(flag){
    if(flag){
      this.planes.on( 'click', (e)=> {
        this.getTargetAngle(e);

        let transitionSpeed = this.computeTransitionSpeed();
        this.shouldChangeDirection();

      } )
    } else {
      this.planes.off()
    }

  }



}

$(() => {
  let myElement = new tetragon3d($('#top-layer'),5);
  myElement.animateRotationY();
  myElement.planeClickEvent(true);

  Math.easeOutQuad = function (t, b, c, d) {
    t /= d;
    return -c * t*(t-2) + b;
  };

  let easing = Math.easeOutQuad(0.6,54,36,0.4);
});