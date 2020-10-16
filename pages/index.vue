<template>
  <div>
    <banner></banner>
    权限校验
    <div>
      <div>
        组件权限校验
        <div class="test">
          <authorized :authority="['user']"> authorized </authorized>
        </div>
      </div>

      <div>
        v-auth
        <div v-auth="['user']">v-auth</div>
      </div>
    </div>
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
