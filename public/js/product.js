$(document).ready(function() {

	$(".product-nav .item-nav").click(function() {
		var elem = $(this).context;
		var content = $(elem).attr("value");
		var name = $(elem).attr("name");
		if (content === "product-general") {
			$(".product-technical-data").addClass("hidden");
			$(".product-general").removeClass("hidden");
			ga('send', {
			  hitType: 'event',
			  eventCategory: 'Product',
			  eventAction: 'General',
			  eventLabel: name
			});
		} else {
			$(".product-technical-data").removeClass("hidden");
			$(".product-general").addClass("hidden");
			ga('send', {
			  hitType: 'event',
			  eventCategory: 'Product',
			  eventAction: 'DatosTecnicos',
			  eventLabel: name
			});
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
