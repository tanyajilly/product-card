;(function($){
	$(document).ready(function(){
		// slider init
		var slider = $('.ba-slider');
		slider.slick({
			dots: true
		});

		// qty up and down
		var qtyField = $('.ba-product__qty-field'),
			qtyUp = $('.ba-product__qty-up'),
			qtyDown = $('.ba-product__qty-down');

		qtyUp.on("click", function(event){
			event.preventDefault();
			var oldVal = qtyField.val();
			qtyField.val(++oldVal);
		});
		qtyDown.on("click", function(event){
			event.preventDefault();
			var oldVal = qtyField.val();
			qtyField.val(--oldVal === 0 ? 1 : oldVal);

		});
	});
})(jQuery);
