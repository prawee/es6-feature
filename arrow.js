"use strict";

function circleArea1(r){
    var PI = 3.14;
    return PI * r * r;
}
let circleArea2 = (r) => {
    const PI = 3.14;
    return PI * r * r;
}

let circleArea3 = r => 3.14 * r * r;


console.log(circleArea1(7));
console.log(circleArea2(7));
console.log(circleArea3(7));