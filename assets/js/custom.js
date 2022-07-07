
// Select all links with hashes
$(document).ready(function(){
	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();
	    var target = this.hash;
	    var $target = $(target);
	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 900, 'swing', function () {
	        // window.location.hash = target;
	    });
	});
});


//apprearance
$("input.variation").on("click", function () {
	if ($(this).val() > 3) {
		$("body").css("background", "#111");
		$("footer").attr("class", "dark");
	} else {
		$("body").css("background", "#f9f9f9");
		$("footer").attr("class", "");
	}
});

// toggle list vs card view
$(".option__button").on("click", function () {
	$(".option__button").removeClass("selected");
	$(this).addClass("selected");
	if ($(this).hasClass("option--grid")) {
		$(".results-section").attr("class", "results-section results--grid");
	} else if ($(this).hasClass("option--list")) {
		$(".results-section").attr("class", "results-section results--list");
	}
});
