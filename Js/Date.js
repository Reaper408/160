$(function () {
    /*渲染*/
    var data = decodeURI(location.search);
    var str = data.slice(1);
    var obj = strToObj(str);
    var arr = ` <div class="b_head">
                <p>首页 > 男科用药 > </p>
            </div>
            <div class="b_left">
                    <div class="xiangqing_l">
            <div id="tupian_box" style="background: url('${obj.img}') no-repeat;background-size: 100% 100%;">

                <div id="xiangqing_small"></div>

                <div id="xiangqing_big">
                    <img src="${obj.img}" alt="" id="xiangqing_img" />
                </div>
            </div>
        </div>
            <div class="b_right">
                <div class="br_title">
                    <h1>${obj.title}</h1>
                </div>
                <div class="br_body">
                    <div class="br_price">
                        <ul>
                            <li>
                                <p>商场价<span>&yen;${obj.price}</span></p>
                            </li>
                            <li>
                                <p>会员专享<span class="pp">&yen;${obj.price}</span></p>
                            </li>
                            <li>
                                <p>优惠券<span>每种优惠券，限领一张</span></p>
                            </li>
                        </ul>
                    </div>
                    <div class="br_list">
                        <ul>
                            <li>
                                <p>通用名称<span>雅培 益力佳SR营养配方粉400克/罐 辅助降血糖</span></p>
                            </li>
                            <li>
                                <p>批准文号<span>国食健字J20050003</span></p>
                            </li>
                            <li>
                                <p>生产企业<span>美国雅培制药公司</span></p>
                            </li>
                        </ul>
                    </div>
                    <div class="br_num">
                        <span>购买数量:</span>
                        <input type="button" class="num_jian" value="-" />
                        <input type="text" name="" class="num" value="1" />
                        <input type="button" class="num_jia" value="+" />
                    </div>
                    <div class="br_buy">
                        <button class="incart">加入购物车</button>
                        <a href="Cart.html"><button>立即购买</button></a>
                    </div>
                </div>
                <div class="sh">
                    <p>服务承诺<span>隐私包装</span><span>正品保证</span><span>专业药师</span></p>
                    <p>温馨提示<a>由${obj.wrap}发货并提供售后服务<span>400-1191160-5</span></a></p>
                </div>
            </div>`;
    $('.D_body').html(arr);

    /*购买数量*/
    num = $('.num');
    num_jian = $('.num_jian');
    num_jia = $('.num_jia')
    var i = 1;
    num.val(i);
    num_jian.click(function () {
        if (i < 2) {
        } else {
            num.val(--i);
            // console.log(1);
        }
    })
    num_jia.click(function () {
        num.val(++i);
    })

    otitle = $('h1').html();
    oimg = $('img').attr('src');
    oprice = $('.pp').html();
    // onum = num.val();
    //加入购物车
    $(".D_body").on('click', '.incart', function () {
        console.log(otitle);
        console.log(oimg);
        console.log(oprice);
        // console.log(onum);
        ajax2({
            type: 'post',
            url: 'Api/cart.php',
            data: 'title='+otitle+'&img='+oimg+'&oprice='+oprice ,
            // data:`title=${otitle}`,
            success: function () {
                console.log('加入成功');
            }
        })
    })


    /*放大*/
    var box = document.getElementById('tupian_box');
    var small = document.getElementById('xiangqing_small');
    var big = document.getElementById('xiangqing_big');
    var img = document.getElementById('xiangqing_img')
    box.onmousemove = function (e) {
        var left = e.clientX - 400;
        var top = e.clientY - 300;
        if (left > 350) {
            left = 350;
        }
        if (left < 0) {
            left = 0;
        }
        if (top > 350) {
            top = 350;
        }
        if (top < 0) {
            top = 0;
        }
        small.style.left = left + 'px';
        small.style.top = top + 'px';
        img.style.left = left * (-3) + 'px';
        img.style.top = top * (-3) + 'px';
    }

    box.onmouseleave = function () {
        big.style.display = 'none';
    }
    box.onmouseenter = function () {
        big.style.display = 'block';
    }

})  
