
$(document).ready(function() {
    $('#characterLeft').text('140 characters left');
    $('#message').keydown(function () {
        var max = 140;
        var len = $(this).val().length;
        if (len >= max) {
            $('#characterLeft').text('You have reached the limit');
            $('#characterLeft').addClass('red');
            $('#btnSubmit').addClass('disabled');
        }
        else {
            var ch = max - len;
            $('#characterLeft').text(ch + ' characters left');
            $('#btnSubmit').removeClass('disabled');
            $('#characterLeft').removeClass('red');
        }
    });

	$("form").submit(function(event) {
		var arrayData = $(this).serializeArray();
		event.preventDefault();
		var data = {};
		arrayData.forEach(function(item) {
			data[item.name] = item.value;
		});
		$.ajax({
			url: "/service/sendMsg",
			method: 'POST',
			data: data
		}).done(function(html) {
		  $("#success-message").show();
		});
	});
});
