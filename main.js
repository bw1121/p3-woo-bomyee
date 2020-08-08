$(document).ready(function() {
	//Click color
	$('.color').click(function() {
		// Animation to boxes
		for (i = 0; i < $(this).text().length; i++) {
			$('#colorBox1').animate({
				bottom: '50%'
			}, 1000).animate({
				bottom: '0px'
			}, 1000).animate({
				right: '50%'
			}, 1000).animate({
				right: '0px'
			}, 1000);
			$('#colorBox2').animate({
				bottom: '50%'
			}, 1000).animate({
				bottom: '0px'
			}, 1000).animate({
				left: '50%'
			}, 1000).animate({
				left: '0px'
			}, 1000);
			$('#colorBox3').animate({
				top: '50%'
			}, 1000).animate({
				top: '0px'
			}, 1000).animate({
				right: '50%'
			}, 1000).animate({
				right: '0px'
			}, 1000);
			$('#colorBox4').animate({
				top: '50%'
			}, 1000).animate({
				top: '0px'
			}, 1000).animate({
				left: '50%'
			}, 1000).animate({
				left: '0px'
			}, 1000);
			$('.fortune').css('background-color', '#F7F7F7');
		}
		// Fade out and into screen 2
		setTimeout(function() {
			$('#fortune-container1').hide();
			$('#fortune-container2').fadeIn();
			$('h1').text('Choose a number');
		}, $(this).text().length * 2000);
	});
	//Click Number Screen 1
	$('.number').click(function() {
		// Animation to number boxes
		for (i = 0; i < parseInt($(this).text()); i++) {
			$('.numberBox1').animate({
				bottom: '50%'
			}, 1000).animate({
				bottom: '0px'
			}, 1000).animate({
				right: '50%'
			}, 1000).animate({
				right: '0px'
			}, 1000);
			$('.numberBox2').animate({
				bottom: '50%'
			}, 1000).animate({
				bottom: '0px'
			}, 1000).animate({
				left: '50%'
			}, 1000).animate({
				left: '0px'
			}, 1000);
			$('.numberBox3').animate({
				top: '50%'
			}, 1000).animate({
				top: '0px'
			}, 1000).animate({
				right: '50%'
			}, 1000).animate({
				right: '0px'
			}, 1000);
			$('.numberBox4').animate({
				top: '50%'
			}, 1000).animate({
				top: '0px'
			}, 1000).animate({
				left: '50%'
			}, 1000).animate({
				left: '0px'
			}, 1000);
		}
		// Fade out and into screen 3
		setTimeout(function() {
			$('#fortune-container2').hide();
			$('#fortune-container3').fadeIn();
		}, parseInt($(this).text()) * 2000);
	});
	// Random fortune 
	var fortunes = ["A golden egg of opportunity falls into your lap this month.", "You must try, or hate yourself for not trying.", "A dream you have will come true.", "When fear hurts you, conquer it and defeat it!", "The greatest risk is not taking one.", "Everything will now come your way.", "You will enjoy good health, you will be surrounded by luxury.", "A new voyage will fill your life with untold memories.", "We all have extraordinary coded within us, waiting to be released.", "It is not necessary to show others you have change; the change will be obvious."];
	//Click Number Screen 2 Numbers
	$('.number2').click(function() {
		$(this).addClass('big').animate({
			opacity: '50%'
		}, 100).animate({
			opacity: '100%'
		}, 100);
		// Fade out number screen
		setTimeout(function() {
			$('.content-box').fadeOut('slow');
			$('#fortune-container3').hide();
			$('h1').hide();
		}, 700);
		// Fade in message
		setTimeout(function() {
			$('.container').css('align-items', 'center');
			$('.content-box').fadeIn().animate({
				height: 'fit-content'
			});
			$('#fortune-container4').fadeIn(3000, function() {
				$('.btn').fadeIn(function() {
					for (i = 0; i < 10; i++) {
						$(this).animate({
							fontSize: '1.8rem'
						}, 1000).animate({
							fontSize: '1.5rem'
						}, 800);
					}
				});
			});
			$('.message').text(fortunes[Math.floor(Math.random() * fortunes.length)]);
		}, 1500);
	});
});