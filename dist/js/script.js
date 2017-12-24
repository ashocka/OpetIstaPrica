$( document ).ready(function() {
	// uncomment:
	/*$('.screen-02').addClass('hide');
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
    });*/

    // the chat functionality
    $('.chat-convo .block').addClass('hide');

    $('.choice').click(function() {
		var choice = $(this).text();

		// output the user choice
		$('.chat-convo .block').last().append(
    		"<div class='block'><div class='chat-bubble chat-bubble-right'>"
        	 + choice + "</div></div>"
         );

setTimeout(function(){
	$('.chat-convo .block').last().append(
    	"<div data-tree='01' class='block'><div class='chat-bubble chat-bubble-left'>"
          Rekli su mi da ne mogu više da se pojavljujem na ekranu i vodim program. 
        "</div>
      </div>"
    );
}, 200);

	/*setTimeout(function(){
		// wait a bit & output the answer
		var tree = $('.choice').data();
		var bubble = $('.chat-convo .block').data();

		if (bubble === tree) {
			//$(this).removeClass('hide');	
		}

	}, 500);*/

    });

    
    

    
});