'use strict';

const box = document.getElementById("box");
const btns = document.getElementsByTagName('button');
const circles = document.getElementsByClassName('circle');
const hearts = document.querySelectorAll(".heart");
const heart = document.querySelector(".heart") 
const wrapper = document.querySelector('.wrapper');
// hearts.forEach(item => {
//     console.log(item);
// });
box.style.backgroundColor = 'blue';
box.style.width = '100px';
box.style.cssText = "background-color: blue; width: 100px"

btns[1].style.borderRadius = '100%';
circles[0].style.backgroundColor = 'red';

for (let i = 0; i < hearts.length; i++) {
    hearts[i].style.backgroundColor = 'blue';
}

hearts.forEach(item => {
    item.style.backgroundColor = 'black';
});

const div = document.createElement('div');
// const text = document.createTextNode('тут был я');

div.classList.add('black');

// document.body.append(div);
wrapper.append(div);
// wrapper.appendChild(div);
// wrapper.prepend(div);

// hearts[0].before(div); 
// hearts[0].after(div); 

// circles[0].remove();
hearts[0].replaceWith(circles[0]);

div.innerHTML = '<h1>hello world</h1>';
// div.textContent =  'hello';
div.insertAdjacentHTML('beforebegin', '<h2>hi</h2>') 