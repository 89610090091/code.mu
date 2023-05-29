// Tasks on the basics of working with arrays and objects

let arr = [1, 2, 3, 4, 5];

let arr = [];
arr[0] = 1;
arr[1] = 2;
arr[2] = 3;
arr[3] = 4;
arr[4] = 5;


// 
let arr = {
    'ru': ['голубой', 'красный', 'зеленый'],
    'en': ['blue', 'red', 'green'],
};

// Tasks to solve

// 1
let arr = ['a', 'b', 'c'];

alert(arr);


// 2
let arr = ['a', 'b', 'c'];

alert(arr[0]);
alert(arr[1]);
alert(arr[2]);


// 3 
let arr = ['a', 'b', 'c', 'd'];

alert(arr[0] + ' + ' + arr[1] + ' ,' + arr[2] + ' + ' + arr[3]);


// 4
let arr = [2, 5, 3, 9];

alert(arr[0] * arr[1] + arr[2] * arr[3]);


// 5
let obj = { a: 1, b: 2, c: 3 };

alert(obj['c']);


// 6
let obj = { Коля: '1000', Вася: '500', Петя: '200' };

alert(obj['Коля']);
alert(obj['Петя']);


// 7
let obj = {
    1: 'Пн',
    2: 'Вт',
    3: 'Ср',
    4: 'Чт',
    5: 'Пт',
    6: 'Суб',
    7: 'Вс',
};

alert(obj['7']);


// 8
let obj = {
    1: 'Пн',
    2: 'Вт',
    3: 'Ср',
    4: 'Чт',
    5: 'Пт',
    6: 'Суб',
    7: 'Вс',
};

let day = obj['7'];

alert(day);


// 9 
let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

alert(obj[1][0]);


// 10
let obj = {
    js: ['jQuery', 'Angular'],
    php: 'hello',
    css: 'world'
};

alert(obj['js'][0]);


// 11
let arr = {
    'ru': ['пн', 'вт', 'ср', 'чт', 'пт', 'суб', 'вск'],
    'en': ['mon', 'tue', 'wed', 'th', 'fr', 'sat', 'sun']
};

alert(arr['ru'][0]);
alert(arr['en'][2]);


// 12
let arr = {
    'ru': ['пн', 'вт', 'ср', 'чт', 'пт', 'суб', 'вск'],
    'en': ['mon', 'tue', 'wed', 'th', 'fr', 'sat', 'sun']
};

let lang = arr['ru'];
let day = [0];
alert(lang[day]);
