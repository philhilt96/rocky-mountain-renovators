// Cycle through background images

let background = document.querySelector('.background');
let backgroundArr = ['basement', 'store-front-before', 'store-front-after', 'stairs-before', 'stairs-after', 'patio-before', 'patio-after']
let index = 0;

function backgroundLoop() {
	if(index < backgroundArr.length) {
		background.style.backgroundImage = `url(images/${backgroundArr[index]}.jpg)`;
		background.style.backgroundPosition = 'center';
		background.style.backgroundRepeat = 'no-repeat';
		background.style.backgroundSize = 'cover';
		background.style.backgroundAttatchment = 'fixed';
		index++;
	} else {
		index = 0;
	}
	setTimeout(backgroundLoop, 3000);
}

backgroundLoop();

// shrink nav on scroll

let nav = document.querySelector('nav');
let logo = document.querySelector('#logo-svg');

addEventListener('load', function() {
	addEventListener('scroll', function() {
		if(document.documentElement.scrollTop > 100) {
			logo.style.height = '128px';
			nav.style.margin = '32px 0 0 0';
		} else {
			logo.style.height = '192px';
			nav.style.margin = '64px 0 0 0';
		}
	});
});

// Photo gallery

let gallery = document.querySelector('.gallery-container');
let photo = document.querySelectorAll('.photo');
let galleryArr = [];
let arrIndex = 0;
let img = document.querySelector('.photo-enlarge');
let imgClose = document.querySelector('.photo-close');
let leftArrow = document.querySelector('.arrow-left');
let rightArrow = document.querySelector('.arrow-right');
let overlay = document.querySelector('.overlay');

// push image sources into galleryArr
for(let i = 0; i < photo.length; i++) {
	galleryArr.push(photo[i].firstElementChild.src);
}

// enlarge image on click
gallery.addEventListener('click', displayTarget);

function displayTarget(e) {
	overlay.style.background = 'rgba(255,255,255,0.7)';
	overlay.style.zIndex = '100';
	img.style.display = 'flex';
	img.lastElementChild.src = e.target.src;
	arrIndex = galleryArr.indexOf(e.target.src);
}

// move left through gallery

leftArrow.addEventListener('click', function() {
	if(arrIndex > 0) {
		arrIndex--;
	} else {
		arrIndex = 0;
	}
	img.lastElementChild.src = galleryArr[arrIndex];
});

// move right through gallery

rightArrow.addEventListener('click', function() {
	if(arrIndex < 18) {
		arrIndex++;
	} else {
		arrIndex = 18;
	}
	img.lastElementChild.src = galleryArr[arrIndex];
})

// close enlarged image

imgClose.addEventListener('click', function() {
	img.style.display = 'none';
	overlay.style.background = 'rgba(255,255,255,0)';
	overlay.style.zIndex = '0';
})