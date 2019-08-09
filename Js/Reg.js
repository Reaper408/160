$(function () {

    let imgCodeText = "";
    /* 验证码处理 */
    (new Captcha({ fontSize: 80 })).draw(document.querySelector('#captcha'), r => {
        console.log(r, '验证码');
        imgCodeText = r;
    });
    //获取节点
    var rshouji = $('.R_shouji');
    var rtuxing = $('.R_tuxing');
    var rduanxin = $('.R_duanxin');
    var rmima = $('.R_mima');
    var rqmima = $('.R_qmima');
    //设置开关
    var isshouji = false;
    var istuxing = false;
    // var isduanxin = false;
    var ismima = false;
    var isqmima = false;
    var ischeck = false;
    
    //手机号正则验证
    rshouji.blur(function () {
        var rshoujitext = rshouji.val().trim();
        // console.log(rshoujitext);
        if (rshoujitext) {//如果有内容
            if (/^1[3-8]\d{9}$/.test(rshoujitext)) {
                // console.log(1);
                $('.R_yanzheng_shouji').css('display', 'block');
                $('.R_yanzheng_shouji').css('color', '#58bc58');
                $('.R_yanzheng_shouji').html('✔');
                isshouji = true;

            } else {
                $('.R_yanzheng_shouji').css('display', 'block');
                $('.R_yanzheng_shouji').css('color', 'red');
                $('.R_yanzheng_shouji').html('请输入正确的手机号');
                isshouji = false;
            }
        } else {
            $('.R_yanzheng_shouji').css('display', 'block');
            $('.R_yanzheng_shouji').html('请输入您的手机号');
            isshouji = false;
        }

    });

    //图形验证码验证
    rtuxing.blur(function () {
        var rtuxingtext = rtuxing.val().trim();
        if(rtuxingtext){
            if(rtuxingtext==imgCodeText){
                $('.R_yanzheng_tuxing').css('display', 'block');
                $('.R_yanzheng_tuxing').css('color', '#58bc58');
                $('.R_yanzheng_tuxing').html('✔');
                istuxing = true;
            }else{
                $('.R_yanzheng_tuxing').css('display', 'block');
                $('.R_yanzheng_tuxing').css('color', 'red');
                $('.R_yanzheng_tuxing').html('✖');
                istuxing = false;
            }
        }else{
            $('.R_yanzheng_tuxing').css('display', 'block');
            $('.R_yanzheng_tuxing').css('color', 'red');
            $('.R_yanzheng_tuxing').html('✖');
            istuxing = false;
        }
    });
    //密码正则验证
    rmima.blur(function(){
        var rmimatext = rmima.val().trim();
        if(rmimatext){
            if(/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,10}$/.test(rmimatext)){//(?![0-9]+$)预测该位置后面不全是数字,(?![a-zA-Z]+$)预测该位置后面不全是字母
                $('.R_yanzheng_mima').css('color', '#58bc58');
                $('.R_yanzheng_mima').html('✔');
                ismima = true;
            }else{
                $('.R_yanzheng_mima').css('color', 'red');
                $('.R_yanzheng_mima').html('请设置正确的密码');
                ismima = false;
            }
        }else{
            $('.R_yanzheng_mima').css('color', 'red');
            $('.R_yanzheng_mima').html('请设置密码');
            ismima = false;
        }
    })
    //确认密码检测
    rqmima.blur(function(){
        var rqmimatext = rqmima.val().trim();
        var rmimatext = rmima.val().trim();
        if(rqmimatext){
            if(rmimatext==rqmimatext){
                $('.R_queren_mima').css('color', '#58bc58');
                $('.R_queren_mima').html('✔');
                isqmima = true;
            }else{
                $('.R_queren_mima').css('color', 'red');
                $('.R_queren_mima').html('两次密码输入不一致');
                isqmima = false;
            }
        }else{
            $('.R_queren_mima').css('color', 'red');
            $('.R_queren_mima').html('请确认密码');
            isqmima = false;
        }
    });
    $('.Rcheck').click(function(){
        console.log($("input[type='checkbox']").prop("checked"));
        if($("input[type='checkbox']").prop("checked") == true){
            ischeck = true;
            console.log(ischeck);
        }else{
            ischeck = false;
            console.log(ischeck);
        }
    });
    
    $('.R_wancheng').click(function(){
        if(ischeck&&ismima&&isqmima&&isshouji&&istuxing){
            alert('注册成功');
            ajax({
                type : 'post',
                url : '../api/reg.php',
                data : 'name=' + $('.R_shouji').val() + '&psw=' + $('.R_mima').val(),
                success : function(str){
                    console.log(str);
                }
            })
        }else{
            alert('请完善信息');
        }
    })
    

    
    
})