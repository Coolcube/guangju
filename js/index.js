$(window ).load(function(){
	$(".banner" ).height($(window ).height()-200)
	$(".banner1" ).height($(window ).height()-200)
	$( ".bannerheight" ).height($(window ).height()-200)
	$(".home_sec1 .swiper2" ).height($(".home_sec1_con" ).outerHeight()+5)
	$(".home_news .swiper3" ).height($(".home_news .swiper3 img").height());
	$(".home_news_ri" ).height($(".home_news_left" ).height())
	$(window ).resize(function(){
		$(".banner" ).height($(window ).height()-200)
		$(".banner1" ).height($(window ).height()-200)
		$( ".bannerheight" ).height($(window ).height()-200)
		$(".home_sec1 .swiper2" ).height($(".home_sec1_con" ).outerHeight()+5)
		$(".home_news .swiper3" ).height($(".home_news .swiper3 img").height());
		$(".home_news_ri" ).height($(".home_news_left" ).height())

	})

	$( '.gotop' ).click( function()
	{
		$( 'html,body' ).stop( true, false ).animate( { 'scrollTop': '0' }, 1000, 'easeInOutCubic' );
	} )

})

$(window).scroll(function(){
	//if($(window ).scrollTop()>10){
	//	$(".header" ).stop(true).animate({"top":"-30px"},300);
	//}
	//else{
	//	$(".header" ).stop(true).animate({"top":"0px"},300);
	//}

})