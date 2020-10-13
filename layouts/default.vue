<template>
  <div id="app">
    <header-comp />
    <main-comp>
      <transition name="van-fade">
        <nuxt />
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
}
</script>

<style lang="scss" scoped>
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
</style>
