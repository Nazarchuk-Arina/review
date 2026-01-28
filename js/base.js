'use strict';
// const a = prompt("Один из последних просмотренных фильмов?", ""),
// b = prompt("На сколько оцените его", ""),
// c = prompt("Один из последних просмотренных фильмов?", ""),
// d = prompt("На сколько оцените его", "");

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

// for (let i = 0; i < 2; i++) {
//     const a = prompt("Один из последних просмотренных фильмов?", ""),
// b = prompt("На сколько оцените его", "");

// if (a != null && b != null && a != ''&& b != '' && a.length >50 && b.length >50) {
//     personalMovieDB.movies[a] = b;
//     console.log("done");
// } else {
//     console.log("error");
// }

// }

// console.log(personalMovieDB);

// const hamburger = 2;
// const fries = 1;

// if (hamburger ===3 && fries) {
//     console.log("Fine!");
// }

// for (let index = 1; index < 10; index++) {
//     console.log(index);
// }

// let result = "";
// const length = 7;

// for (let i = 1; i < length; i++) {
//     for (let j = 0; j < i; j++) {
//         result +='*';  
//     }
//     result +='\n';
// }
// console.log(result);

// function showFirstMessage(params) {
    
// }

// const str = 'test';
// console.log(str.toUpperCase());

// const fruit = 'Some fruit';
// console.log(fruit.indexOf('fruit'));

// const num = 12.2;
// console.log(Math.round(num));

// const test = '12.2px';
// console.log(parseInt(test)); //12
// console.log(parseFloat(test)); //12.2 


// let numberOfFilms;

// function start() {
//     numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

//     while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
//         numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
//     } 
// }

// start();
 
// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false 
// };

// function rememberMyFilms() {
//     for (let i = 0; i < 2; i++) {
//         const a = prompt("Один из последних просмотренных фильмов?", ""),
//     b = prompt("На сколько оцените его", "");
    
//     if (a != null && b != null && a != ''&& b != '' && a.length >50 && b.length >50) {
//         personalMovieDB.movies[a] = b;
//         console.log("done");
//     } else {
//         console.log("error");
//     }
//     }
// }

// rememberMyFilms();

// function detectPersonalLevel() {
//     if (personalMovieDB.count < 10) {
//         console.log("Просмотрено довольно мало фильмов");
//     } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//         console.log("Вы классический зритель");
//     } else if (personalMovieDB.count >= 30) {
//         console.log("Вы киноман");
//     } else {
//         console.log("Произошла ошибка");
//     }
// }

// detectPersonalLevel();

// function showMyDB() {
//     if (personalMovieDB[privat] == false) {
//         console.log(personalMovieDB);
//     } else return;
// }

// function writeYourGenres() {
//     for (let index = 1; index <= 3; index++) {
//         const answer = prompt(`Ваш любимый жанр под номером ${index}`, "");
//         personalMovieDB.genres.push(answer);
//     }
//     return personalMovieDB;
// }

// const obj = new Object();

// const options = {
//     name: 'test',
//     width: 1024,
//     height: 1024,
//     colors: {
//         border: 'black',
//         bg: 'red' 
//     },
//     makeTest: function () {
//         console.log("Test");
//     }
// }

// options.makeTest();

// const {border, bg} = options.colors;
// console.log(border); 

         // console.log(Object.keys(options).length); !!!!!!!!
// delete options.name; 
  
// let counter = 0;
// for (let key in options ) {
//     if (typeof (options[key] === 'object')) {
//         for (let i in options[key]){
//             console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
//             counter++; 
//         } }
//         else {
//             console.log(`Свойство ${key} имеет значение ${options[key]}`);
//             counter++;
//         }
// } 

// const arr = [1,42,24,6,8];
// arr.sort(compareNum);
// console.log(arr);

// function compareNum (a,b) {
//     return a-b; 
// }

// arr.pop(); // удаляет последний элемент
// arr.push(10);

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
    
// }

// console.log(arr);

// for (let value of arr) {
//     console.log(value);
// }

// arr.forEach(function (item, i, arr) {
//     console.log(`${i}: ${item} in ${arr}`);
// })

// const str = prompt("?", "");
// const products = str.split(", ");
// products.sort();
// console.log(products.join('; ')); 

// let a = 5,
//     b = a;

// b = b+5; 

// const obj = {
//     a: 5,
//     b: 1
// };
 
// const copy = obj;

// copy.a = 10;
// console.log(copy);
// console.log(obj); 
// const numbers = {
//     a: 4,
//     b:7,
//     c: {
//         w: 1,
//         d:3
//     }
// }

// const add = {
//     g: 5,
//     v: 9
// }

// const clone = Object.assign({}, add); 

