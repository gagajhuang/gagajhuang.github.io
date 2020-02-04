$(document).ready(function() {
   $('#shownav').on('click',  function(e){
      e.preventDefault();/*防止打開URL*/
      $('body').toggleClass('menu-show');
  });
   // $(window).resize(function(){
   // 		var screenWidth = $(window).width();
   // 		console.log(screenWidth);
   // });
});

$(function(){
	var $header = $('header'),
	    $nav = $('nav'),
		_topH = $header.offset().top,//_top 限定在這個區域/領域
		area1 = $('.area1'),
		_logo = $('.logo > a > img');

	//捲軸滾動
	var $win = $(window).scroll(function(){
		if($win.scrollTop() > _topH){
		// if($win.scrollTop() > 50){
			if($header.css('position')!='fixed'){
				$header.addClass('header_active');
				$nav.addClass('nav_active');
				area1.addClass('area1_active');
				_logo.addClass('logo_active');
			}
		}else{
			$header.removeClass('header_active');
			$nav.removeClass('nav_active');
			area1.removeClass('area1_active');
			_logo.removeClass('logo_active');
		};
	});
});

