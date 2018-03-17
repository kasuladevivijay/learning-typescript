/**
 *  Functions declaration in TS
 */
var getSum = function (num1, num2) {
    return num1 + num2;
};
var sum = getSum(121324, 12324);
document.write('<br/> Functions <br/>');
document.write('Sum from getSum() is ' + sum + '<br/>');
// default and optional parameters in function declarations
var getDiff = function (num1, num2, num3) {
    if (num2 === void 0) { num2 = 2; }
    if (typeof (num3) !== 'undefined') {
        return num1 - num2 - num3;
    }
    return num1 - num2;
};
var diff1 = getDiff(5);
var diff2 = getDiff(5, 2, 3);
document.write('diff1 = ' + diff1 + '<br/>');
document.write('diff2 = ' + diff2 + '<br/>');
//  function with unknown number of arguments
var sumAll = function () {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
    }
    var sum = nums.reduce(function (a, b) { return a + b; }, 0);
    document.write('function with unknown number of arguments <br/>');
    document.write('Sum is: ' + sum + '<br/>');
};
sumAll(1, 3424, 4, 334, 1359, 2450, 35);