// console.log(Object.assign(numbers, add));
// function copy (mainObj) {
//     let objCopy = {};
    // let key;
    // for (key in mainObj) {
    //     objCopy[key] = mainObj[key];
    // }
//     return objCopy;
// }
 
// const newNumbers = copy(numbers); 
// newNumbers.a = 10;

// console.log(newNumbers);

// const oldArray = ['a', 'b', 'c'];
// const newArray = oldArray.slice(); // just arr copy

// const video = ['youtube', 'rutube', 'vimeo'],
//       blogs = ['wordpress', 'livejournal', 'blogger'],
//       internet = [...video, ...blogs, 'vk', 'facebook'];
//       console.log(internet);

// function log (a, b, c) {
//     console.log(a);
//     console.log(b);
//     console.log(c);
// } 

// const num = [2, 5, 7];

//   
// const array = ['a', 'b']; 
// const newArray = [...array];
// const q = {
//     one: 1,
//     two: 2
// }
// const newObj = {...q};

// const personalPlanPeter = {
//     name: "Peter",
//     age: "29",
//     skills: {
//         languages: ['ru', 'eng'],
//         programmingLangs: {
//             js: '20%',
//             php: '10%'
//         },
//         exp: '1 month'
//     },
//     showAgeAndLangs(object) {
//         const langsArr = object.skills.languages;
//         const langs = langsArr.join('').toUpperCase();
//         const age = object.age;
//         return `Мне ${age} и я владею языками: ${langs}`
//     }
// };
// 3) Создайте метод showAgeAndLangs внутри объекта personalPlanPeter. При его вызове метод будет принимать в себя объект и возвращать строку в нужном виде.

// Пример:

// personalPlanPeter.showAgeAndLangs(personalPlanPeter)
// => 'Мне 29 и я владею языками: RU ENG'

// Заметьте, что возраст и языки подставляются автоматически из объекта, а языки всегда в верхнем регистре (большими буквами). Если данные в объекте поменяются, то и сообщение тоже изменится.

// function showProgrammingLangs(plan) {
// const langs = plan.skills.programmingLangs;
// if (Object.keys(langs).length === 0) {return ""};
// const array = [];

// for (const [key, value] of Object.entries(langs)) {
//     const a = `Язык ${key} изучен на ${value}`;
//     array.push(a)
// }

// const result = array.join("\n")
// console.log(result)
// return result;
// }

// showProgrammingLangs(personalPlanPeter)

// function showExperience({ skills: { exp } }) {
//     console.log(exp);
//     return exp;
// }
// showExperience(personalPlanPeter)


// const someString = 'This is some strange string';

// function reverse(str) {
// const arr = [...str];
// const result = arr.reverse().join("");
// return result;
// }

// reverse(someString);

// Object.setPrototypeOf()

// const soldier = {
//     armor: 100,
//     health: 400,
//     sayHello: function () {
//         console.log("hello");
//     }
// }

// const john = Object.create(soldier); 
// У вас есть небольшой кусочек данных о торговом центре, которые записаны в объекте shoppingMallData. Они содержат массив с данными о магазинах, где указана длина и ширина помещения; высоту помещения; стоимость отопления за 1 кубический метр и бюджет на оплату отопления за месяц.

// Основная задача - это написать функцию isBudgetEnough, которая буде возвращать строку. Если бюджета хватает для отопления всего объема торгового центра - выводится 'Бюджета достаточно', если нет - 'Бюджета недостаточно'. И все 🙂

// Но эта задача содержит несколько подзадач внутри:

// - вычисление общей площади всех магазинов, которая вычисляется как длина магазина, умноженная на его ширину;

// - вычисление общего объема торгового центра, так как цена отопления указана в кубических метрах;

// - определение того, хватает ли бюджета на оплату такого объема;

// - все числа идут без единиц измерения для упрощения, просто цифры и все;

// - функция должна продолжать работать, даже если изменяется количество магазинов, высота, бюджет или подставляется вообще другой объект.
// const shoppingMallData = {
//     shops: [
//         {
//             width: 10,
//             length: 5
//         },
//         {
//             width: 15,
//             length: 7
//         },
//         {
//             width: 20,
//             length: 5
//         },
//         {
//             width: 8,
//             length: 10
//         }
//     ],
//     height: 5,
//     moneyPer1m3: 30,
//     budget: 50000
// }

// function isBudgetEnough(data) {
//     let totalSquare = 0;
//     data.shops.forEach(shop => {
//         totalSquare += shop.width*shop.length;
//     })
//     let totalVolume = totalSquare*data.height;
//     if (totalVolume*data.moneyPer1m3 < data.budget) {
//         return 'Бюджета достаточно';
//     } else {
//         return 'Бюджета недостаточно';
//     }
// }

