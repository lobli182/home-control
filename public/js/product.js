$(document).ready(function() {

	$(".product-nav .item-nav").click(function() {
		var elem = $(this).context;
		var content = $(elem).attr("value");
		if (content === "product-general") {
			$(".product-technical-data").addClass("hidden");
			$(".product-general").removeClass("hidden");
		} else {
			$(".product-technical-data").removeClass("hidden");
			$(".product-general").addClass("hidden");
		}
		$(".product-nav .item-nav").removeClass("active");
		$(elem).addClass("active");
	});

	$(".mercado-libre-btn a").click(function(e) {
		var name = $(this).attr("name");
		ga('send', {
		  hitType: 'event',
		  eventCategory: 'Product',
		  eventAction: 'Comprar',
		  eventLabel: name
		});
	});
});
