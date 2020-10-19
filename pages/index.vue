<template>
    <div>
        <banner></banner>
        <div class="mainView">
            <div class="test">
                <h3>storeToken</h3>
                <div class="ellipsis">{{ storeToken }}</div>
                <h3>getToken</h3>
                <div class="ellipsis">{{ getToken() }}</div>
                <h3>cookie</h3>
                <div class="ellipsis">{{ token }}</div>
                <h3>头像</h3>
            </div>
            <img :src="$store.state.user.avatar" alt="" />
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
<style lang="scss">
.test {
    width: 100%;
}
</style>
