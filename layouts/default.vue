<template>
  <div id="app">
    <header-comp />
    <transition name="van-fade">
      <nuxt />
    </transition>
    <footer-comp />
  </div>
</template>
<script>
import HeaderComp from '~/components/layouts/Header'
import FooterComp from '~/components/layouts/Footer'
export default {
  components: {
    HeaderComp,
    FooterComp,
  },
}
</script>

<style></style>
