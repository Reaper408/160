$(function () {
    $.ajax({
        type: 'post',
        url: 'Api/cartlist.php',
        data: '',
        dataType : "json",  
        success: function (rep) {
            var res = rep.map(ele => {
                return `<tr>
                         <td>${ele.title}<img src="${ele.img}" /></td>
                         <td>${ele.price}</td>
                         <td>${ele.price}</td>
                         <td>1</td>
                         <td>${ele.price}</td>
                         <td><a class="del" href="javascript:;">X</a></td>
                        </tr>`;
            
            }).join("");

            $('.tbody').html(res);
        }
    })
    $('.del').click(function(){
        $.ajax({
            type: 'post',
            url: 'Api/cartdel.php',
            data: '',
            dataType : "json",  
            success: function (rep) {
                
            }
        })
    })
})