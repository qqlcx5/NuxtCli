<template>
    <div id="app">
        <header-comp />
        <main-comp>
            <transition name="van-fade">
                <nuxt :key="key" keep-alive />
            </transition>
        </main-comp>
        <footer-comp />
    </div>
</template>
<script>
import HeaderComp from '~/components/layouts/Header'
import MainComp from '~/components/layouts/Main'
import FooterComp from '~/components/layouts/Footer'
export default {
    components: {
        HeaderComp,
        MainComp,
        FooterComp,
    },
    computed: {
        key() {
            // 只要保证 key 唯一性就可以了，保证不同页面的 key 不相同
            return this.$route.fullPath
        },
    },
}
</script>

<style lang="scss" scoped>
#app {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}
</style>
