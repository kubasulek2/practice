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
    this.timeMeasure = {
      start: undefined,
      stop: undefined,
      measureAngle: 30
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

      this.motionData.speed = this.computeRotatingTime();

      this.motionData.currentAngle -= this.rotationSpeed;
      this.motionData.currentAngle = this.motionData.currentAngle <= -360 ? 0 : this.motionData.currentAngle;

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

  computeRotatingTime(){

    let currentAngle = Math.abs( Math.floor(this.motionData.currentAngle) );
      let rotationTime;
      console.log(currentAngle);
    /*let flag = !(currentAngle % 30);

    if(this.timeMeasure.measureAngle === currentAngle){
      this.timeMeasure.stop = new Date();
      rotationTime =  (this.timeMeasure.stop - this.timeMeasure.start)/1000;
      return rotationTime;
    }

    if ( flag ) {
      this.timeMeasure.measureAngle = this.motionData.currentAngle === 360 ? 30 : currentAngle + 30;
      this.timeMeasure.start = new Date();
    }
    console.log('set measure ', currentAngle, this.timeMeasure.measureAngle);*/


    /*if(this.timeMeasure.stop && this.timeMeasure.start) {

      this.timeMeasure.stop = undefined;
      this.timeMeasure.start = undefined;
      return rotationTime;
    }
    return this.motionData.speed;*/
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
    if( this.motionData.targetAngle === 0 ){
      //if clicked in front plane, which set target angle to 0 , must have special check, cause current angle is always lesser than 0
      this.rotationSpeed = this.motionData.currentAngle < -180 ? this.rotationSpeed : -this.rotationSpeed

    } else if ( this.motionData.currentAngle < this.motionData.targetAngle )
      //all the other cases
      this.rotationSpeed = -this.rotationSpeed;

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
  let myElement = new tetragon3d($('#top-layer'),.5);
  myElement.animateRotationY();
  myElement.planeClickEvent(true);

  Math.easeOutQuad = function (t, b, c, d) {
    t /= d;
    return -c * t*(t-2) + b;
  };

  let easing = Math.easeOutQuad(0.6,54,36,0.4);
});