$.ajax({
    type: 'get',
    url: 'Sever/louceng.json',
    success: function (msg) {
        let res = msg.map((item) => {
            return `<div class="I_lou ${item.F}">
                        <div class="lou_left">
                            <div class="lou_title">
                                <h2> <span>${item.F}</span>${item.FH}</h2>
                            </div>
                            <div class="ll_n">
                                <ul>
                                    <li>${item.FL1}</li>
                                    <li>${item.FL2}</li>
                                    <li>${item.FL3}</li>
                                    <li>${item.FL4}</li>
                                    <li>${item.FL5}</li>
                                    <li>${item.FL6}</li>
                                </ul>
                            </div>
                            <div class="ll_i">
                                <img src="${item.LIMG}" alt="">
                            </div>
                            <div class="ll_good">
                                <p>热卖促销：</p>
                                <ul>
                                    <li>${item.FC1}</li>
                                    <li>${item.FC2}</li>
                                    <li>${item.FC3}</li>
                                </ul>
                            </div>
                        </div>
                        <div class="lou_right">
                            <div class="lr_title">
                                <span>商品推荐</span>
                                <ul>
                                    <li>热门关键字：</li>
                                    <li>${item.hot1}</li>
                                    <li>${item.hot2}</li>
                                    <li>${item.hot3}</li>
                                </ul>
                            </div>
                            <div class="lr_ban">
                                <script src="banner2/jquery-1.10.1.min.js"></script>
                                <link rel="stylesheet" href="banner2/banner2.css">
                                <script src="banner2/banner2.js"></script>
                                <include src="banner2/banner2.html"></include>
                            </div>
                            <div class="lr_list">
                                <ul>
                                    <li>
                                        <a href=""><img
                                                src="${item.LI1}"
                                                alt=""></a></p>
                                        <p><a href="">${item.LT1}</a>
                                            <p><span>&yen;${item.P1}</span></p>
                                    </li>
                                    <li>
                                        <a href=""><img
                                                src="${item.LI2}"
                                                alt=""></a></p>
                                        <p><a href="">${item.LT2}</a>
                                            <p><span>&yen;${item.P2}</span></p>
                                    </li>
                                    <li>
                                        <a href=""><img
                                                src="${item.LI3}"
                                                alt=""></a></p>
                                        <p><a href="">${item.LT3}</a>
                                            <p><span>&yen;${item.P3}</span></p>
                                    </li>
                                    <li>
                                        <a href=""><img
                                                src="${item.LI4}"
                                                alt=""></a></p>
                                        <p><a href="">${item.LT4}</a>
                                            <p><span>&yen;${item.P4}</span></p>
                                    </li>
                                    <li>
                                        <a href=""><img
                                                src="${item.LI5}"
                                                alt=""></a></p>
                                        <p><a href="">${item.LT5}</a>
                                            <p><span>&yen;${item.P5}</span></p>
                                    </li>
                                    <li>
                                        <a href=""><img
                                                src="${item.LI6}"
                                                alt=""></a></p>
                                        <p><a href="">${item.LT6}</a>
                                            <p><span>&yen;${item.P6}</span></p>
                                    </li>
                                    
                                </ul>
                            </div>
                        </div>
                    </div>

                    `
        });
        $("#I_lou").html(res);
    }
})