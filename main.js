// Task 1.Search and replace
// Replace all @ with '!'

let strReplace = 'aaa@bbb@ccc';
alert(strReplace.replace('@', '!'));

// To replace all matches, 
// let's use a global search with a regular expression:

let strRegular = 'aaa@bbb@ccc';
alert(strRegular.replace(/@/g, '!'));

// Task 2.
// Substr, substring, slice methods
// Cut 'bbb' in three different ways substr, substring, slice

let strMethods = 'aaa bbb ccc';
alert(strMethods.substring(4, 7));
alert(strMethods.slice(4, 7));

// Task 3 Date format conversion
let str = '2025-12-31'; // '31/12/2025'.
let arr = split('-');
let newStr = arr[2] + '/' + arr[1] + '/' + arr[0];

// Tasks to solve
// 1
let str = 'js';
console.log(str.toUpperCase());

// 2
let str = 'JS';
console.log(str.toLowerCase());

// length, substr, substring, indexOf
// 3
let str = 'Im learning the language!';
console.log(str.length);

// 4
let str = 'Im learning the language';

alert(str.substring(2, 5));
alert(str.slice(1, 5));

// 5
let str = 'Im learning the language';
console.log(str.indexOf('учу')); // учу

// 6 
let str = 'What is Lorem Ipsum?';
let n = 12;
let res = 0;
if (str.length > n) {
    alert(res = str.slice(1, 5) + '...');
} else {
    alert(str);
}

// Replace
// 7
let str = 'Im learning the language';
alert(str.replace(/-/g, '!'));

// Split
// 8
let str = 'Im learning the language';
const words = str.split(' ');
console.log(words);

// 9
let str = 'Im learning the language!';
const words = str.split('');
console.log(words);

// 10
let date = '2025-12-31';
let arr = date.split('-');
let newStr = arr[2] + '.' + arr[1] + '.' + arr[0];
alert(newStr);

// Join
// 11
let arr = ['Im', 'learning', 'the javascript', '!'];
let str = arr.join('+');

// 12
let str = 'string';
alert(str[0].toUpperCase() + str.slice(1));

//13
let str = 'every word';
let words = str.split(' ')

for (let i = 0; i < words.length; i++) {
    words[i] = words[i].slice(0, 1).toUpperCase()
        + words[i].slice(1);
}

let result = words.join(' ');
console.log(result);