"use strict";

class Person{
    constructor(name, age, weight){
        this.name = name;
        this.age = age;
        this.weight = weight;
    }
    displayWeight(){
        console.log(this.weight);
    }
}

let prawee = new Person('Prawee', 88, 160);
let kob = new Person('Kob', 18,165);
prawee.displayWeight();
kob.displayWeight();