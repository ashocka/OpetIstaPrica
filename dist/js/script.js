$( document ).ready(function() {
	$('.screen-02').addClass('hide');
	$('.screen-03').addClass('hide');

    $('.screen-01 .button').click(function() {
    	$('.screen-01').addClass('hide');
    	$('.screen-02').removeClass('hide');
    });
    $('.screen-02 .story').click(function() {
    	$('.screen-02').addClass('hide');
    	$('.screen-03').removeClass('hide');
    });
    $('.screen-02 .back-button').click(function() {
    	$('.screen-02').addClass('hide');
    	$('.screen-01').removeClass('hide');
    });
    $('.screen-03 .back-button').click(function() {
    	$('.screen-03').addClass('hide');
    	$('.screen-02').removeClass('hide');
    });

    //var ChatMargin = $('.chat-footer').height();
    //$('.chat-convo').css('margin-bottom', ChatMargin);
});