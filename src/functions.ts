/**
 *  Functions declaration in TS
 */

let getSum = function(num1:number, num2:number):number{
    return num1+ num2;
}

let sum:number = getSum(121324,12324);

document.write('<br/> Functions <br/>');
document.write('Sum from getSum() is '+sum+'<br/>');

// default and optional parameters in function declarations

let getDiff = function(num1:number, num2 = 2, num3?:number):number{
    if (typeof(num3) !== 'undefined'){
        return num1 - num2 - num3;
    }
    return num1 - num2;
}

let diff1 = getDiff(5);
let diff2 = getDiff(5,2,3);

document.write('diff1 = '+diff1+'<br/>');
document.write('diff2 = '+diff2+'<br/>');

//  function with unknown number of arguments

let sumAll = function(...nums:number[]):void{
    let sum = nums.reduce((a,b)=> a+b, 0);
    document.write('function with unknown number of arguments <br/>');
    document.write('Sum is: '+sum+'<br/>');
}

sumAll(1,3424,4,334,1359,2450,35);
