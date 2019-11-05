!function ($) {

	//等到DOM结构绘制完毕后就执行，不必等到加载完毕。
	$(document).ready(function(){

		//tab切换
		$('.tab-box').each(function(){
			var self = $(this);
			self.find('ul.nav-tabs li').on('click',function(){
				var i = $(this).index();
				$(this).addClass('active').siblings().removeClass('active');
				self.find('.tab-pane').hide().eq(i).fadeIn();
			})
		});
	});

}(window.jQuery)