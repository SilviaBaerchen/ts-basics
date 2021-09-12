// primitives

let age: number;
age = 12;

let userName: string;
userName = "Max";

let isSubscribed: boolean;
isSubscribed = true;


// complex types

let hobbies: string[]; //array of strings, but can be also of numbers, of booleans, ...
hobbies = ["max", "max", "max"];

let person: { //object declaration: I want this types in this exact order!
    name: string,
    age: number,
};

person = { //object example
    name: "Max", 
    age: 32,
}

let people : { // combine different types: array of objects declaration: I want an array of obects and the objects must have this structure!
    name: string,
    age: number,
}[];


