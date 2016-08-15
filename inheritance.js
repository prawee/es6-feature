"use strict";

class Person{
    constructor(name, age, weight){
        this.name = name;
        this.age = age;
        this.weight = weight;
    }

    displayName(){
        console.log(this.name);
    }

    displayAge(){
        console.log(this.age);
    }

    displayWeight(){
        console.log(this.weight);
    }
}

class Programmer extends Person{
    constructor(name, age, weight, language){
        super(name, age, weight);
        this.language = language;
    }
    displayLanguage(){
        console.log(this.language);
    }
}

let prawee = new Person('Prawee', 28, 160);
prawee.displayName();
prawee.displayAge();
prawee.displayWeight();

console.log('---------------');
let kob = new Programmer('Kob', 18, 165, 'Javascript');
kob.displayName();
kob.displayAge();
kob.displayWeight();
kob.displayLanguage();