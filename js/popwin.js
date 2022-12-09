$.fn.alignCenterScreen = function() {
    this.css("position", "absolute");
    // this.css("top", ($(window).height() - this.outerHeight()) / 2 + $(window).scrollTop() + "px");
    this.css("top", $(window).scrollTop() + 30 + "px");
    this.css("left", ($(window).width() - this.outerWidth()) / 2 + $(window).scrollLeft() + "px");
    return this;
};

var $divShadow = $('<div></div>', {
	'class' : 'shadow close'
});

var createWin = function() { 

	var uri = location.href;
   	var arr = uri.split("/");

    var btnCaption = (arr.indexOf('en') != -1) ? 'Close' : 'Закрыть';

	var $win = $('<div></div>', {
		'class' : 'popupwin clearfix',
		'html' : '<div class="loader"><img src="../css/images/bx_loader.gif"></div>'
	});

		
	var $winhead = $('<div></div>', {
		'class': 'winhead close'		
	});

	var $closebtn = $('<button></button>', {
		'html' : btnCaption,
		'class' : 'btn close'
	});

	$win.prepend($winhead);
	$win.append($closebtn);

	$('body').on('click', '.close', function(){
		$win.fadeOut(100);
		$divShadow.remove();
		$('body').css('overflow', 'auto');
		$win.remove();
	});

	return $win;
};

$(function() {
	$('.popToggle').on('click', function(e) {
		e.preventDefault();
		var file = $(this).attr('href');
		var $win = createWin();

		var width = $(window).width() * 0.3;
		$win.width(width);
		

		$('body').prepend($divShadow);
		$('body').append($win);
		$win.hide();
		$('body').css('overflow', 'hidden');

		var html;
		$.ajax({
			url: file + "?" + new Date().getTime(),
			success: function(data) {
				
				$win.find('img').remove();
				$win.find('.winhead').after(data);
			}
		});
		
		$win.css('max-height', $(window).height() - 100);
		
		$win.alignCenterScreen();
		$win.fadeIn(100);		
	});
});


