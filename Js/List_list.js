$(function () {
    


    let obox = $('.list_box');
    // let res ='';
    // $.ajax({
    //     type: 'get',
    //     url: './Api/getList.php',
    //     dataType : "json",
    //     success: function (rep) {
    //         //data已经是JSON对象不需要再转换
    //         console.log(rep);

    //         rep.forEach(function(item,i) {
    //             console.log(item.title);
    //             let res = `<li>
    //                         <a href="javascript:;">
    //                         <img src="${item.img}" alt="">
    //                          </a>
    //                         <p>&yen;${item.price}</p>
    //                         <h4>${item.title}</h4>
    //                         <div class="li_dian"><span>${item.wrap}</span></div>
    //                         <div class="li_shou"><span>已售3</span></div>
    //                     </li>`;
    //         });
    //         obox.append(res);
    //         console.log(obox[0]);
    $.ajax({
        type: 'get',
        url: 'API/getList.php',
        dataType : "json",
        
        success: function (rep) {
            //msg已经是JSON对象不需要再转换
            console.log(rep);
            rep.forEach(function(item,i) {    
                // console.log(item.price);            
                             res = `<li>
                            <a href="javascript:;">
                            <img src="${item.img}" alt="">
                             </a>
                            <p>&yen;${item.price}</p>
                            <h4>${item.title}</h4>
                            <div class="li_dian"><span>${item.wrap}</span></div>
                            <div class="li_shou"><span>已售3</span></div>
                            </li>`;
                        obox.append(res);
                        });
            

            //带数据跳转详情页
            lbox = $("#list_box li");
            console.log(lbox);
            lbox.each(function (index) {
                $(this).click(function () {
                    console.log(rep[$(this).index()]);
                    let str = objToStr(rep[$(this).index()]);
                    location.href = "Date.html?" + str;
                })
            })

        }

    })
    //获取总页码
    $.ajax({
        type: "get" ,
        url : "./API/getpage.php",
        dataType : "json",
        success : function(se){
            let pageSize = se.data.count;
            console.log(pageSize);
            for(let i = 0;i < pageSize;i++){
                $(".ye").append(`<a href="javascript:;">${i + 1}</a>`)
            }
            console.log(se);
        }
    })
    $(".ye a").click(function(){
        if(!$(this).hasClass('attr')){
            $(".ye a").removeClass('attr');
            $(this).addClass('attr');
        }
    })
});