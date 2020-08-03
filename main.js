$(document).ready(function() {
    //Click color
    $('.color').click(function() {
        // Animation to boxes
        for (i = 0; i < $(this).text().length; i++) {
            $('#colorBox1').animate({bottom: '150px'}, 1000).animate({bottom: '0px'}, 1000).animate({right: '150px'}, 1000).animate({right: '0px'}, 1000);
            $('#colorBox2').animate({bottom: '150px'}, 1000).animate({bottom: '0px'}, 1000).animate({left: '150px'}, 1000).animate({left: '0px'}, 1000);
            $('#colorBox3').animate({top: '150px'}, 1000).animate({top: '0px'}, 1000).animate({right: '150px'}, 1000).animate({right: '0px'}, 1000);
            $('#colorBox4').animate({top: '150px'}, 1000).animate({top: '0px'}, 1000).animate({left: '150px'}, 1000).animate({left: '0px'}, 1000);

            $('.fortune').css('background-color', '#F7F7F7');
        }

        // Fade out and into screen 2
        setTimeout(function() {
            $('#fortune-container1').hide();
            $('#fortune-container2').fadeIn();
        }, $(this).text().length * 2000);
    });

    //Click Number Screen 1
    $('.number').click(function() {
        // Animation to number boxes
        for (i = 0; i < parseInt($(this).text()); i++) {
            $('.numberBox1').animate({bottom: '150px'}, 1000).animate({bottom: '0px'}, 1000).animate({right: '150px'}, 1000).animate({right: '0px'}, 1000);
            $('.numberBox2').animate({bottom: '150px'}, 1000).animate({bottom: '0px'}, 1000).animate({left: '150px'}, 1000).animate({left: '0px'}, 1000);
            $('.numberBox3').animate({top: '150px'}, 1000).animate({top: '0px'}, 1000).animate({right: '150px'}, 1000).animate({right: '0px'}, 1000);
            $('.numberBox4').animate({top: '150px'}, 1000).animate({top: '0px'}, 1000).animate({left: '150px'}, 1000).animate({left: '0px'}, 1000);
        }

        // Fade out and into screen 3
        setTimeout(function() {
            $('#fortune-container2').hide();
            $('#fortune-container3').fadeIn();
        }, parseInt($(this).text()) * 2000);
    });

    //Click Number Screen 2 Numbers
    $('.number2').click(function() {
        $(this).animate({fontSize: '4rem'}, 100).animate({opacity: '50%'}, 100).animate({opacity: '100%'}, 100);

        // Fade out number screen
        setTimeout(function() {
            $('.content-box').fadeOut('slow');
            $('#fortune-container3').hide();
            $('h1').hide();
        }, 700);

        // Fade in message
        setTimeout(function() {
            $('.container').css('align-items', 'center');
            $('.content-box').fadeIn().animate({height: 'fit-content'});
            $('#fortune-container4').fadeIn(3000, function() {
                $('.btn').fadeIn(function() {
                    for (i = 0; i < 10; i++) {
                        $(this).animate({fontSize: '2.5rem'}, 1000).animate({fontSize: '2rem'}, 800);
                    }
                });
            });
        }, 1500);
    });
});