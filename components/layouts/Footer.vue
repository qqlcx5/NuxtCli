<template>
    <footer>
        <div class="mainView flex">
            <dl>
                <dt><nuxt-link to="/">购物指南</nuxt-link></dt>
                <dd><nuxt-link to="/">购物流程</nuxt-link></dd>
                <dd><nuxt-link to="/">会员介绍</nuxt-link></dd>
                <dd><nuxt-link to="/">生活旅行</nuxt-link></dd>
                <dd><nuxt-link to="/">常见问题</nuxt-link></dd>
                <dd><nuxt-link to="/">大家电</nuxt-link></dd>
                <dd><nuxt-link to="/">联系客服</nuxt-link></dd>
            </dl>
            <dl>
                <dt><nuxt-link to="/">配送方式</nuxt-link></dt>
                <dd><nuxt-link to="/">上门自提</nuxt-link></dd>
                <dd><nuxt-link to="/">211限时达</nuxt-link></dd>
                <dd><nuxt-link to="/">配送服务查询</nuxt-link></dd>
                <dd><nuxt-link to="/">配送费收取标准</nuxt-link></dd>
                <dd><nuxt-link to="/">海外配送</nuxt-link></dd>
            </dl>
            <dl>
                <dt>支付方式</dt>
                <dd>货到付款</dd>
                <dd>在线支付</dd>
                <dd>分期付款</dd>
                <dd>邮局汇款</dd>
                <dd>公司转账</dd>
            </dl>
            <dl>
                <dt>售后服务</dt>
                <dd>售后政策</dd>
                <dd>价格保护</dd>
                <dd>退款说明</dd>
                <dd>返修/退换货</dd>
                <dd>取消订单</dd>
            </dl>
            <dl>
                <dt>特色服务</dt>
                <dd>夺宝岛</dd>
                <dd>DIY装机</dd>
                <dd>延保服务</dd>
                <dd>京东E卡</dd>
                <dd>京东通信</dd>
                <dd>京东JD+</dd>
            </dl>
            <div class="qr-code"></div>
        </div>
    </footer>
</template>

<style lang="scss" scoped>
footer {
    background-color: #262626;
    padding-bottom: 60px;
    a {
        color: #fff;
    }
    dl {
        width: 198px;
        margin-top: 20px;
        font-size: 14px;
        a {
            color: #cccccc;
        }
        dt {
            height: 24px;
            font-size: 16px;
            font-weight: bold;
            margin-bottom: 20px;
        }
        dd {
            line-height: 28px;
        }
    }
    .qr-code {
        width: 260px;
        margin-top: 20px;
        height: 150px;
        background-color: #e88;
    }
}
</style>
