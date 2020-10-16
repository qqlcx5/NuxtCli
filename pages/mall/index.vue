<template>
    <div>
        <el-button @click="set">设置cookie</el-button>
        <el-button @click="get">获取cookie</el-button>
    </div>
</template>
<script>
export default {
    methods: {
        set() {
            this.$cookies.set('cookie-name', 'cookie-value2222', {
                path: '/',
                maxAge: 60 * 60 * 24 * 7,
            })
        },
        get() {
            const cookieRes = this.$cookies.get('cookie-name')
            this.$message(cookieRes)
        },
    },
}
</script>
