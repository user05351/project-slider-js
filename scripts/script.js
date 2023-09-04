
const slider = document.querySelector('.slider');
const sliderImages = slider.querySelectorAll('.image');
const sliderLine = document.querySelector('.slider-line');
const arrowLeft = document.querySelector('.arrow-left');
const arrowRight = document.querySelector('.arrow-right');
const dots = document.querySelectorAll('.dot');
const links = document.querySelectorAll('.link-section-2-navigation');
const textCity = document.querySelectorAll('.city-text');
const textArea = document.querySelectorAll('.area-text');
const textTime = document.querySelectorAll('.time-text');

let sliderCount = 0;
let sliderWidth;

arrowLeft.addEventListener('click', prevSlide);
arrowRight.addEventListener('click', nextSlide);


function showSlide () {
    sliderWidth = document.querySelector('.slider').offsetWidth;
    sliderLine.style.width = sliderWidth * sliderImages.length + 'px';
    sliderImages.forEach(item => item.style.width = sliderWidth + 'px');

    rollSlider();
};

showSlide();


function nextSlide() {
    sliderCount++;
    if (sliderCount >= sliderImages.length) sliderCount = 0;
    console.log(sliderCount);
    rollSlider();
};

function prevSlide() {
    sliderCount--;
    if (sliderCount < 0) sliderCount = sliderImages.length -1;
    rollSlider();
    console.log(sliderCount);
};

function rollSlider() {
  sliderLine.style.transform = `translateX(${-sliderCount * sliderWidth}px)`;
};

function thisSlide1(index) {
    dots.forEach(item => item.classList.remove('active-dot'));
    dots[index].classList.add('active-dot');
    links.forEach(item => item.classList.remove('active-link'));
    links[index].classList.add('active-link');
    textCity.forEach(item => item.classList.remove('active-text'));
    textCity[index].classList.add('active-text');
    textArea.forEach(item => item.classList.remove('active-text'));
    textArea[index].classList.add('active-text');
};


dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
    sliderCount = index;
    rollSlider();
    thisSlide1(sliderCount);
    });
});

links.forEach((link, index) => {
    link.addEventListener('click', () => {
    sliderCount = index;
    rollSlider();
    thisSlide1(sliderCount);
    });
});
