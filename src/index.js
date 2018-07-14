import $ from "jquery";
import "bootstrap";
import './css/main.scss';

jQuery(document).ready(function($) {
	// $("#home").css('background-repeat', 'round');
	// $("#opinions").css('background-repeat', 'round');
	// media 768den yuxari olanda background-repeat: round;
	// 2000den yuxarda containerin widthini deyish ve home height ver;

// Home section
	$("#home .search-icon i").click(function(event) {
		if($(this).hasClass("fa-search")){
			$(this).addClass('fa-close');
		    $(this).removeClass('fa-search');
			$("#home .search-input").css('display', 'block');
		}
		else{
			$(this).addClass('fa-search');
			$(this).removeClass('fa-close');
			$("#home .search-input").css('display', 'none');
		};
	}); 

//About-us section
	var about = $("#about-us .about-us-part");
	var aboutArr = ["about-1.png", "about-2.png", "about-3.png", "about-4.png"]; 
	for (var i = 0; i < about.length; i++) {
		about.find('.back-img').css('background', 'url(./img/about[i])');
	} 

});
