'use strict';

//Make navbar transparent when it is scrolled down
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
  if (window.scrollY > navbarHeight)
    navbar.classList.add('navbar--dark');
  else 
    navbar.classList.remove('navbar--dark');
});


//scroll to a specific place when nav is clicked
const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click', (event) => {
  console.log(event.target.dataset.link);
  const target = event.target;
  const link = target.dataset.link;
  if (link == null) {
    return;
  }
  console.log(event.target.dataset.link);
  const scrollTo = document.querySelector(link);
  scrollTo.scrollIntoView({behavior:'smooth'});
});

