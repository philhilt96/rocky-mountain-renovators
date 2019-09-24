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
		wrapper.style.display = 'block';
	} else {
		wrapper.style.display = 'none';
	}
}
