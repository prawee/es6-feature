"use strict";

function* simpleGenerator(){
    yield 'apples';
    yield 'bacon';
    console.log('ok, this is the after bacon....');
    yield 'corn';
}

let simple = simpleGenerator();
console.log(simple.next().value);
console.log(simple.next().value);
console.log(simple.next().value);
console.log(simple.next().value);

console.log('-------------');

function* getNextId(){
    let id = 0;
    while(id < 3)
        yield id++;
}

let createUser = getNextId();
console.log(createUser.next().value);
console.log(createUser.next().value);
console.log('ok, i have to go do something else.....');
console.log(createUser.next().value);
console.log(createUser.next().value);