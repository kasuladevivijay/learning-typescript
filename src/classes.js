var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 *  Classes are going to describe real-world objects by defining
 *  their attributes called as fields and
 *  their capabilities called as methods.
 *
 *  1. use 'class' keyword
 *  2. can define public, private and protected fields
 *  3. Can create static fileds that are shared across every object that is created, generally static
 *      values are not related to the classes but they are useful.
 *  4. Can create class static methods too
 *
 */
document.write('<br/> Classes <br/>');
var Animal = /** @class */ (function () {
    //  the default method called when a object of this class is created
    function Animal(name, owner) {
        this.name = name;
        this.owner = owner;
        //  Using the Static field
        Animal.numOfAnimals++;
    }
    //  methods
    Animal.prototype.ownerInfo = function () {
        document.write(this.name + ' is owned by ' + this.owner + '<br/>');
    };
    //  Static Methods
    Animal.howManyAnimals = function () {
        return Animal.numOfAnimals;
    };
    Object.defineProperty(Animal.prototype, "weight", {
        //  Getters and Setters
        get: function () {
            return this._weight;
        },
        set: function (weight) {
            this._weight = weight;
        },
        enumerable: true,
        configurable: true
    });
    Animal.numOfAnimals = 0;
    return Animal;
}());
//  Object Creation
var julie = new Animal('Julie', 'Naresh');
julie.ownerInfo();
julie.weight = 15;
document.write('weight is: ' + julie.weight + '<br/>');
document.write('Number of Animals created are: ' + Animal.howManyAnimals() + '<br/>');
var robin = new Animal('Robin', 'Vijay');
robin.ownerInfo();
document.write('Number of Animals created are: ' + Animal.howManyAnimals() + '<br/>');
// extending class (inheritance) sub classes
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name, owner) {
        var _this = _super.call(this, name, owner) || this;
        Dog.numOfAnimals++;
        return _this;
    }
    return Dog;
}(Animal));
// creating object for sub classes
var soni = new Dog('Soni', 'Munna');
document.write('# of Animals = ' + Animal.howManyAnimals() + '<br/>');
// check the instance of subclass
document.write('Is Soni an Animal? ' + (soni instanceof (Animal)) + '<br/>');
// check whether a field exists for an object
document.write("Does Soni has a name? " + ('name' in soni) + '<br/>');
