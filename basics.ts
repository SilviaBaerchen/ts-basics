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


// type inference
let course = "React" //at var declaration TS knows already which kind of type to expect, even if not explicitly declared

//course = 1234 ERROR!! IT ALREADY KNOWS TO EXPECT A STRING; NOT A NUMBER1

//Union Types - allow to mix different data types. They must be explicitly declared and in this case this is not redundant! DUH! 
let student: string | number | boolean = "Angela";
student = 1234;
student = false;

//type alias

type Person = { //declare your own customized type (Beware of = vs :)
    name: string,
    age: number,
    isBachelor: boolean,
}

let newStudent: Person; //use it for a var

newStudent = { //example (Beware of = vs :)
    name: "Anna",
    age: 32,
    isBachelor: true,
}

let newMasterClass: Person[]; //example of array of type person

// Functions & types

function multiply(a: number, b: number): number  {// in this case it is redundant to specify the type of the result of the function, sice TS already assumes that two numbers give a number as result
    return a * b;
}

function divide(a: number, b: number): number | string  { //in this case it is NOT redundant to specify the type(s) of the result
    return a / b;
}

function printOut(value: any) {
    console.log(value) //this function never returns, sincethe type is not defined
}

// Generics

function pushIntoTheArray<T>(array: T[], value:T) {
    const newArray = [value, ...array];
    return newArray;
}

const demoArray = [1, 2, 3];

const updatedArray = pushIntoTheArray(demoArray, -1); //output [-1, 1, 2, 3]
const stringArray = pushIntoTheArray(["a", "b", "c"], "d")

//Generics are flexible types
// TS knows that it expects a value, and an array full of this same values
// TS just has to check wheter the value has the same value
//in the first example it is type number, in the second example it is string and both are allowed
//because TS doesnt care as long as both have the same type 