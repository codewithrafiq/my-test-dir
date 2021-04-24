console.log("Hello World");
console.log("Hello World I am CodeWithRafiq");

var message:string;
let number:number;
let myBool:boolean;
let myAny:any;
let strArray:string[];
let strArray2:Array<string>;
let numArray:number[];
let anyArray:any[];
let strNumTuple: [string,number];

myAny = "Any Data you Want";
message = "This Is String"
number = 343434;
myBool = true;
strArray = ["str1",'ster2',]
strNumTuple = ['str',4]


console.log(myBool);
console.log(message);
console.log(number);
console.log(myAny);



const addd=(num1:number,num2:number):number=>{
    return num1+ num2;
}

console.log(addd(3,3));

const rFunction = ():void =>{
    console.log("This is Void Function");
}
const aFunction = ():any =>{
    console.log("This Function can Return any Thing");
}