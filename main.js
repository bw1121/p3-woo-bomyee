$(document).ready(function() {
    //Click color
    $('.color').click(function() {
        // Animation to boxes
        for (i = 0; i < $(this).text().length; i++) {
            $('#colorBox1').animate({bottom: '300px'}, 1000).animate({bottom: '0px'}, 1000).animate({right: '300px'}, 1000).animate({right: '0px'}, 1000);
            $('#colorBox2').animate({bottom: '300px'}, 1000).animate({bottom: '0px'}, 1000).animate({left: '300px'}, 1000).animate({left: '0px'}, 1000);
            $('#colorBox3').animate({top: '300px'}, 1000).animate({top: '0px'}, 1000).animate({right: '300px'}, 1000).animate({right: '0px'}, 1000);
            $('#colorBox4').animate({top: '300px'}, 1000).animate({top: '0px'}, 1000).animate({left: '300px'}, 1000).animate({left: '0px'}, 1000);
        }

        setTimeout(function() {
            $('#fortune-container1').hide();
            $('#fortune-container2').show();
        }, $(this).text().length * 2000);
    });
});