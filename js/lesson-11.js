'use strict';

// ********************* Типи даних ********************************


// ********************* ПРОСТІ ТИПИ ДАНИХ *************************

// Числовий тип даних 4, 4.6, infinity, NaN

let number = 4.6;

console.log(4/0); // Infinity
console.log(-5/0); // -Infinity
console.log('string' * 2); // NaN (Not a Number);

// Рядок (string) - повинен бути оточений лапками

const person = 'Alex';

// Логічний тип даних (boolean) - true, false (так, ні)

const bool = false;

// Null - неіснуючий об'єкт

// Undefined - існуючий об'єкт, який не містить ніякого значення

let something;

console.log(something); // undefined



// ********************* Комплексні типи даних ***********

// ********************* ОБ'ЄКТИ *************************

const obj = {
	name: 'John', // name - ключ, 'John' - значення
	age: 25, // властивосты об'єктів - рядки
	isMarried: false,
};

console.log(obj.name);
console.log(obj['age']);

// ********************* СПЕЦ ОБ'ЄКТИ *************************
// Масиви - об'єкт, в якому дані йдуть строго по порядку 
//            0           1            2   3            4  5   ключі(індекси) масиву, нумерація починаєтся з 0
const arr = ['plum.png', 'orange.jpg', 6, 'apple.bmp', {}, []];

console.log(arr[0]); 

////////////////////////////


