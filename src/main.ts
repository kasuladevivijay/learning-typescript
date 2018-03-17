/**
 * Basic datatypes
 */
var myName: string = 'Vijay',
    myAge: number = 26,
    canVote: boolean = true,
    hobbies: string[] = ['playing cricket', 'riding Bike'],
    others: any = 'Reading books';

document.querySelector('#main')
    .innerHTML = "My Name is "+ myName;
document.write('my Age is ' + myAge + ' Its just a ' + typeof (myAge) + '<br/>');
document.write('Its ' + canVote + " I\'m eligible to Vote! <br/>");
document.write('My Hobbies are: '+hobbies.toString()+'<br/>');

// String to Number
 var strToNum: number = parseInt("5"),
    numToStr: number = 5;

document.write('Number to String: ', numToStr.toString(), ' is a ', typeof(numToStr.toString())+'<br/>');

/** Interfaces */
// Interfaces can be used to create complex data types using the keyword 'interface'

interface SuperHero{
    realName: string;
    superName: string;
}

// complex datatype using the above interface

var batman: SuperHero = {
    realName: 'Bruce Wayne',
    superName: 'Batman'
}

document.write(batman.realName+' is '+ batman.superName+'!!<br/>');

var superheroes: SuperHero[] = [];

superheroes.push({
    realName: 'Clark Kent',
    superName: 'Superman'
},{
    realName: 'Diana Prince',
    superName: 'Wonder Woman'
});

superheroes.forEach(function(superhero){
    document.write(superhero.realName+ ' is '+superhero.superName+'<br/>');
});

/** for...in and for...of loops */
var randArray:number[] = [5,6,7,8];

document.write('for...in prints out indexes of randArray <br/>');
for(var val in randArray){
    document.write(val +'<br/>');
}

// use for...of loop to print the actual values of the array
document.write('for...of prints out values of randArray <br/>');
for(var value of randArray){
    document.write(value +'<br/>');
}

