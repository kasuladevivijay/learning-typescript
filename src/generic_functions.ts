/**
 *  Generic Functions
 */

function GetType<T>(val:T):string{
    return typeof(val);
}

var aStr = 'A String',
    aNum = 13;

document.write('<br/>-- Generic Functions --</br>');
document.write(GetType(aStr)+'<br/>');
document.write(GetType(aNum)+'<br/>');

/***** Generic Classes ****/

// Generic Class
class GenericNumber<T>{
    add: (val1:T, val2:T) => T;
}

// Create a number based function from the Generic class

//  Objects
var aNumber = new GenericNumber<number>();

// defining the method
aNumber.add = function(x,y){
    return x+y;
}

// Usage
document.write('5 + 21 = '+aNumber.add(5,21)+'<br/>');