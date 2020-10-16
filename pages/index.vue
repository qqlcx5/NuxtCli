<template>
  <div>
    <banner></banner>
    权限校验
  </div>
</template>

<script>
import Banner from '~/components/other/Banner'
export default {
  components: { Banner },
  mounted() {
    this.$nextTick(() => {
      this.handleIcon()
    })
  },
  methods: {
    handleIcon() {
      // console.log('handleIcon')
    },
  },
}
</script>
