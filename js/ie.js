Array.prototype.indexOf = function(obj, start) {
     for (var i = (start || 0), j = this.length; i < j; i++) {
         if (this[i] === obj) { return i; }
     }
     return -1;
}

$(function() {
	var num = 0;
	//alert($('.workflow .workflow-item').length);

	var pre = $("<span></span>", {
		'class' : 'ienum'
	});

	$('.workflow .workflow-item').each(function(){
		var pre = $("<span></span>", {
			'class' : 'ienum'
		});		
		pre.html(++num);
		$(this).prepend(pre);
	})
});

