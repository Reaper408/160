$(function(){

    let imgCodeText = "";
    /* 验证码处理 */
    (new Captcha({ fontSize: 80 })).draw(document.querySelector('#captcha'), r => {
        console.log(r, '验证码1');
        imgCodeText = r;
    });

})