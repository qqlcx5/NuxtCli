<template>
  <div>
    <div>首页</div>
    <img src="/weminerLogo.png" alt="" />
    <svg-icon
      type="icon-huaban27"
      size="100"
      rotate
      @click="handleIcon"
    ></svg-icon>
  </div>
</template>

<script>
export default {
  components: {},
  methods: {
    handleIcon() {
      console.log('handleIcon')
    },
  },
}
</script>
