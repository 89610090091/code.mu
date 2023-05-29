// Tasks on JavaScript mathematical functions
// Tasks to solve

// percentage of balance %

// 1
let a = 10;
let b = 3;
console.log(a % b);


// 2
let a = 10;
let b = 3;

if (a % b == 0) {
    console.log('yes');
} else {
    console.log('no');
}


// 3 
let st = 2 ** 10;
console.log(st);


// 4 
console.log(Math.sqrt(245));


// 5
let arr = [4, 2, 5, 19, 13, 0, 10];

let res = 0;
for (i = 0; i < arr.length; i++) {
    res += arr[i];
}
console.log(Math.sqrt(res));


// 6
let num = 379;
let numRes = Math.sqrt(num);

alert(Math.round(numRes));
alert(numRes.toFixed([1]));
alert(numRes.toFixed([2]));

// 7  
let num = 587;
let res = Math.sqrt(num);

let obj = {};
obj.ceil = Math.floor(res);
obj.floor = Math.ceil(res);


// 8
console.log(Math.max(4, -2, 5, 19, -130, 0, 10));
console.log(Math.min(4, -2, 5, 19, -130, 0, 10));


// 9
Math.floor(Math.random() * 100)


// 10
let arr = [];
for (i = 0; i < 10; i++) {
    arr[i] = Math.floor(Math.random() * 100);
}


// 11
let a = -7;
let b = 5;

console.log(Math.abs(a - b));


// 12
let a = 3;
let b = 5;
let c = a - b;

console.log(Math.abs(c));


// 13
let arr = [12, 15, 20, 25, 59, 79];

let res = 0;
for (i = 0; i < arr.length; i++) {
    res += arr[i];
}

console.log(res / 2);


// 14
function factorial(n) {
    let result = 1;
    while (n) {
        result *= n--;
    }
    console.log(result)
}

factorial(4);                               