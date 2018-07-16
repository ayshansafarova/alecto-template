import $ from 'jquery';
window.jQuery = $;
window.$ = $;

import "bootstrap";
import './css/main.scss';
import "./options.js"

jQuery(document).ready(function($) {
	// $("#home").css('background-repeat', 'round');
	// $("#opinions").css('background-repeat', 'round');
	// media 768den yuxari olanda background-repeat: round;
	// 2000den yuxarda containerin widthini deyish ve home height ver;

// Home-----icon-search
	var input = $("#home .search-input");
		$("#home .search-icon i").click(function(event) {
			if($(this).hasClass("fa-search")){
				$(this).addClass('fa-close').removeClass('fa-search');
				input.show('slow');
				
			}
			else{
				$(this).addClass('fa-search').removeClass('fa-close');
				input.hide('slow');
			};
		}); 
 
// Home----scroll-down
	var down = $("#home .down-icon");
	down.click(function(event){
				event.preventDefault();
				$("body, html").animate({
					scrollTop: 700
				},500);
	});

//Home----scroll-up
	var up = $("#side .scroll-top");
		up.click(function(event){
				event.preventDefault();
				$("body, html").animate({
					scrollTop: 0
				},500);
	});

	$(window).scroll(function(){
		if($(this).scrollTop() > 480){
			$("#side .scroll-top").animate({bottom: "55px"},20).css("display","block");
		}
		else{
			$("#side .scroll-top").css("z-index",2).css("bottom","-60px");
		}
	})

// Home----navbar
	var navbar = $("#side .dropdown .button");
	var list = $("#side .list");
		navbar.click(function(){
			if($(this).find("i").attr("class") == "fa fa-bars"){
				$(this).find("i").removeClass("fa-bars").addClass("fa-close");
				$(this).animate({left: "180px"},'fast',function(){
					list.css("display","block").animate({
						left: 0
					},'fast');	
				})
			}
			else if($(this).find("i").attr("class") == "fa fa-close"){
				$(this).find("i").addClass("fa-bars").removeClass("fa-close");
				$(this).animate({left: "10px"},'fast',function(){
					list.css("display","block").animate({
						left: "-150%"
					},'fast');	
				})
			}		
		})

// Home---slider
// Ne qeder slayd varsa avtomatik olaraq o qeder circle yaradir

	var i=0;

	var circle1 = "";
	var homeSlides = $("#home .home-slide");
	var left = $("#home fa-angle-left");
	var right = $("#home fa-angle-right");

	for(i=0;i<homeSlides.length;i++){
		$("#home .circles").append("<div class='circle circle1'></div>");
		circle1 = $(".circle1");
		circle1.eq(i).attr("data-value",i);
	}

	homeSlides.eq(0).siblings().css("display","none");
	circle1.eq(0).removeClass("circle").addClass("active-circle")
	
	circle1.each(function(){
		$(this).click(function(){
			var data_value = $(this).attr("data-value"); 
			$(this).attr("class","active-circle");
			$(this).siblings().removeClass("active-circle").addClass("circle");
			homeSlides.eq(data_value).css("display","block").siblings().css("display","none");
			
			if(data_value > $(this).siblings().attr("data-value")){
				homeSlides.eq(data_value).css("animation","fade_left .3s ease-in-out");
			}
			else{
				homeSlides.eq(data_value).css("animation","fade_right .3s ease-in-out");
			}
		})
	})


	//match-media

	if (window.matchMedia("(max-width: 992px)").matches) {
		$("#side .dropdown").css('display', 'block');
		$("#home .header-list").css('display', 'none');
	}
	else if (window.matchMedia("(min-width: 1200px)").matches) {
		$("#home").css('background-repeat', 'round');
		// $("#home .header-list").css('display', 'none');
	}

//that is more correct way i think. but it doesnt work

    // function right(){
    //     if(x<l) x++;
    //     else x=0;        
    //     imgChange(x);
            
    // }

    // function left(){
    //     if(x>0) x--;
    //     else x=l-1;
    //     imgChange(x);
    // }
      
    // function imgChange(x){
    //     $("#home .circle1").eq(x).attr("class","active-circle");
    //     $("#home .circle1").eq(x).siblings().removeClass("active-circle").addClass("circle");
    //     homeSlides.eq(x).css("display","block").siblings().css("display","none");
    // }


});
