// Count variable for toggle to check if odd or even
let count = 0;

// target bars icon and target menu
let hamburger = document.querySelector('.hamburger');
let wrapper = document.querySelector('.hamburger-wrapper');

// Adjust count with click of bar icon and toggle
hamburger.addEventListener('click', function(e) {

	count += 1;

	toggle();
	e.preventDefault();
})

//Function to toggle menu
function toggle() {
	if(count % 2 === 1) {
		wrapper.style.top = '0';
		wrapper.style.animation = 'menu-down 0.7s ease-out';
	} else {
		wrapper.style.top = '-282px'
		wrapper.style.animation = 'menu-up 0.7s ease-out';
	}
}
