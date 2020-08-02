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
});