/*
**  Copyright 2012, Andreas Johansson
**  Licensed under a MIT license, http://ibuypink.com/mit-license/
** 
*/
(function($){ 
	$.fn.imageCaption = function(options) {
		var defaults = {  
		    figure: '<figure>',
		    figcaption: '<figcaption>'
		};  
		var options = $.extend(defaults, options); 
		return this.each(function() { 
			var o = $(this);
			var alt = o.attr('alt');
			var classes = o.attr('class');
			var caption = $(options.figcaption).text(alt);
			o
				.removeClass()
				.wrap(options.figure)
				.parent()
				.addClass(classes)
				.append(caption);
		});
	}
})(jQuery);