class htmlElement{constructor(e){this.element=e}copy(){return this.element.clone()}remove(){this.element.remove()}append(e){this.element.append(e)}}class tetragon3d extends htmlElement{constructor(e,t){super(e),this.rotationSpeed=t>1?1:t,this.planes=this.element.children("div"),this.speedMeasure={start:void 0,stop:void 0,lastMeasuredAngle:void 0,speedNow:void 0,speedArr:[],avgSpeed:void 0},this.motionData={currentAngle:0,targetAngle:void 0,move:!0}}calculateEntryValues(){this.speedMeasure.avgSpeed=30/(60*this.rotationSpeed)}animateRotationY(){if(this.speedMeasure.avgSpeed||this.calculateEntryValues(),this.motionData.move){let e=this.computeRotatingTime();this.computeAvgSpeed(e),this.motionData.currentAngle-=this.rotationSpeed,this.motionData.currentAngle=this.motionData.currentAngle<=-360?0:this.motionData.currentAngle,this.element.css("transform",` translateZ(-250px) rotateY(${this.motionData.currentAngle}deg)`),Math.ceil(this.motionData.currentAngle)===this.motionData.targetAngle&&(this.motionData.move=!1),window.requestAnimationFrame(()=>this.animateRotationY())}}computeTransitionSpeed(){return(Math.abs(this.motionData.targetAngle)-Math.abs(this.motionData.currentAngle))/45*this.speedMeasure.speedNow}computeRotatingTime(){let e,t=Math.abs(Math.floor(this.motionData.currentAngle)),a=!(t%31);return this.speedMeasure.lastMeasuredAngle===t?null:(this.speedMeasure.lastMeasuredAngle=t,this.speedMeasure.measureAngle===t?(this.speedMeasure.stop=new Date,e=(this.speedMeasure.stop-this.speedMeasure.start)/1e3):(a&&(this.speedMeasure.measureAngle=360===this.motionData.currentAngle?30:t+30,this.speedMeasure.start=new Date),null))}computeAvgSpeed(e){null!==e&&(this.speedMeasure.speedArr.push(e),this.speedMeasure.speedArr.length>4&&this.speedMeasure.speedArr.shift(),this.speedMeasure.avgSpeed=this.speedMeasure.speedArr.reduce((e,t)=>e+t,0)/this.speedMeasure.speedArr.length,console.log(this.speedMeasure.speedArr,this.speedMeasure.avgSpeed))}getTargetAngle(e){switch($(e.target).attr("id")){case"front":this.motionData.targetAngle=0;break;case"right":this.motionData.targetAngle=-90;break;case"back":this.motionData.targetAngle=-180;break;case"left":this.motionData.targetAngle=-270}}shouldChangeDirection(){0===this.motionData.targetAngle?this.rotationSpeed=this.motionData.currentAngle<-180?this.rotationSpeed:-this.rotationSpeed:this.motionData.currentAngle<this.motionData.targetAngle&&(this.rotationSpeed=-this.rotationSpeed)}planeClickEvent(e){e?this.planes.on("click",e=>{this.getTargetAngle(e);this.computeTransitionSpeed();this.shouldChangeDirection()}):this.planes.off()}}$(()=>{let e=new tetragon3d($("#top-layer"),.5);e.animateRotationY(),e.planeClickEvent(!0),Math.easeOutQuad=function(e,t,a,s){return-a*(e/=s)*(e-2)+t};Math.easeOutQuad(.6,54,36,.4)});
//# sourceMappingURL=main.js.map
