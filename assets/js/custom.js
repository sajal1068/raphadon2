$(document).ready(function(){

	// Open menu if not any actve class present

	$(".navbar-menu").on('click',function(e){
	   e.preventDefault();
	   if(!$(this).parent().hasClass("active") && !$(this).parent().hasClass("active-search") ) {  
		  
		  $(".navbar").addClass("active");
		  $(".container-menu").addClass("active");
		  $(".container-menu").addClass("bg");
		  $(".shape-wrap").addClass("horizontal");
		  $(".menu-items").css("display", "flex");   
		  $(".shape").css("transform-origin", "100% 0%"); 
		  $(".search-form").css("display", "none");
		  $(".container-menu").removeClass("active-search");
		  // $(".search-form").css("display", "none");
		  $('body').css('overflow', 'hidden');      
		 

		  anime({
			 targets: '.shape-wrap',
			 duration: 600,
			 easing: "easeInOutSine",
			 height: "100vh"
		  }),anime({
			 targets: '.shape',
			 scaleY: [{
				value: [1, 2.8],
				duration: 600,
				easing: "easeInQuad"
			 }, {
				value: 10,
				duration: 600,
				easing: "easeOutQuad"
			 }]
		  }),anime({
			 targets: '.container-menu',
			 duration: 600,
			 easing: "easeInOutSine",                 
			 translateY: "100vh"
		  }),anime({
			 targets: '.menu',
			 duration: 700,
			 easing: "easeInOutSine",
			 translateY: "100vh"
				}),anime({
				   targets: '.menu-items .col',
				   duration: 800,
			 delay: 200,
			 easing: "easeInOutSine",
			 opacity: "1"
		  })             
		  $(".shape-wrap").removeClass("horizontal");  
				
	   }else if($(this).parent().hasClass("active-search")) {                 

		  $(".search-close").css("display", "none"); 
		  $(".search-form").css("display", "none");                 
		  $(".navbar-search").css("display", "inline-block");  

		  $(".navbar").addClass("active");
		  $(".navbar").removeClass("active-search");
		  $(".container-menu").addClass("active");
		  $(".container-menu").addClass("bg");
		  $(".container-menu").removeClass("active-search");
			 
		  
	   }else{
		   alert("no reacin");
		   $('body').css('overflow', 'auto');
	   }
					
	});

   
	$(".menu-close").on('click',function(e){
	   e.preventDefault();
	  // alert("new");

	  if($(this).closest().hasClass("active-search") ) { 

		  $(".navbar").removeClass("active");
		  $(".shape-wrap").removeClass("horizontal");
		  $(".container-menu").removeClass("active");
		 

	  }else{
		   $('body').css('overflow', 'auto');
		  
		  $(".navbar").removeClass("active");
		  $(".shape-wrap").removeClass("horizontal");
		  $(".container-menu").removeClass("active");
		  anime({
			 targets: '.shape-wrap',
			 duration: 600,
			 easing: "easeInOutSine",
			 height: "15vh"
		  }),anime({
			 targets: '.shape',
			 duration: 600,
			 easing: "easeInOutSine",                 
			 translateY: "-33vh",
			 scale:1
		  }),anime({
			 targets: '.container-menu',
			 duration: 600,
			 easing: "easeInOutSine",                 
			 translateY: "0vh"
		  }),anime({
			 targets: '.menu',
			 duration: 600,
			 easing: "easeInOutSine",                 
			 translateY: "0vh"
		  }),anime({
			 targets: '.menu-items .col',
			 duration: 600,
			 easing: "easeInOutSine",                 
			 opacity: "0"
		  })
	  }               
	   //Check this block is open or not..
	  
	 

	});


	
	$(".navbar-search").on('click',function(e){

	   if($(this).parent().hasClass("active")) { 
		  
		  $(".navbar").addClass("active-search");
		  $(".navbar").removeClass("active");
		  $(".search-form").css("display", "block");
		  $(".container-menu").addClass("active-search");                 
		  $(".navbar-search").css("display", "none");  
		  $(".search-close").css("display", "inline-block"); 
		  $('body').css('overflow', 'hidden');
		  
		  
	   }else if($(this).parent().hasClass("active-search")){       
				
			   
				$(".navbar-search").css("display", "none");

	   }else{                 
		  $('body').css('overflow', 'hidden');
		  $(".navbar").addClass("active-search");               
		  $(".navbar").removeClass("active");
		  $(".search-form").css("display", "block");
		  $(".shape-wrap").removeClass("horizontal");
		  $(".container-menu").removeClass("active");
		  $(".container-menu").removeClass("bg");
		  $(".container-menu").addClass("active-search");               
		  $(".menu-items").css("display", "flex");   
		  $(".shape").css("transform-origin", "100% 0%"); 
		  anime({
			 targets: '.shape-wrap',
			 duration: 600,
			 easing: "easeInOutSine",
			 height: "100vh"
		  }),anime({
			 targets: '.shape',
			 scaleY: [{
				value: [1, 2.8],
				duration: 600,
				easing: "easeInQuad"
			 }, {
				value: 10,
				duration: 600,
				easing: "easeOutQuad"
			 }]
		  }),anime({
			 targets: '.container-menu',
			 duration: 600,
			 easing: "easeInOutSine",                 
			 translateY: "100vh"
		  }),anime({
			 targets: '.menu',
			 duration: 700,
			 easing: "easeInOutSine",
			 translateY: "100vh"
				}),anime({
				   targets: '.menu-items .col',
				   duration: 800,
			 delay: 200,
			 easing: "easeInOutSine",
			 opacity: "1"
		  })             
		  $(".shape-wrap").removeClass("horizontal");  
		 
	   }
		
	});


	// close 


	$(".search-close").on('click',function(e){

	   if($(this).parent().hasClass("active-search") ) { 
		  $('body').css('overflow', 'auto'); 

		  $(".navbar").removeClass("active-search");               
		  $(".navbar").removeClass("active");
		  $(".shape-wrap").removeClass("horizontal");
		  $(".container-menu").removeClass("active");
		  $(".container-menu").removeClass("bg");              
		  $(".navbar-search").css("display","inline-block");
		  $(".search-close").css("display","none");
		  anime({
			 targets: '.shape-wrap',
			 duration: 600,
			 easing: "easeInOutSine",
			 height: "15vh"
		  }),anime({
			 targets: '.shape',
			 duration: 600,
			 easing: "easeInOutSine",                 
			 translateY: "-32vh",
			 scale:1
		  }),anime({
			 targets: '.container-menu',
			 duration: 600,
			 easing: "easeInOutSine",                 
			 translateY: "0vh"
		  }),anime({
			 targets: '.menu',
			 duration: 600,
			 easing: "easeInOutSine",                 
			 translateY: "0vh"
		  }),anime({
			 targets: '.menu-items .col',
			 duration: 600,
			 easing: "easeInOutSine",                 
			 opacity: "0"
		  })
	   }else{

		  $(".navbar").removeClass("active-search");               
		  $(".navbar").removeClass("active");
		  $(".shape-wrap").removeClass("horizontal");
		  $(".container-menu").removeClass("active");
		  $(".container-menu").removeClass("bg");
		  $(".menu-close").css("display","none");
		  $(".navbar-search").css("display","inline-block");



		  anime({
			 targets: '.shape-wrap',
			 duration: 600,
			 easing: "easeInOutSine",
			 height: "15vh"
		  }),anime({
			 targets: '.shape',
			 duration: 600,
			 easing: "easeInOutSine",                 
			 translateY: "-33vh",
			 scale:1
		  }),anime({
			 targets: '.container-menu',
			 duration: 600,
			 easing: "easeInOutSine",                 
			 translateY: "0vh"
		  }),anime({
			 targets: '.menu',
			 duration: 600,
			 easing: "easeInOutSine",                 
			 translateY: "0vh"
		  }),anime({
			 targets: '.menu-items .col',
			 duration: 600,
			 easing: "easeInOutSine",                 
			 opacity: "0"
		  })
	   }
	}); 	
	

	});


	$(document).ready(function(){ 	   
	   $('#scroll').click(function(){ 
		  $("html, body").animate({ scrollTop: 0 }, 1000); 
		  return false; 
	   }); 
	});


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
