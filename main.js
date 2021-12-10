const fa__bars = document.querySelector('.fa-bars');
const nav__ul = document.querySelector('ul.nav__ul');
const burgerItem = document.querySelector('.burgerItem i');
const doC = document.querySelector('.do');
const dd__div = document.querySelector('.dd__div');
const fadown = document.querySelector('.fa-chevron-down');

fa__bars.addEventListener('click',()=>{
  nav__ul.classList.toggle('nav__ulA');
});
burgerItem.addEventListener('click', () => {
  burgerItem.classList.toggle('fa-times')
});
doC.addEventListener('click', () => {
  dd__div.classList.toggle('activ');
  fadown.classList.toggle('fa__aseDeg');
})