// isBudgetEnough(shoppingMallData);

// const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam'];

// function sortStudentsByGroups(arr) {
// const althArr = [...arr].sort();
// const first = althArr.slice(0, 3);
// const second = althArr.slice(3, 6);
// const third = althArr.slice(6, 9);
// const rest = althArr.length > 9 ? althArr.slice(9).join(" ") : "-"

// const result = [
//     first,
//     second,
//     third,
//     `Оставшиеся студенты: ${rest}`
// ]
// }

// sortStudentsByGroups(students);
// Но команд может быть только 3 по 3 человека. Напишите функцию sortStudentsByGroups, которая принимает в себя массив строк.

// Внутри она сначала сортирует имена по алфавиту. Затем распределяет учеников по 3 человека в 3 группы по алфавитному порядку. Эти группы должны быть массивами. Как итог, функция возвращает новый массив с тремя командами и строкой как 4й элемент.

// Пример:

// sortStudentsByGroups(students)  =>

// [
//   [ 'Andrew', 'Ann', 'Bernard' ],
//   [ 'Cris', 'Josh', 'Mark' ],
//   [ 'Peter', 'Sam', 'Sandra' ],
//   'Оставшиеся студенты: Takesi'
// ]
// Если убрать одно студента из списка, то результат будет:

// [
//   [ 'Andrew', 'Ann', 'Bernard' ],
//   [ 'Cris', 'Josh', 'Mark' ],
//   [ 'Peter', 'Sam', 'Sandra' ],
//   'Оставшиеся студенты: -'
// ]

//// To string

// console.log(typeof(String(4)));

// console.log(typeof(5 + ''));

// const fontSize = 26 + 'px';

// //// To number

// console.log(typeof(Number('2')));
// console.log(typeof(+'7'));
// console.log(typeof(parseInt('15px', 10)));

// //// To boolean
// console.log(typeof(Boolean('2')));
// console.log(typeof(!!'2'));


const restorantData = {
    menu: [
        {
            name: 'Salad Caesar',
            price: '14$'
        },
        {
            name: 'Pizza Diavola',
            price: '9$'
        },
        {
            name: 'Beefsteak',
            price: '17$'
        },
        {
            name: 'Napoleon',
            price: '7$'
        }
    ],
    waitors: [
        {name: 'Alice', age: 22}, {name: 'John', age: 24}
    ],
    averageLunchPrice: '20$',
    openNow: true
};

function isOpen(prop) {
    return prop ? 'Открыто' : 'Закрыто';
}

console.log(isOpen(restorantData.openNow))

function isAverageLunchPriceTrue(fDish, sDish, average) {
    const firstPrice = +fDish.price.slice(0, fDish.price.length -1);
    const secondPrice = +sDish.price.slice(0, sDish.price.length -1);
    const avPrice = +average.slice(0, average.length -1);
    
    if (firstPrice + secondPrice < avPrice) {
        return 'Цена ниже средней';
    } else {
        return 'Цена выше средней';
    }
}

console.log(isAverageLunchPriceTrue(restorantData.menu[0], restorantData.menu[1], restorantData.averageLunchPrice));

function transferWaitors(data) {
    const copy = Object.assign({}, data);
    copy.waitors = [{name: 'Mike', age: 32}];
    return copy;
}

transferWaitors(restorantData);

// У вас есть объект с данными о ресторане. Начинающий разработчик создал несколько функций, которые работают неправильно и он не может понять почему. Нужно исправить функции так, чтобы они давали всегда правильный результат.

// 1) Функция isOpen не хочет правильно работать. Что мы уже не пробовали подставлять в неё - результат все время неправильный. Необходимо найти причины и исправить.

// 2) Функция isAverageLunchPriceTrue должна брать цены двух любых блюд из меню, складывать их и сравнивать с средним чеком (averageLunchPrice).

// Сейчас функция работает, но постоянно выдает неправильный результат. Ведь из представленного меню сумма двух любых цен всегда будет больше 20. Необходимо найти причину и исправить.

// 3) Функция transferWaitors создана для того, чтобы копировать шаблон данных и передавать их в другой ресторан. Конечно, в другом ресторане будут другие блюда, другие официанты и тп. Сейчас эта функция только в начале разработки и должна менять данные про официантов.

// Но в нынешнем виде мы обнаружили, что после её запуска не только копия данных содержит новых официантов, но и основные данные! В restorantData сотрудник Alice исчезает и заменяется Mike! Необходимо найти причину и немедленно исправить, чтобы данные были разделены.

// P.S. Может показаться сложным, но задача решается очень просто, если вы помните один принцип :)