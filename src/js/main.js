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
    this.speedMeasure = {
      start: undefined,
      stop: undefined,
      lastMeasuredAngle: undefined,
      speedNow: undefined,
      speedArr: [],
      avgSpeed: undefined
    };
    this.motionData = {
      currentAngle: 0,
      targetAngle: undefined,
      move: true
    }
  }
  calculateEntryValues() {
    this.speedMeasure.avgSpeed = (30 / ( this.rotationSpeed * 60 ) );

  }

  animateRotationY() {

    if ( !this.speedMeasure.avgSpeed ) this.calculateEntryValues();

    if ( this.motionData.move ){

      let rotationSpeed = this.computeRotatingTime();
      this.computeAvgSpeed(rotationSpeed);

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
    return ratio * this.speedMeasure.speedNow
  }

  computeRotatingTime(){

    let currentAngle = Math.abs( Math.floor(this.motionData.currentAngle) );
    let rotationTime;
    let flag = !(currentAngle % 31);


    // return if current angle haven't change from last measurement
    if (this.speedMeasure.lastMeasuredAngle === currentAngle){
      return null;
    }


    this.speedMeasure.lastMeasuredAngle = currentAngle;


    if(this.speedMeasure.measureAngle === currentAngle){
      this.speedMeasure.stop = new Date();
      rotationTime =  (this.speedMeasure.stop - this.speedMeasure.start)/1000;
      return rotationTime;
    }
    //every 31 degrees start time, and angle, at which speed will be measured, are set
    if ( flag ) {
      this.speedMeasure.measureAngle = this.motionData.currentAngle === 360 ? 30 : currentAngle + 30;
      this.speedMeasure.start = new Date();
    }
    return null
  }
  computeAvgSpeed(arg){

    if ( arg === null ) return;

    this.speedMeasure.speedArr.push(arg);

    if ( this.speedMeasure.speedArr.length > 4 ){
      this.speedMeasure.speedArr.shift();

    }
    this.speedMeasure.avgSpeed = this.speedMeasure.speedArr.reduce((a,b) => a + b, 0) / this.speedMeasure.speedArr.length;

    console.log(this.speedMeasure.speedArr,this.speedMeasure.avgSpeed);

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