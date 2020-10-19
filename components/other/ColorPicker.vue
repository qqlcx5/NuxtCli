<template>
    <el-color-picker
        v-model="theme"
        :predefine="[
            '#409EFF',
            '#1890ff',
            '#304156',
            '#212121',
            '#11a983',
            '#13c2c2',
            '#6959CD',
            '#f5222d',
        ]"
        class="theme-picker"
        popper-class="theme-picker-dropdown"
    />
</template>
<script>
export default {
    data() {
        return {
            theme: '#13c2c2',
        }
    },
    // computed: {
    //     defaultTheme() {
    //         return this.$store.state.settings.theme
    //     },
    // },
    watch: {
        theme(newVal) {
            let color = newVal === '#409EFF' ? 'default' : 'dark'
            this.$store.dispatch('settings/changedTheme', color)
        },
    },
}
</script>
