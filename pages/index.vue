<template>
  <div>
    <banner></banner>
  </div>
</template>

<script>
import Banner from '~/components/other/Banner'
export default {
  components: { Banner },
  methods: {
    handleIcon() {
      console.log('handleIcon')
    },
  },
}
</script>
