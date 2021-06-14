const btnHamburger = document.querySelector('#btnHamburger');
const header = document.querySelector('.header');
const body = document.querySelector('body');
const overlay = document.querySelector('.overlay');
const fadeElement = document.querySelectorAll('.has-fade');

btnHamburger.addEventListener('click', function(){
    console.log('click hamburger');

    if(header.classList.contains('open')){ //close hamburger menu
        body.classList.remove('noscroll');
        header.classList.remove('open');        
        fadeElement.forEach(function(element){
            element.classList.remove('fade-in');
            element.classList.add('fade-out');
        });

    }
    else { //open hamburger menu
        body.classList.add('noscroll');
        header.classList.add('open');
        fadeElement.forEach(function(element){
            element.classList.remove('fade-out');
            element.classList.add('fade-in');
        }); 
    }
});