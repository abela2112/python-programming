// function Dog(name) {
//   this.name=name;
//     this.bark = function () {
//       console.log("Woof");
//     };
//   }
//   Dog.prototype = {
//     constructor: Dog,
//     numLegs: 4,
//     eat: function () {
//       console.log("EAT");
//     },
//   };
//   const newDog=new Dog("bobi")
//   console.log(newDog);
  
//   // const newDog = Object.create(Dog.prototype);
//   // console.log(newDog.constructor === Object);
//   // console.log(newDog);
//   // console.log(typeof Dog.prototype);
//   // function argumentCount(){
//   //   console.log(arguments.length)
//   //   for(let i=0;i<arguments.length;i++){
//   //       console.log(argumentCount.arguments[i])

//   //   }
//   // }
//   // argumentCount(2,4,6);
// function Car(name,speed){
//   this.name=name;
//   this.speed=speed;

// }
// Car.prototype.accelerate=function(){
//   this.speed+=10;
//   console.log(`${this.name} is going ${this.speed}Km/h`)
// }
// Car.numberOfTyre=function(){
// return 4
// }
// Car.prototype.brake=function(){
//   this.speed-=5;
//   console.log(`${this.name} is going ${this.speed}Km/h`)
// }
// function ElectricCar(name,speed,charge){
//   Car.call(this,name,speed);
//   this.charge=charge;

// }

// ElectricCar.prototype=Object.create(Car.prototype)
// ElectricCar.prototype.chargeBattery=function(chargeto){
//   this.charge=chargeto;
// }
// ElectricCar.prototype.accelerate=function(){
//   this.charge-=1;
//   this.speed+=10;

//   console.log(`${this.name} is going ${this.speed}Km/h and sets the battery charge to  ${this.charge}`)

// }
// const car1=new ElectricCar('Tesla',120,45)
// car1.chargeBattery(34)
// const car2=new Car('Mercedes',95)
// car1.accelerate();
// car1.accelerate()
// car1.brake()

// console.log(car1)
//we have a static methods in which only the class(constructor) can access or it's not prototype method
// for example Array.from(...) in which creates an array 
// [0,1,2].from() is an error because Array.from() is a static 
// const personProto={
//   calcBirthYear:function(){
// return 2037-this.age;
//   },
//   constructor:function(name,age){
//     this.name=name;
//     this.age=age;

//   },
//   getName:function(){
//     console.log(`my name is ${this.name} and i am ${this.age} years old.`)
//   }
// }
// const student=Object.create(personProto)
// student.constructor=function(name,age,course){
//   personProto.constructor.call(this,name,age);
//   this.course=course;
// }

// student.introduce=function(){
//   console.log(`my name is ${this.name} and i am ${this.age} years old.
//   and i study ${this.course}`)

// }
// const marta=Object.create(student)
// marta.constructor('marta',23,'Electrical engineering')
// marta.introduce()


class Car{
  
  constructor(name,speed){
    this.name=name;
    this.speed=speed;
  }
  accelerate(){
       this.speed+=10;
       console.log(`${this.name} is going ${this.speed}Km/h`)
       return this;
     }
  brake(){
      this.speed-=10;
      console.log(`${this.name} is going ${this.speed}Km/h`)
      return this;
    }
  get speedUs(){
    return `${this.name} is going ${this.speed} km/h`
  }
  set speedUs(speed){
    this.speed=speed;
  }
  static numberOfTyre(){
    return `It has 4 tyre`
  }
}
class ElectricCar extends Car{
  #charge;
  constructor (name,speed,charge){
    super(name,speed)
    this.#charge=charge;
  }
    accelerate(){
      this.speed+=10;
      this.#charge--;
      console.log(`${this.name} is going ${this.speed}Km/h and charge is set to ${this.#charge}`)
      return this
  
    }
    chargeBattery(chargeto){
        this.#charge=chargeto;
        return this;
  
  }
  get charge(){
    return this.#charge
  }
}
const Bmw=new ElectricCar('Bmw',120,23);
console.log(Bmw.speedUs)
Bmw.accelerate()
Bmw.speedUs=150;
console.log(Bmw.speedUs)
Bmw.chargeBattery(34).accelerate().accelerate().brake();
console.log(Bmw.speedUs)
console.log(Bmw.charge)

//console.log(Bmw.speedUs)
//console.log(Car.numberOfTyre())
