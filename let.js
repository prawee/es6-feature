"use strict";

let movie = 'Good Will Hunting';

function theNotebook(){
    let movie = 'The Notebook';
    return movie;
}

console.log(movie);
console.log(theNotebook());
console.log(movie);

// output
// Good Will Hunting
// The theNotebook
// Good Will Hunting


function podFunction(){
    let isHorse = true;
    let saying = 'Bacon is good';
    console.log('\nBefore if:', saying);

    if(isHorse){
        let saying = 'I am a horse';
        console.log('Inside if:', saying);
    }

    console.log('After if:', saying);
}
podFunction();

// Before if: Bacon is good
// Inside if: I am a horse
// After if: Bacon is good