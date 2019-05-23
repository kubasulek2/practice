/*

let arr = [1,2,3,4];

let last = _.last(arr);


const CreateWatch = function () {
  let running = false,
    duration = 0,
    startTime = 0,
    currentTime = 0,
    stopTime = 0,
    timer = undefined;

  this.getDuration = function () {
    currentTime = new Date();
    duration = (currentTime - startTime)/1000;
    return duration.toFixed(2)
  };

  this.start = function () {
    if (this.running) return;

    let clock = $('.timer');
    startTime === 0 ? startTime = new Date(): startTime = new Date() - (duration * 1000);
    running = true;
    timer = setInterval(()=> {
      duration = this.getDuration;
      clock.text(duration)
    },10)
  };

  this.stop = function () {
    if (!running) return;

    clearInterval(timer);
    stopTime = new Date();
    running = false;
  };

  this.reset = function () {
    this.stop();
    duration = 0;
    startTime = 0;
    currentTime = 0;
    running = false;
    $('.timer')
      .text("0.00");

  };

  this.createHtml = function () {
    let wrapper = $('<div></div>');
    let header = $('<h1>Timer:</h1>');
    let timer = $('<span class="timer">0.00</span>');
    let span = $('<span>s</span>');
    let start = $('<button>start</button>');
    let stop = $('<button>stop</button>');
    let reset = $('<button>reset</button>');
    let clock = $('<div></div>');
    clock
        .append(timer)
        .append(span);
    wrapper
      .append(header)
      .append(clock)
      .append(start)
      .append(stop)
      .append(reset);
    $('body').append(wrapper);
    start.on('click', ()=> this.start());
    stop.on('click', ()=> this.stop());
    reset.on('click', ()=> this.reset())
  }
};

const myWatch = new CreateWatch();
myWatch.createHtml();

*/
/*

let f = (y) => {
  const x = 1;
  return function () {
    return x + y
  }
};

let z = 2;
let f2 = () => {
  z += 2;
};
f2();


let object = {};
let property = "a";
object[property] = 2;
console.log(object);
Object.defineProperty(object,"readOnly",{
  get: function () {
    return 2
  },
  set: function () {
    throw new Error("don't mess up with it")
  }
});



let obj = {
  name: "kuba"
};

Object.defineProperty(obj,'name',{
  writable: false,
  enumerable: false,
  configurable:true
});


let Constructor = function (value) {
  this.value = value
};
let myObj = new Constructor(2);


console.log(Object.getPrototypeOf(myObj) === Constructor.prototype); // !!!!!!!


function Circle(radius) {
  let a = 2;
  console.log(this);  // Circle object{}
  this.radius = radius;
  this.draw = function () {
    console.log(a);
  };
  this.position = {x:0, y:0};
}
let circleTwo = new Circle(2);

console.dir(circleTwo);


let person = {name: "Kuba"};
for (let key in person)
  console.log(key);


let objectBase = Object.getPrototypeOf(person);
let propertyDescriptor = Object.getOwnPropertyDescriptor(objectBase, 'toString');
console.log(propertyDescriptor);


let Person = function (name) {
  this.move = function () {
    console.log('move');
  };
  this.name = name
};

Person.prototype.doSth = function () {
  this.move();
  console.log("do something");
};
let kuba = new Person("Kuba");
kuba.doSth();*/
/*

const Shape = function (color) {
  this.color = color;
};
Shape.prototype.duplicate = function () {
  console.log('aaa');
};


function extend (child, parent) {
  child.prototype = Object.create(parent.prototype);
  child.prototype.constructor = child;
}
extend(Circle,Shape);


let c1 = new Circle(2, 'red');
console.dir(c1);
*/
/*

function mixin(object, ...sources) {
  Object.assign(object,...sources)
}

const canEat ={
  eat: function () {
    this.hunger--;
    console.log('eating');
  }
};

const canWalk = {
  walk: function () {
    console.log('walking');
  }
};

const canSwim = {
  swim: function () {
    console.log('swimming');
  }
};

function Person (hunger) {
  this.hunger = hunger
}
function Fish (hunger){
  this.hunger = hunger
}

mixin(Person.prototype, canEat, canWalk,);
mixin(Fish.prototype, canEat, canSwim,);
const me = new Person(6);
const goldFish = new Fish(4);

console.log(me);
*/

