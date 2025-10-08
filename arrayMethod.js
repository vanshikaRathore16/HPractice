let arr = [1,2,3,4,5,6,7,8,9,10];
let arr1 = [1,2,3,4,5,6,7,8,9,10];
//Adding & Removing Elements
// arr.push(11);
// arr.unshift(0);
// arr.pop();
// arr.shift();
// arr.splice(1,9);
// arr.splice(1,0,2);
// arr.slice(2,6);

//Searching / Finding Elements
console.log(arr.indexOf(2));
//Returns -1 if not found.
// console.log(arr.lastIndexOf(2));
// console.log(arr.includes(3));
// arr.find(x => x == 2);
// console.log(arr);
// arr.findIndex(x => x == 2)
// console.log(arr);

//itaration
// arr.forEach(x=> console.log(x));
// let mapp = arr.map((x)=> x * 2);
// console.log(mapp);
// let filterr = arr.filter((x) => x > 3);
// console.log(filterr);
// let sum = arr.reduce((arr,x)=> arr += x,0);
// console.log(sum);
// console.log(arr.some((x)=> x == 2));
// console.log(arr.every((x)=> x > 3));

let obj = {name : "vanshika", city : "ujjain"};
console.log(obj)

let obj2 = new Object({name : "vanshika",city : "indore"});
console.log(obj2)

function obj10(name,person){
       this.name =  name;
       this.person = person;
       this.greet = function(){console.log(hello)}
}
let person = new obj10(atul,indore);

class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    greet(){
        console.log(`${this.name,this.age}`)
    }
}

let obj4 = new Person("vanshika",24)
Object.assign(obj4,{name : "atul", age : 20,city : "harda"})