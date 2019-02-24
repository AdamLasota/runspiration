$(document).ready(function(){
	$(".fb2_ico").css("display","none");
	$(".insta2_ico").css("display","none");
	$(window).scroll(function(){
		if ($(this).scrollTop() > 50){
			$("nav").addClass("fixed_navi");
			$(".staticheight").css("background","#FFFFFF");
			$(".staticheight").css("box-shadow","0px 3px 50px #403f3f");
			$(".logo").css ("display","none");
			$(".logo2").css ("display","block");
			$(".fb_ico").css("display","none");
			$(".fb2_ico").css("display","block");
			$(".insta_ico").css("display","none");
			$(".insta2_ico").css("display","block");
			$(".language a").css ("color", "#3394D1");
			$(".small_menu ol li span").css ("color", "#3394D1");
		}
		else {
			$("nav").removeClass("fixed_navi");
			$(".staticheight").css("background","none");
			$(".staticheight").css("box-shadow","none");
			$(".logo").css ("display","block");
			$(".logo2").css ("display","none");
			$(".fb_ico").css("display","block");
			$(".fb2_ico").css("display","none");
			$(".insta_ico").css("display","block");
			$(".insta2_ico").css("display","none");
			$(".language a").css ("color", "#FFFFFF");
			$(".small_menu ol li span").css ("color", "#FFFFFF");
			
	
		}	
	})	
})