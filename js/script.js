const buttons = document.querySelectorAll('button'),
      wrapper = document.querySelector('.btn-block');

console.log(buttons[0].classList.add('red'));
console.log(buttons[0].classList.remove('blue'));
console.log(buttons[0].classList.toggle('blue'));

buttons[0].addEventListener('click', () => {
    if (!buttons[1].classList.contains('red')) {
        buttons[1].classList.add('red');
    } else {
        buttons[1].classList.remove('red');
    }
});

wrapper.addEventListener('click', (event) => {
if (event.target && event.target.tagName === 'BUTTON') {
    console.log('hello');
}
});