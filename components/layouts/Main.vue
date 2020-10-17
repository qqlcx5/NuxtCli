<template>
    <main>
        <slot />
    </main>
</template>

<script>
export default {
    name: 'LayoutMain',
}
</script>
<style lang="scss" scoped>
main {
    min-height: calc(100vh - 122px);
    height: 100%;
    position: relative;
}
</style>
