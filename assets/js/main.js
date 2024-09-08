/*
	Miniport by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var	$window = $(window),
		$body = $('body'),
		$nav = $('#nav');

	// Breakpoints.
		breakpoints({
			xlarge:  [ '1281px',  '1680px' ],
			large:   [ '981px',   '1280px' ],
			medium:  [ '737px',   '980px'  ],
			small:   [ null,      '736px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Scrolly.
		$('#nav a, .scrolly').scrolly({
			speed: 1000,
			offset: function() { return $nav.height(); }
		});

	// Get the modal elements
	var modals = document.querySelectorAll('.modal');
	var modalTriggers = document.querySelectorAll('.modal-trigger');
	var spans = document.getElementsByClassName("close");

	// Open the modal
	modalTriggers.forEach(function(trigger) {
		trigger.onclick = function(event) {
			event.preventDefault();
			var modal = document.querySelector(this.getAttribute('href'));
			modal.style.display = "block";
			setTimeout(() => {
				modal.classList.add('show');
			}, 10); // Slight delay to ensure display:block is applied before adding the show class
		}
	});

	// Close the modal
	for (var i = 0; i < spans.length; i++) {
		spans[i].onclick = function() {
			var modal = this.parentElement.parentElement;
			modal.classList.remove('show');
			setTimeout(() => {
				modal.style.display = "none";
			}, 500); // Match this duration with the CSS transition duration
		}
	}

	// Close the modal when clicking outside of it
	window.onclick = function(event) {
		if (event.target.classList.contains('modal')) {
			event.target.classList.remove('show');
			setTimeout(() => {
				event.target.style.display = "none";
			}, 500); // Match this duration with the CSS transition duration
		}
	}

})(jQuery);