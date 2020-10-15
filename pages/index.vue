<template>
  <div>
    <banner></banner>
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
      console.log('handleIcon')
    },
  },
}
</script>
