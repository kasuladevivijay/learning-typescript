/**
 *  Generic Functions
 */
function GetType(val) {
    return typeof (val);
}
var aStr = 'A String', aNum = 13;
document.write('<br/>-- Generic Functions --</br>');
document.write(GetType(aStr) + '<br/>');
document.write(GetType(aNum) + '<br/>');
/***** Generic Classes ****/
// Generic Class
var GenericNumber = /** @class */ (function () {
    function GenericNumber() {
    }
    return GenericNumber;
}());
// Create a number based function from the Generic class
//  Objects
var aNumber = new GenericNumber();
// defining the method
aNumber.add = function (x, y) {
    return x + y;
};
// Usage
document.write('5 + 21 = ' + aNumber.add(5, 21) + '<br/>');
