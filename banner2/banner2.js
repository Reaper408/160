/*
 	需求：轮播图
 	
 		* 自动轮播
 		* 点击左右按钮可以切换上下张
 		* 焦点跟随
 		* 点击焦点能跳转到对应的那张图
*/

$(function() {
	
	//1.把图片统一放在右侧
	var iw = $('.imglist_l li').eq(0).outerWidth();
	$('.imglist_l li').css('left' , iw);
	$('.imglist_l li').eq(0).css('left' , 0);
	
	//2.自动轮播
	var timer = null;
	var now = 0;//可视区图片的下标
	timer = setInterval(next,2000);//每隔两秒切换一张图片
	
	function next() {
		//旧图挪走，新图进入
		$('.imglist_l li').eq(now).animate({'left' : -iw},1000,'linear');
		now++;
		if(now >= $('.imglist_l li').size()) {
			now = 0;
		}
		//新图
		$('.imglist_l li').eq(now).css('left',iw);
		$('.imglist_l li').eq(now).animate({'left' : 0},1000,'linear');
		light();
	}
	
	function prev() {
		//旧图挪走，新图进入
		$('.imglist_l li').eq(now).animate({'left' : iw},1000,'linear');
		now--;
		if(now <= -1) {
			now = $('.imglist_l li').size() - 1;
		}
		//新图
		$('.imglist_l li').eq(now).css('left',-iw);
		$('.imglist_l li').eq(now).animate({'left' : 0},1000,'linear');
		light();
	}
	
	//3.点击左右按钮可以切换上下张
	
	$('#box_l').hover(function() {
		clearInterval(timer);
	},function() {
		timer = setInterval(next,2000);//每隔两秒切换一张图片
	});
	
	//上一张
	$('.prev_l').click(function() {
		prev();
	});
	
	//下一张
	$('.next_l').click(function() {
		next()
	});
	
	//4.生成焦点，焦点跟随，点击焦点切换到对应图片
	
	// var html = '';
	// $('.imglist_l li').each(function(i,item) {
	// 	html += '<span>'+(i+1)+'</span>';
	// });
	// $('.light_l').html(html);
	// $('.light_l').children().eq(0).addClass('active');
	
	// //焦点跟随
	// function light() {
	// 	$('.light_l').children().eq(now).addClass('active').siblings().removeClass('active');
	// }
	
	// //点击焦点切换到对应图片
	// $('.light_l').on('click','span',function() {
	// 	var index = $(this).index();
	// 	if(index > now) {
	// 		//新图从右边进来
	// 		$('.imglist_l li').eq(now).animate({'left' : -iw},1000,'linear');
	// 		$('.imglist_l li').eq(index).css('left',iw);
	// 		$('.imglist_l li').eq(index).animate({'left' : 0},1000,'linear');
	// 	}
		
	// 	if(index < now) {
	// 		//新图从左边进来
	// 		$('.imglist_l li').eq(now).animate({'left' : iw},1000,'linear');
	// 		$('.imglist_l li').eq(index).css('left',-iw);
	// 		$('.imglist_l li').eq(index).animate({'left' : 0},1000,'linear');			
	// 	}
	// 	now = index;
	// 	light();
    // });
})
