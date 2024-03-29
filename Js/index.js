$(function() {
	
	//1.把图片统一放在右侧
	var iw = $('.imglist li').eq(0).outerWidth();
	$('.imglist li').css('left' , iw);
	$('.imglist li').eq(0).css('left' , 0);
	
	//2.自动轮播
	var timer = null;
	var now = 0;//可视区图片的下标
	timer = setInterval(next,2000);//每隔两秒切换一张图片
	
	function next() {
		//旧图挪走，新图进入
		$('.imglist li').eq(now).animate({'left' : -iw},500,'linear');
		now++;
		if(now >= $('.imglist li').size()) {
			now = 0;
		}
		//新图
		$('.imglist li').eq(now).css('left',iw);
		$('.imglist li').eq(now).animate({'left' : 0},500,'linear');
		light();
	}
	
	function prev() {
		//旧图挪走，新图进入
		$('.imglist li').eq(now).animate({'left' : iw},500,'linear');
		now--;
		if(now <= -1) {
			now = $('.imglist li').size() - 1;
		}
		//新图
		$('.imglist li').eq(now).css('left',-iw);
		$('.imglist li').eq(now).animate({'left' : 0},500,'linear');
		light();
	}
	
	//3.点击左右按钮可以切换上下张
	
	$('#b_box').hover(function() {//b_box盒子被划过时关闭定时器
		clearInterval(timer);
	},function() {
		timer = setInterval(next,2000);//每隔两秒切换一张图片
	});
	
	//上一张
	$('.prev').click(function() {
		prev();
	});
	
	//下一张
	$('.next').click(function() {
		next()
	});
	
	//4.生成焦点，焦点跟随，点击焦点切换到对应图片
	
	var html = '';
	$('.imglist li').each(function(i,item) {
		html += '<span>'+(i+1)+'</span>';
	});
	$('.light').html(html);
	$('.light').children().eq(0).addClass('active');
	
	//焦点跟随
	function light() {
		$('.light').children().eq(now).addClass('active').siblings().removeClass('active');
	}
	
	//点击焦点切换到对应图片
	$('.light').on('click','span',function() {
		var index = $(this).index();
		if(index > now) {
			//新图从右边进来
			$('.imglist li').eq(now).animate({'left' : -iw},1000,'linear');
			$('.imglist li').eq(index).css('left',iw);
			$('.imglist li').eq(index).animate({'left' : 0},1000,'linear');
		}
		
		if(index < now) {
			//新图从左边进来
			$('.imglist li').eq(now).animate({'left' : iw},1000,'linear');
			$('.imglist li').eq(index).css('left',-iw);
			$('.imglist li').eq(index).animate({'left' : 0},1000,'linear');			
		}
		now = index;
		light();
	});
	var li = $(".nav_toli li");
	
	li.each(function(index){
		
		li.mouseover(function(){
			console.log($(this)[index]);
			$(".nav3").remove();
			var o = $(this)[index];
			var arr = `<div class="nav3">
						<p>${o}</p>
						<p>${o}</p>
						<p>${o}</p>
						</div>`;
						$(".nav_wrap").append(arr);
		})
		li.mouseout(function(){
			$(".nav3").remove();
		})
	})

	$('.nav_type li').click(function(){
		location.href = "List.html";
	})
})