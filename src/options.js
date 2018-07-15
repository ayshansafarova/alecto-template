//Opinions----slider

	var circle2 = "";
	var home_slides = $("#opinions .home-slide");
	var left = $("#opinions fa-angle-left");
	var right = $("#opinions fa-angle-right");

	for(i=0;i<home_slides.length;i++){
		$("#opinions .circles").append("<div class='circle circle1'></div>");
		circle1 = $(".circle1");
		circle1.eq(i).attr("data-value",i);
	}

	home_slides.eq(0).siblings().css("display","none");
	circle1.eq(0).removeClass("circle").addClass("active-circle")
	
	circle1.each(function(){
		$(this).click(function(){
			var data_value = $(this).attr("data-value"); 
			$(this).attr("class","active-circle");
			$(this).siblings().removeClass("active-circle").addClass("circle");
			home_slides.eq(data_value).css("display","block").siblings().css("display","none");
			
			if(data_value > $(this).siblings().attr("data-value")){
				home_slides.eq(data_value).css("animation","fade_left .3s ease-in-out");
			}
			else{
				home_slides.eq(data_value).css("animation","fade_right .3s ease-in-out");
			}
		})
	})