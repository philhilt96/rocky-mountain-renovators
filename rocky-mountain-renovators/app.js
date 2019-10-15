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

let gallery = document.querySelectorAll('.photo');
let img = document.querySelector('.photo-enlarge');
let imgClose = document.querySelector('.photo-close');
let leftArrow = document.querySelector('.arrow-left');
let rightArrow = document.querySelector('.arrow-right');
let overlay = document.querySelector('.overlay');

// enlarge image on click
function clickLoop() { 

	for(let i = 0; i < gallery.length; i++) {
		let count = 0;
		gallery[i].addEventListener('click', function() {
			overlay.style.background = 'rgba(255,255,255,0.7)';
			overlay.style.zIndex = '100';
			img.style.display = 'flex';
			img.lastElementChild.src = gallery[i].lastElementChild.src;
			count = i;
			leftArrow.addEventListener('click', function() {
				count--;
				if(count >= 0) {
					img.lastElementChild.src = gallery[count].lastElementChild.src;
				} else {
					count = 0;
				};
			});
			rightArrow.addEventListener('click', function() {
				count++;
				if(count <= 18) {
					img.lastElementChild.src = gallery[count].lastElementChild.src;
				} else {
					count = 18;
				}
			});
		});
	}
}

clickLoop();


// close enlarged image
imgClose.addEventListener('click', function() {
	img.style.display = 'none';
	overlay.style.background = 'rgba(255,255,255,0)';
	overlay.style.zIndex = '0';
})