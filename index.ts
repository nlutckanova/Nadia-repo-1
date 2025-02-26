//let vs const
let number: number = 5;
console.log("number", number);

const message: string= "Welcome"


//string
let welcomeMessage:string = "Hello, Peter!"
let test: string = "Ivan";

let welcomeMessageLength: number = welcomeMessage.length;
console.log("welcomeMessageLength", welcomeMessageLength);

//string interpolation
let welcomeMessageDetails: string = 'My welcome message length is ${WelcomeMessageLength}'
let userWelcomeMessage: string = 'Welcome, ${test}'
console.log(welcomeMessageDetails);
//Number
let fisrtNumber: number = 5;
let secondNumber: number = 10;

let result: number = fisrtNumber - secondNumber;
console.log("result", result);

//Number math operations
let add: number = secondNumber + fisrtNumber;
let subtract: number = secondNumber - fisrtNumber;
let multiply: number = secondNumber/fisrtNumber;
let divide: number = secondNumber/ fisrtNumber;

//Boolean (true/false)

let isTrue:boolean=true;
let isGreater: boolean =fisrtNumber >secondNumber
console.log("isGreater", isGreater);
let isLower: boolean = fisrtNumber< secondNumber;
let isEqual: boolean = fisrtNumber === secondNumber;
let isGreaterOrEqual: boolean = fisrtNumber >= secondNumber;
let isLowerOrEqual:boolean = fisrtNumber<= secondNumber;
let areNumberEqualTo: boolean = 5 === fisrtNumber && 10 === secondNumber;
let isAnyNumberEqualTo: boolean = 6 === fisrtNumber || 11 === secondNumber;

// Any
let stringValue: any = "Hello";
stringValue = 10;
stringValue = 10 === 10;
stringValue = [10, 20, 30];

console.log ("stringValue", stringValue);

