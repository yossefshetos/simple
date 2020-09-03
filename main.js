// Convert All Images To Array
var slides = Array.from(document.querySelectorAll('.home img'));

// Slides Count
var slidesCount = slides.length;

// Current Slide
var currentSlide = 1;

// Find nextBtn & prevBtn
var prevBtn = document.getElementById('pervious'),
    nextBtn = document.getElementById('next');

// Find MenuBtn
var menuBtn = document.getElementById('menu');
    ul = document.getElementById('ul');


menuBtn.onclick = function() {

    ul.classList.add('display-block');
    menuBtn.classList.add('display-none');

}

prevBtn.onclick = function() {

        
    if(prevBtn.classList.contains('disabled')) {

    } else {

        currentSlide--;
        checkChange()
    }

}

nextBtn.onclick = function() {
    
    if(nextBtn.classList.contains('disabled')) {

    } else {

        currentSlide++;
        checkChange()
    }
}

function checkChange() {

    removeActive()

    slides[currentSlide - 1].classList.add('active');

    if(currentSlide == 1) {

        prevBtn.classList.add('disabled')

    } else {

        prevBtn.classList.remove('disabled') 

    }

    if(currentSlide == slidesCount) {

        nextBtn.classList.add('disabled')

    } else {

        nextBtn.classList.remove('disabled') 

    }

}

checkChange();

function removeActive() {


    slides.forEach(function(imgs) {

        imgs.classList.remove('active')

    })

}