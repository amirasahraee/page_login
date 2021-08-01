const singin = document.querySelector('.singinBtn');
const singup = document.querySelector('.singupBtn');
const formBx = document.querySelector('.formBx');
const body = document.querySelector('body');


function load() {
    singup.addEventListener('click', () => {
        formBx.classList.add('active');
        body.classList.add('active');
    })

    singin.addEventListener('click', () => {
        formBx.classList.remove('active');
        body.classList.remove('active');
    })


}