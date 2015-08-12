/*
 * STICKY
 * Make elements sticky to the top of scrollable container
 * Author: Szymon Piwowarczyk (piwowarczyk.net)
 *
 * Using:
 * $(".element").sticky();
 */
(function($) {
	$.fn.sticky = function(options) {

		var defaults = {
			scrollContainer : window,
			parentContainer : window
		};
		var settings = $.extend({}, defaults, options);
		var stickyContainer = this;

		if(stickyContainer.length > 0) {
			var stickyTop = 0;
			if(stickyContainer.css('position') === 'static') {
				stickyContainer.css('position', 'relative');
			}
			$(settings.scrollContainer).on('scroll', function() {
			  var scroll = $(settings.scrollContainer).scrollTop();
			  stickyTop = Math.max(0,
			  	Math.min(
			  		scroll - stickyContainer.position().top + stickyTop,
			  		$(settings.parentContainer).outerHeight() - stickyContainer.outerHeight(true)
			  	)
			  );
			  stickyContainer.css('top', stickyTop + 'px');
			});
		}

		return stickyContainer;

	};
})(jQuery);