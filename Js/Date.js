(function () {
    var arr = ` <div class="b_head">
                    <p>首页 > 男科用药 > </p>
                </div>
                <div class="b_left">
                    <div class="magnifier" id="magnifier1">
                        <div class="magnifier-container">
                            <div class="images-cover"></div>
                            <!--当前图片显示容器-->
                            <div class="move-view"></div>
                            <!--跟随鼠标移动的盒子-->
                        </div>
                        <div class="magnifier-assembly">
                            <div class="magnifier-btn">
                                <span class="magnifier-btn-left">&lt;</span>
                                <span class="magnifier-btn-right">&gt;</span>
                            </div>
                            <!--按钮组-->
                            <div class="magnifier-line">
                                <ul class="clearfix animation03">
                                    <li>
                                        <div class="small-img">
                                            <img src="img/1.png" />
                                        </div>
                                    </li>
                                    <li>
                                        <div class="small-img">
                                            <img src="img/2.png" />
                                        </div>
                                    </li>
                                    <li>
                                        <div class="small-img">
                                            <img src="img/3.png" />
                                        </div>
                                    </li>
                                    <li>
                                        <div class="small-img">
                                            <img src="img/4.png" />
                                        </div>
                                    </li>
                                    <li>
                                        <div class="small-img">
                                            <img src="img/1.png" />
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <!--缩略图-->
                        </div>
                        <div class="magnifier-view"></div>
                        <!--经过放大的图片显示容器-->
                    </div>
                </div>
                <div class="b_right">
                    <div class="br_title">
                        <h1>雅培 益力佳SR营养配方粉400克/罐 辅助降血糖</h1>
                    </div>
                    <div class="br_body">
                        <div class="br_price">
                            <ul>
                                <li>
                                    <p>商场价<span>&yen;129.00</span></p>
                                </li>
                                <li>
                                    <p>会员专享<span class="pp">&yen;121.00</span></p>
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
                            <button>加入购物车</button>
                            <button>立即购买</button>
                        </div>
                    </div>
                    <div class="sh">
                        <p>服务承诺<span>隐私包装</span><span>正品保证</span><span>专业药师</span></p>
                        <p>温馨提示<a>由160大药房横岗店发货并提供售后服务<span>400-1191160-5</span></a></p>
                    </div>
                </div>`
                $('.D_body').html(arr);
})();
