<template>
  <div @click="_onClick">
    <svg
      class="icon"
      :style="{ color: color, 'font-size': size + 'px' }"
      aria-hidden="true"
    >
      <use :xlink:href="`#${type}`"></use>
    </svg>
  </div>
</template>

<script>
/**
 * Icons 图标
 * @description 用于展示 icons 图标
 * @property {Number} size 图标大小
 * @property {String} type 图标图案，参考示例
 * @property {String} color 图标颜色
 * @event {Function} click 点击 Icon 触发事件
 */
export default {
  name: 'SvgIcon',
  props: {
    type: {
      type: String,
      default: '',
    },
    color: {
      type: String,
      default: '#333',
    },
    size: {
      type: [Number, String],
      default: 30,
    },
  },
  methods: {
    _onClick() {
      this.$emit('click')
    },
  },
}
</script>

<style lang="scss" scoped>
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
