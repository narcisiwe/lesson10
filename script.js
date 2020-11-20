'use strict';


const mainBook = document.querySelectorAll('.books');
const notMainBook = document.querySelectorAll('.book');


mainBook[0].append(notMainBook[2]);
mainBook[0].prepend(notMainBook[1]);
notMainBook[3].before(notMainBook[4]);

console.log(mainBook);
console.log(notMainBook);

const headTextTwo = document.querySelectorAll('[target="_blank"]');
headTextTwo[2].replaceWith('Книга 3. this и Прототипы Объектов');
console.log(headTextTwo);


const reklama = document.querySelector('.adv');
reklama.classList.remove('adv');


const addChar = document.querySelectorAll('ul');
const chapters = document.querySelectorAll('li');
const newElem = document.createElement('li');
addChar[5].append(newElem);
addChar[5].append(chapters[56]);
newElem.textContent = 'Глава 8: За пределами ES6';

document.body.style.backgroundImage = "url('./image/you-dont-know-js.jpg')";
