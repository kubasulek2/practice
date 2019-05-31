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
      speedArr: [],
      avgSpeed: undefined
    };
    this.motionData = {
      currentAngle: 0,
      targetAngle: undefined,
      move: true
    };
    this.easing = [];
  }
  calculateEntryValues() {
    this.speedMeasure.avgSpeed = (30 / ( this.rotationSpeed * 60 ) );

  }

  animateRotationY() {

    if ( !this.speedMeasure.avgSpeed ) this.calculateEntryValues();

    if ( this.motionData.move ){

      let rotationSpeed = this.computeRotatingTime();
      this.computeAvgSpeed(rotationSpeed);

      if (this.easing.length !== 0) {
        console.log(this.easing);
        this.applyEasing();
      };

      this.motionData.currentAngle -= this.rotationSpeed;
      this.motionData.currentAngle = this.motionData.currentAngle <= -360 ? 0 : this.motionData.currentAngle;

      this.element.css( "transform", ` translateZ(-250px) rotateY(${this.motionData.currentAngle}deg)` );

      // targetAngle is set in click event, so after click event rotation will stop
      if( Math.ceil(this.motionData.currentAngle) === this.motionData.targetAngle )
        this.motionData.move = false;

      window.requestAnimationFrame( ()=> this.animateRotationY() )
    }
  }


  computeEasing(direction){
    let distance = Math.abs( Math.abs(this.motionData.targetAngle) - Math.abs(this.motionData.currentAngle) );

    let steps = distance < 20 ? 5 : 10;
    let threshold, delay, speed, speedChange, startEase, slowAngles, easing = [];
    let baseSpeed = this.rotationSpeed;

    switch (true) {
      case distance <= 10 :
        delay = 0;
        break;
      case distance <= 20 :
        delay = 3;
        break;
      case distance <= 30 :
        delay = 8;
        break;
      case distance <= 40 :
        delay = 15;
        break;
      case distance <= 50 :
        delay = 24;
        break;
      case distance <= 60 :
        delay = 32;
        break;
      case distance <= 70 :
        delay = 40;
        break;
      case distance <= 80 :
        delay = 50;
        break;
      case distance <= 90 :
        delay = 60;
        break;

    }

    threshold = ( distance - delay ) / steps;
    speedChange = baseSpeed/steps;
    speed = baseSpeed;
    startEase = direction === "forth" ? this.motionData.currentAngle - delay : this.motionData.currentAngle + delay;
    slowAngles = startEase;

    threshold = direction === "forth" ? -threshold : threshold;


    for(let i = 1; i < steps; i++){
      slowAngles += threshold;
      speed -= speedChange;

      if (speed > 0) speed = speed < 0.15 ? 0.15 : speed;
      else speed = speed > -0.15 ? -0.15 : speed;

      easing[i-1] = [];

      easing[i-1].push( Math.round( slowAngles ) );
      easing[i-1].push( parseFloat( speed.toFixed(2) ) );
    }
    return easing;

  }
  applyEasing(){

    this.easing.forEach(  value => {
      if ( Math.round(this.motionData.currentAngle) === value[0] )
        this.rotationSpeed = value[1];
    })
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
    let direction = "forth";
    if( this.motionData.targetAngle === 0 ){
      //if clicked in front plane, which set target angle to 0 , must have special check, cause current angle is always lesser than 0
      this.rotationSpeed = this.motionData.currentAngle < -180 ? this.rotationSpeed : -this.rotationSpeed;
      direction = this.motionData.currentAngle < -180 ? "forth" :  "back"
    } else if ( this.motionData.currentAngle < this.motionData.targetAngle ){
      //all the other cases
      this.rotationSpeed = -this.rotationSpeed;
      direction = "back"
    }
    return direction
  }

  planeClickEvent(flag){
    if(flag){
      this.planes.on( 'click', (e)=> {
        this.getTargetAngle(e);

        let direction = this.shouldChangeDirection();
        this.easing = this.computeEasing(direction);
        console.log(this.easing);

      } )
    } else {
      this.planes.off()
    }

  }



}

$(() => {

  let myElement = new tetragon3d($('#top-layer'),1);
  myElement.animateRotationY();
  myElement.planeClickEvent(true);

  Math.easeOutQuad = function (t, b, c, d) {
    t /= d;
    return -c * t*(t-2) + b;
  };

  let easing = Math.easeOutQuad(0.6,54,36,0.4);
});