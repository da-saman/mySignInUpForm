$(document).ready(function () {
	$("#login-button").click(function (event) {
		event.preventDefault();

		$('form').fadeOut(500);
		$('.wrapper').addClass('form-success');
	});
	$(".signupLink").click(function () {
		$(".signup").slideToggle();
		$('form button').toggleClass('clicked'); 
		console.log($("#inpttxt").height());
		// var el = $("form button");
		// el.text() == el.data("text-original")
		// 	? el.text(el.data("text-swap"))
		// 	: el.text(el.data("text-original"));
	});
});
