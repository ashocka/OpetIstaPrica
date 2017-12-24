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


		//var ChatMargin = $('.chat-footer').height();
    //$('.chat-convo').css('margin-bottom', ChatMargin);

	 $(".first-story").one('click', function(e) {
		 e.preventDefault();
		$('.chat-convo').append('<div class="block">\
        <div class="chat-bubble chat-bubble-right">\
         Promenili su mi pozciju četiri puta u poslednja dva meseca.\
        </div>\
      </div>');
		$('.first').html('Otkud sad to?');
		$('.second').html('Ali ti si sjajan u svom poslu, šta nije u redu?');
		$(this).removeClass('choices').addClass('second-story');

		$('.second-story').on('click', function(e) {
			e.preventDefault();
			$('.chat-convo').append('<div class="block">\
	        <div class="chat-bubble chat-bubble-left">\
					Rekli su mi da ne mogu više da se pojavljujem na ekranu i vodim program.\
	        </div>\
	      </div><div class="block">\
		        <div class="chat-bubble chat-bubble-left">\
						Ja sam voditelj i bavim se informativnim programom. I sjajno to radim! Neću da montiram neke glupe emisije.\
		        </div>\
		      </div><div class="block">\
			        <div class="chat-bubble chat-bubble-left">\
							I neću da mi kolege šuškaju iza leđa!\
			        </div>\
			      </div>');
			$('.first').html('<span class="first-decision">Pa?</span>');
			$('.second').html('<span class="second-decision">Svašta, možda si tamo bio potrebniji?</span>');

			$(this).removeClass('choices').addClass('third-story');



		});
	});


});
