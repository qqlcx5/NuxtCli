<template>
  <transition name="van-fade">
    <div v-if="loading" class="page-loading">
      <div class="page-loading__tip">
        <bounce-loading></bounce-loading>
      </div>
    </div>
  </transition>
</template>

<script>
import BounceLoading from './BounceLoading'
export default {
  name: 'PageLoading',
  components: {
    BounceLoading,
  },
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
      this.loading = false
    },
  },
}
</script>

<style lang="scss" scoped>
.page-loading {
  position: fixed;
  left: 50%;
  bottom: 60px;
  z-index: $z-index-overlay;
  transform: translateX(-50%);

  &__tip {
    color: #fff;
    border-radius: 20px;
    padding: 8px 16px;
    background-color: #f3f3f3;
    box-shadow: 6px 10px 40px rgba(10, 132, 234, 0.5);
  }
}
</style>
