let hamburger =document.querySelector('.hamburger');
let nav2 = document.querySelector('.nav2');
let close= document.querySelector('.close');

hamburger.addEventListener('click', ()=>{
    hamburger.classList.add('hide');
    nav2.classList.toggle('visible');
    close.classList.remove('hide');
})

close.addEventListener('click', ()=>{
    close.classList.add('hide');
    hamburger.classList.remove('hide');
    nav2.classList.toggle('visible');
})