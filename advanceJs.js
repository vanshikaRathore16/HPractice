const sum = ()=> console.log("arrow funcation");
sum();
const sum1 = (a,b) => a + b;
console.log(sum1(2,4));
const sum2 = a => console.log(a);
sum2(2);

// const getData = async()=>{
//     try{
//        let responce = await fetch("https://dummyjson.com/products");
//        let data = await responce.json();
//        console.log(data);
//     }catch(err){
//         console.log(err);
//     }
// }
// getData();

// An arrow function is a shorter and cleaner way to write functions in JavaScript, introduced in ES6 (2015).
// It uses the => (fat arrow) syntax.

let number = [1,2,3,5];
const[x,y,z] = number;
console.log(x,y,z)

let obj = {
    name : "vanshika",
    age : "age",
    marks : {hindi : 20}
}

const {name,age,marks : {hindi}} = obj;
console.log(name,age,hindi);

let arr = [1,2,3];
let arr1 = [4,5,6];
let copy = [...arr,...arr1];
console.log(copy);
let str = "hello";
let chars = [...str];
console.log(chars);

function argu(...num){
     const sum = num.reduce((arr,curr)=> arr+= curr);
    console.log(sum);
}
argu(1,2,3,4)
// const let
// promice
// class
// arrow
// descring funcation
// templet litral 
// rest and spread parameter
// for of/in 
// module

function fun(){
    console.log("hello world")
}
function fun2(name,fun){
    console.log(name);
    fun();
}

fun2("vanshika",fun)
// map
//foreach
// reduce
// filter
let arr3 = [1,2,3,4,5,6,7];
let mapp = arr3.map((item) => item * 2);
console.log(mapp);
let resucee = arr.reduce((arr,curr)=> arr += curr);
console.log(resucee);
let filterr = arr.filter((item) => item  % 2 == 0);
console.log("hello",filterr);
let findd = arr.find((item)=> item % 2 == 0);
console.log(findd);
let same = arr.some((item)=> item % 2 == 0);
console.log(same);

const greet = (name,callback)=>{
     callback();
    console.log(`hello ${name}`)
   
}

function goodBye(){
    console.log("good bye")
}

greet("vanshika",goodBye)

function fun5(){
    return function(y){
        console.log(y);
    }
}

// function promice(){
//     return fetch("https://dummyjson.com/products")
//     .then(res => res.json());
// }

// promice().
//      then((msg)=> console.log(msg))
//      .catch((err)=> console.log(err));


const p1 = Promise.resolve("success")
const p2 = Promise.reject("reject")
const p3 = Promise.resolve("success")
.then((msg) => console.log(msg))
.catch((err)=> console.log(err))
Promise.all([
    p1,p2,p3
]).then((msg) => console.log(msg))
.catch((err)=> console.log(err));


let promice = new Promise((resolve,reject)=>{
    fetch("https://dummyjson.com/products")
    .then(res => res.json())
    .catch(err => reject(err))
})

function agefind(age){
    if(age < 18){
        throw new Error("error")
    }
    return "access"
}

try{
    console.log(agefind(8))
}catch(err){
    console.log(err.message)
}