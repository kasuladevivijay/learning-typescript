/**
 * Basic datatypes
 */
var myName = 'Vijay', myAge = 26, canVote = true, hobbies = ['playing cricket', 'riding Bike'], others = 'Reading books';
document.querySelector('#main')
    .innerHTML = "My Name is " + myName;
document.write('my Age is ' + myAge + ' Its just a ' + typeof (myAge) + '<br/>');
document.write('Its ' + canVote + " I\'m eligible to Vote! <br/>");
document.write('My Hobbies are: ' + hobbies.toString() + '<br/>');
// String to Number
var strToNum = parseInt("5"), numToStr = 5;
document.write('Number to String: ', numToStr.toString(), ' is a ', typeof (numToStr.toString()) + '<br/>');
// complex datatype using the above interface
var batman = {
    realName: 'Bruce Wayne',
    superName: 'Batman'
};
document.write(batman.realName + ' is ' + batman.superName + '!!<br/>');
var superheroes = [];
superheroes.push({
    realName: 'Clark Kent',
    superName: 'Superman'
}, {
    realName: 'Diana Prince',
    superName: 'Wonder Woman'
});
superheroes.forEach(function (superhero) {
    document.write(superhero.realName + ' is ' + superhero.superName + '<br/>');
});
/** for...in and for...of loops */
var randArray = [5, 6, 7, 8];
document.write('for...in prints out indexes of randArray <br/>');
for (var val in randArray) {
    document.write(val + '<br/>');
}
// use for...of loop to print the actual values of the array
document.write('for...of prints out values of randArray <br/>');
for (var _i = 0, randArray_1 = randArray; _i < randArray_1.length; _i++) {
    var value = randArray_1[_i];
    document.write(value + '<br/>');
}
