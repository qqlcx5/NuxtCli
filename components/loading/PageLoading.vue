<template>
  <transition name="van-fade">
    <div v-if="loading" class="page-loading">
      <div class="page-loading__tip">
        <!-- <bounce-loading></bounce-loading> -->
        <svg-icon type="icon-loading" size="30" rotate></svg-icon>
        <span style="margin-top: 60px">Loading...</span>
      </div>
    </div>
  </transition>
</template>

<script>
// import BounceLoading from './BounceLoading'
export default {
  name: 'PageLoading',
  // components: {
  //   BounceLoading,
  // },
  props: {},
  data: () => ({
    loading: false,
  }),
  computed: {},
  mounted() {},
  methods: {
    start() {
      this.loading = true
    },
    finish() {
      this.loading = true
    },
  },
}
</script>

<style lang="scss" scoped>
.page-loading {
  position: fixed;
  left: 50%;
  bottom: 60px;
  z-index: 995;
  transform: translateX(-50%);

  &__tip {
    text-align: center;
    color: #fff;
    border-radius: 20px;
    padding: 8px 16px;
    background-color: #559aff;
    box-shadow: 6px 10px 40px rgba(10, 132, 234, 0.5);
  }
}
</style>
