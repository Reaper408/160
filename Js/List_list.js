$.ajax({
        type: 'get',
        url: 'Sever/data.json',
        success: function (msg) {
            //msg已经是JSON对象不需要再转换
            let res = msg.map((item) => {
                return `<li>
                        <a href="javascript:;">
                        <img src="${item.img}" alt="">
                         </a>
                        <p>&yen;${item.price}</p>
                        <h4>${item.title}</h4>
                        <div class="li_dian"><span>${item.wrap}</span></div>
                        <div class="li_shou"><span>已售3</span></div>
                    </li>`;
            });
        $('.list_box').html(res);
        // console.log(msg);

                
        }

})