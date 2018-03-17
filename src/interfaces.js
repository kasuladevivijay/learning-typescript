document.write('--- Interfaces --- <br/>');
var Car = /** @class */ (function () {
    function Car(wheel) {
        this.wheel = wheel;
    }
    Car.prototype.drive = function () {
        document.write("Car drives with " + this.wheel + " wheels </br>");
    };
    return Car;
}());
var Bicycle = /** @class */ (function () {
    function Bicycle(wheel) {
        this.wheel = wheel;
    }
    Bicycle.prototype.drive = function () {
        document.write("Bicycle drives with " + this.wheel + " wheels </br>");
    };
    return Bicycle;
}());
var car = new Car(4);
var bike = new Bicycle(2);
// car.drive();
// bike.drive();
/** Generic Functions using Interfaces */
function GetWheels(veh) {
    return veh.drive();
}
// Usage
GetWheels(car);
GetWheels(bike);
