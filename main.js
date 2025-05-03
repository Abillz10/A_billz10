let menu = document.querySelector('#menu');
let navbar = document.querySelector('.navbar');
menu.onclick = () => {
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
}

var swiper = new Swiper(".home-slider", {
spaceBetween: 27, centeredSlides: true,
autoplay: {
delay:3500,
disableOnInteraction:false,
},
pagination: {
el:".swiper-pagination",
clickable: true,
},
loop:true,
});

const search = document.getElementById('search'),
searchBtn = document.getElementById('searchbtn'),
searchClose = document.getElementById('search-close')
searchBtn.addEventListener('click', () => {
  search.classList.add('show-search')
})
searchClose.addEventListener('click', () => {
  search.classList.remove('show-search')
})
const cart = document.getElementById('cart'),
cartBtn = document.getElementById('cartbtn'),
cartClose = document.getElementById('closeCart')
cartBtn.addEventListener('click', () => {
  cart.classList.add('show-cart')
})
cartClose.addEventListener('click', () => {
  cart.classList.remove('show-cart')
})
const searchBar = document.getElementById('text').innerHTML = "you said this";
  
