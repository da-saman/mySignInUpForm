$(document).ready(function () {
	$("#login-button").click(function (event) {
		event.preventDefault();

		$('form').fadeOut(500);
		$('.wrapper').addClass('form-success');
	});
	$(".signupLink").click(function(){
		console.log("OOOOOOOOOOK");
		$(".signup").toggleClass("show");
	});
});
