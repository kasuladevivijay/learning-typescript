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
 class Animal{
     public favFood:string;

     static numOfAnimals:number = 0;

    //  the default method called when a object of this class is created
     constructor(private name:string, private owner:string){
        //  Using the Static field
         Animal.numOfAnimals++;
     }

    //  methods
     ownerInfo(){
         document.write(this.name+' is owned by '+ this.owner+'<br/>');
     }

    //  Static Methods
     static howManyAnimals():number{
         return Animal.numOfAnimals;
     }

     private _weight:number;

    //  Getters and Setters

    get weight():number{
        return this._weight;
    }

    set weight(weight:number){
        this._weight = weight;
    }

 }

//  Object Creation

var julie = new Animal('Julie', 'Naresh');
julie.ownerInfo();

julie.weight = 15;
document.write('weight is: '+julie.weight+'<br/>');
document.write('Number of Animals created are: '+ Animal.howManyAnimals()+'<br/>');

var robin = new Animal('Robin', 'Vijay');
robin.ownerInfo();
document.write('Number of Animals created are: '+ Animal.howManyAnimals()+'<br/>');

// extending class (inheritance) sub classes

class Dog extends Animal{
    constructor(name:string, owner:string){
        super(name, owner);
        Dog.numOfAnimals++;
    }
}

// creating object for sub classes

var soni = new Dog('Soni', 'Munna');
document.write('# of Animals = '+Animal.howManyAnimals()+'<br/>');

// check the instance of subclass
document.write('Is Soni an Animal? '+ (soni instanceof(Animal))+'<br/>');

// check whether a field exists for an object
document.write("Does Soni has a name? "+ ('name' in soni)+'<br/>');