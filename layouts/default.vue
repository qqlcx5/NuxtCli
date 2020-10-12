<template>
  <div>
    <header-comp />
    <Nuxt />
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
