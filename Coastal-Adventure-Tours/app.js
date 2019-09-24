//Cycle through quotes

//Variable declaration
let quote1 = document.querySelector('.quote-one');
let quote2 = document.querySelector('.quote-two');
let quote3 = document.querySelector('.quote-three');

//Move from quote to quote
function quoteCycle() {
	// show first quote
	setTimeout(function(){
		quote1.style.display = 'block';
		quote2.style.display = 'none';
		quote3.style.display = 'none';
	}, 0);
	// move to quote 2
	setTimeout(function() {
		quote1.style.display = 'none';
		quote2.style.display = 'block';
		quote3.style.display = 'none';
	}, 4000);
	// move to quote 3
	setTimeout(function() {
		quote1.style.display = 'none';
		quote2.style.display = 'none';
		quote3.style.display = 'block';
	}, 8000);
	// call to turn into cycle
	setTimeout(quoteCycle, 12000);
}

quoteCycle()