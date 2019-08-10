$(function () {

    let getlist = (page) =>{
        $.ajax({
            type: 'get',
            url: 'API/getList.php',
            data:`page=${page}`,
            dataType : "json",  
            success: function (rep) {
                //msg已经是JSON对象不需要再转换
                console.log(rep);
                var res = rep.map(ele => {    
                    // console.log(item.price);            
                                return `<li>
                                <a href="javascript:;">
                                <img src="${ele.img}" alt="">
                                 </a>
                                <p>&yen;${ele.price}</p>
                                <h4>${ele.title}</h4>
                                <div class="li_dian"><span>${ele.wrap}</span></div>
                                <div class="li_shou"><span>已售3</span></div>
                                </li>`;
                            
                            }).join("");
                            obox.html(res);
    
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
    }

    getlist(0);

    let obox = $('.list_box');
    

    //获取点击索引
    $("#ye").on("click","a",function(){
        var index = $(this).index();
        $(this).addClass("attr").siblings().removeClass("attr");
        console.log(index);    
        getlist(index);
    })

    
    //获取总页码
    $.ajax({
        type: "get" ,
        url : "./API/getpage.php",
        dataType : "json",
        success : function(se){
            let pageSize = se.data.count;
            console.log(pageSize);
            for(let i = 0;i < pageSize -1;i++){
                $(".ye").append(`<a href="javascript:;">${i + 2}</a>`)
            }
            $(".ye a:eq(0)").addClass('attr');
            console.log(se);
        }
    })

    
    
});