// function HtmlElement (){
//   this.click = function () {
//     console.log('clicked');
//   }
// }
//
// HtmlElement.prototype.focus = function () { console.log('focused') };
//
// function HtmlSelectElement (items=[]){
//   this.items = items;
//   this.add = function (el) { this.items.push(el) };
//   this.remove = function (el) { this.items = this.items.filter((x) => x !== el) };
//   this.render = function () {
//     return `<select>${this.items.map( item => `"/n"  <option>${item}</option>`).join()}</select>`
//   }
// }
// function  HtmlImageElement (src){
//   this.src = src;
//   this.render = function () {
//     return `<img src="${this.src}" />`
//   }
// }
//
// HtmlSelectElement.prototype = new HtmlElement();
// HtmlSelectElement.prototype.constructor = HtmlSelectElement;
//
// HtmlImageElement.prototype = new HtmlElement();
// HtmlImageElement.prototype.constructor = HtmlImageElement;
//
// const e = new HtmlElement();
// const s = new HtmlSelectElement([1,2,3]);
// const i = new HtmlImageElement('https://www.kuba.com');
//
//
// const _pr = Symbol(); //underscore to tylko naming convention
// const _draw = Symbol('method'); //mozna dodac jakas identyfikacje
// class Person {
//   constructor(age) {
//     this.age = age;
//     //private property
//     this[_pr] = 2
//   }
//
//   //Private Method
//   [_draw]() {      // es6 feature "computed property names", wartosc zmiennej w [], bedzie nazwa wlasnosci/metody
//     console.log(this[_pr]);
//   }
//   //Public Method with
//   draw(){
//     this[_draw]()
//   }
//
// }
//
// const me = new Person(32);
// console.log(me); //__proto__ Symbol(): ƒ [_draw]()
// console.log(Object.getOwnPropertyNames(me));//pusty array
// console.log(Object.getOwnPropertySymbols(me));// [Symbol()]
//
// me.draw();
// me[_draw]();
// me[_pr]
// class Mamal{
//   eat(){ console.log('eating') }
// }
//
// const _eyes = new WeakMap();
// class Bat extends Mamal{
//   constructor(legs, carnivorous){ //default arguments optional
//     super(); // i tak musi byc super
//     _eyes.set(this,2);
//     this.legs = legs;
//     this.carnivorous = carnivorous;
//     this.fly = function () {
//       console.log('fly with ' + _eyes.get(this) + " eyes");
//     }
// }
// }
//
// let batman = new Bat(undefined, false);
// batman.eat();
// batman.fly();
// console.log(batman.legs);
// let _count = new WeakMap();
// const _eval = new WeakMap();
// let _items = new WeakMap();
//
// class Stack {
//   constructor(){
//     _count.set(this, 0);
//     _items.set(this, []);
//
//     _eval.set(this, () => {
//       if (_count.get( this ) === 0)
//         throw new Error("Stack is Empty");
//     } );
//   }
//
//   get count(){
//     return _count.get(this)
//   }
//
//   peep(){
//     _eval.get(this)();
//
//     return _items.get(this)[ _items.get(this).length -1 ]
//   }
//   pop(){
//     const items = _items.get(this);
//     _eval.get(this)();
//     _count.set(this, _count.get(this) - 1);
//     return items.pop();
//   }
//   push(val){
//     _items.get(this).push(val);
//     _count.set(this, _count.get(this) + 1);
//     return val
//   }
//
// }
//
// const myStack = new Stack();
$(()=>{
  $('.example .button').on('click', function(){
    $(this).parents('.example').toggleClass('is-transitioned');
  });
});

