<template>
    <div>
        <banner></banner>
        <div class="mainView">
            <h3>storeToken</h3>
            {{ storeToken }}
            <h3>getToken</h3>
            {{ getToken() }}
            <h3>cookie</h3>
            {{ token }}
            <h3>头像</h3>
            <img :src="$store.state.user.avatar" alt="" />
        </div>
        <div v-for="item in stories" :key="item.id" class="flex">
            <div>{{ item.title }}</div>
            <img :src="item.images[0]" alt="" />
        </div>
        <div v-for="item in top_stories" :key="item.id" class="flex">
            <div>{{ item.title }}</div>
            <img :src="item.image" alt="" />
        </div>
    </div>
</template>

<script>
import Banner from '~/components/other/Banner'
import { getToken } from '~/utils/auth'

export default {
    components: { Banner },
    data() {
        return {
            stories: [],
            top_stories: [],
            token: null,
        }
    },
    computed: {
        storeToken() {
            return this.$store.state.user.token
        },
    },
    mounted() {
        this.$nextTick(() => {
            this.token = getToken()
        })
    },
    methods: {
        getToken() {
            return getToken()
        },
        async handleIcon() {
            const { status, result } = await this.$https.common.newsLatest()
            console.log(result)
            this.stories = result.stories
            this.top_stories = result.top_stories
        },
    },
}
</script>
