<template>
    <main class="main">
        <slot />
    </main>
</template>

<script>
export default {
    name: 'LayoutMain',
}
</script>
<style lang="scss" scoped>
.main {
    flex: 1;
    overflow: hidden;
    position: relative;
}
</style>
