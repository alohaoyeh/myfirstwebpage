//메인 이미지 슬라이드(자동으로 움직이는 경우)

function move(){
  var firstValue = 0;
  setInterval(function keepMoving() {
  const ul = document.querySelector('.imgsContainer');
  if(firstValue < 2) {
    firstValue = firstValue + 1;
    ul.style.transition = '0.7s';
    ul.style.left = firstValue * -100 + "%";
  } else {firstValue = -1;}
  }, 4000);
}

move();



/* 버튼으로 움직이는 경우
var slideIndex = 0;
MainShowSlides();

function MainPlusSlides(position) {
  var slides = document.getElementsByClassName("imgs");
  var dots = document.getElementsByClassName("img__dot");
  slideIndex += position;
   if (slideIndex > slides.length) {slideIndex = 1}
   else if(slideIndex < 1){slideIndex = slides.length}
   for (i = 0; i < slides.length; i++) {
     slides[i].style.display = "none";  
   }
   for (i = 0; i < dots.length; i++) {
     dots[i].className = dots[i].className.replace(" active", "");
   }
   slides[slideIndex-1].style.display = "block";  
   dots[slideIndex-1].className += " active";
}

function MainCurrentSlide(index) {
  var slides = document.getElementsByClassName("imgs");
  var dots = document.getElementsByClassName("img__dot");
    if (index > slides.length) {index = 1}
    else if(index < 1){index = slides.length}
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
  slides[index-1].style.display = "block";  
  dots[index-1].className += " active";
}

function MainShowSlides() {
  var i;
  var slides = document.getElementsByClassName("imgs");
  var dots = document.getElementsByClassName("img__dot");
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex> slides.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(MainShowSlides, 3000); //Change image every 3 seconds
}
*/


//디자이너 박스 슬라이드 
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("designer__box");
  var dots = document.getElementsByClassName("dot");
  var nextSlides = document.getElementsByClassName("img__next");
    if (n > slides.length) {slideIndex = 1;}    
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
        
        slides[slideIndex-1].style.display = "block";
        dots[slideIndex-1].className += "active";
        slides[slideIndex-1].classList.add("active");
      }



}


/*
const toggleBtn = document.querySelector('.navbar__toggleBtn');
const menu = document.querySelector('.navbar__menu');

toggleBtn.addEventListener('click', ()=> {
    menu.classList.toggle('active');
});
*/

document.addEventListener("DOMContentLoaded", function () {

var btt = document.getElementById('back-to-top'),
  docElem = document.documentElement,
  offset,
  scrollPos,
  docHeight;

docHeight = Math.max(docElem.offsetHeight, docElem.scrollHeight);
if(docHeight != 'undefined'){
  offset = docHeight / 4;
}

window.addEventListener('scroll', function(){
  scrollPos = docElem.scrollTop;
  btt.className = (scrollPos > offset) ? 'visible' : '';
});

btt.addEventListener('click', function(ev){
  ev.preventDefault();
  scrollToTop();
});

function scrollToTop(){
  var scrollInterval = setInterval(function(){
    if(scrollPos != 0){
      window.scrollBy(0,-55);
    } else{
      clearInterval(scrollInterval);}
    }, 15);
}

})