<template>
  <div id="app">
    <transition name="van-fade">
      <nuxt />
    </transition>
  </div>
</template>

<style lang="scss" scoped>
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
</style>
