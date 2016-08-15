"use strict";

function addNumbers(a ,b ,c){
    console.log(a+b+c);
}

var nums = [3,4,5];
addNumbers(nums[0],nums[1],nums[2]);
addNumbers(...nums);

var meats = ['bacon', 'ham'];
var food = ['apples',...meats,'kiwi','rice'];
console.log(food);