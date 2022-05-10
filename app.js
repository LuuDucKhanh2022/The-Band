 // Slideshow
let slideIndex = 0
showSlides()
function showSlides() {
    let i
    let slides =document.getElementsByClassName('slide-item');
    for (i =0;i < slides.length;i++) {
        slides[i].style.display= "none";
    }
    
    if (slideIndex == slides.length) {slideIndex=0};
    slides[slideIndex].style.display = 'block';
    slideIndex++;
    
    setTimeout(showSlides,3000)

}



var header = document.getElementById('header');
var mobileMenu = document.getElementById('mobile-menu');
var headerHeight = header.clientHeight;
// Tự động đóng/mở menu mobile
mobileMenu.onclick = function() {
var isClose = header.clientHeight === headerHeight;
if (isClose) {
header.style.height = 'auto';
} else {
header.style.height = null;
}
}

// tự động đóng khi chọn menu item
var menuItems= document.querySelectorAll('#nav li a[href*="#"]');
console.log(menuItems);

for (var i = 0;i<menuItems.length;i++)
{
var menuItem = menuItems[i];
menuItem.onclick = function(event){
var isParentMenu = this.nextElementSibling && this.nextElementSibling.classList.contains('subnav');
if (isParentMenu)
{
event.preventDeFault();
}
else
{
header.style.height = null;
}

}
}
//ẩn hiện buy tickets modal
const buyBtns = document.querySelectorAll('.js-buy-tickets')
const modal = document.querySelector('.modal')
const modalClose =document.querySelector('.modal-close')
const modalContainer = document.querySelector('.modal-container')
function showBuyTickets() {
modal.classList.add('open')
} 

function hideBuyTickets() {
modal.classList.remove('open')
}

for (const buyBtn of buyBtns) {
buyBtn.addEventListener('click',showBuyTickets)
}

modalClose.addEventListener('click',hideBuyTickets)
modal.addEventListener('click',hideBuyTickets)

modalContainer.addEventListener('click',function (event) {
event.stopPropagation()
})
