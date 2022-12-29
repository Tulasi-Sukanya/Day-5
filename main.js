// Hoisting
console.log(msg)
var msg = "a variable is hoisted"

var message="A variable is hoisted"
console.log(message);


// Temporal Dead Zone
function tDZ(){
    console.log(a);
    console.log(b);
    console.log(c);
    let a=1;
    const b=2;
    var c=10;
}
tDZ();

// map and filter in arrays
let numbers=[1,2,3,4,5,6,7,8,9]
let multiply=numbers.map(item=>item * 5)
console.log(multiply);

let ages=[10,22,30,12,25,19,28,40,50]
let ageToVote=ages.filter(item=>item >= 18)
console.log(ageToVote);

let sum=numbers.reduce((a,b)=>a+b,0)
console.log(sum)

let alpha=["c","d","p","c","d"]
let result=alpha.reduce((acc,curr)=>{
    console.log(curr)
    console.log(acc)
    if(acc[curr]){
        acc[curr]+=1;
    }
    else{
        acc[curr]=1;
    }
    return acc;
},[])
//},{}) it will also works...
console.log(result);

let a=numbers.find(num=>num)
console.log(a)

let arr=[11,22,33,44,55]
let increment=arr.forEach(item=>item+5)
console.log(increment)

// async await
let promise = new Promise(function(resolve,reject){
    setTimeout(()=>{
        resolve("Promise resolved")
    },3000)
})

async function myFunction(){
    let result=await promise;
    console.log(result);
}
myFunction();

//symbol
const sym1 = Symbol();
const sym2 = Symbol("first");
const sym3 = Symbol("second");
Symbol("first") === Symbol("second");