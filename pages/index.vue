<template>
  <div>
    <banner></banner>
    <div v-for="item in stories" :key="item.id" class="flex">
      <div>{{ item.title }}</div>
      <img :src="item.images[0]" alt="" />
    </div>
  </div>
</template>

<script>
import Banner from '~/components/other/Banner'
export default {
  components: { Banner },
  data() {
    return {
      stories: [],
      top_stories: [],
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.handleIcon()
    })
  },
  methods: {
    async handleIcon() {
      const { status, result } = await this.$https.common.newsLatest()
      console.log(result)
      this.stories = result.stories
      this.top_stories = result.top_stories
    },
  },
}
</script>
