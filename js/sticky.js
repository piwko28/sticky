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
			parentContainer : $("body"),
			updatePosition : true
		};
		var settings = $.extend({}, defaults, options);
		var stickyContainer = this;

		if(stickyContainer.length > 0) {
			var stickyTop = 0;
			var stickyContainerTop = stickyContainer[0].offsetTop - parseInt(stickyContainer.css('margin-top'));
			$(settings.scrollContainer).on('scroll', function() {
			  var scroll = $(settings.scrollContainer).scrollTop();
			  if(settings.updatePosition) {
			  	stickyContainerTop = stickyContainer[0].offsetTop - parseInt(stickyContainer.css('margin-top'));
			  }
			  if(scroll > stickyContainerTop) {
			  	stickyContainer.addClass("sticky");
			  } else {
			  	stickyContainer.removeClass("sticky");
			  }
			  stickyTop = Math.max(0,
			  	Math.min(
			  		scroll - stickyContainerTop,
			  		$(settings.parentContainer).outerHeight() - stickyContainer.outerHeight(true)
			  	)
			  );
			  if(settings.updatePosition) {
				  stickyContainer.css({
				  	transform : 'translateY(' + stickyTop + 'px)'
				  });
				}
			});
		}

		return stickyContainer;

	};
})(jQuery);