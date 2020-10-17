<template>
    <div>
        <el-button @click="set">设置cookie</el-button>
        <el-button @click="get">获取cookie</el-button>
        <div class="test">
            <svg-icon type="icon-aixin" color="#fff" />
        </div>
        <h1>设置cookie</h1>
        <h1>设置cookie</h1>
        <h1>设置cookie</h1>
        <h1>设置cookie</h1>
        <h1>设置cookie</h1>
        <h1>设置cookie</h1>
        <h1>设置cookie</h1>
        <h1>设置cookie</h1>
        <h1>设置cookie</h1>
        <h1>设置cookie</h1>
        <h1>设置cookie</h1>
        <h1>设置cookie</h1>
        <h1>设置cookie</h1>
        <h1>设置cookie</h1>
        <h1>设置cookie</h1>
        <h1>设置cookie</h1>
        <h1>设置cookie</h1>
        <h1>设置cookie</h1>
        <h1>设置cookie</h1>
        <h1>设置cookie</h1>
        <h1>设置cookie</h1>
        <h1>设置cookie</h1>
    </div>
</template>
<script>
const Cookie = require('js-cookie')

export default {
    methods: {
        set() {
            Cookie.set('cookie-name', 'cookie-value322')
        },
        get() {
            const cookieRes = Cookie.get('cookie-name')
            this.$message(cookieRes)
        },
    },
}
</script>
<style lang="scss">
.test {
    width: 500px;
    height: 500px;
    background-color: #eee;
    color: #fff;
}
</style>
