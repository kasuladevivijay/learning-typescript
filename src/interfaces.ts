/**
 *  Intefaces can be used in many classes with 'implements' keyword
 */
interface Vehicle{
    drive():any;
}

document.write('--- Interfaces --- <br/>');
class Car implements Vehicle{
    constructor(private wheel:number){}

    drive():void{
        document.write("Car drives with "+this.wheel+" wheels </br>");
    }
}

class Bicycle implements Vehicle{
    constructor(private wheel:number){}

    drive():void{
        document.write("Bicycle drives with "+this.wheel+" wheels </br>");
    }
}

var car = new Car(4);
var bike = new Bicycle(2);

// car.drive();
// bike.drive();

/** Generic Functions using Interfaces */

function GetWheels<w extends Vehicle>(veh:w):number{
    return veh.drive();
}

// Usage
GetWheels(car);
GetWheels(bike);