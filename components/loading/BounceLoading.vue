<template>
    <div class="bouncing-loader">
        <div></div>
        <div></div>
        <div></div>
    </div>
</template>
<style lang="scss" scoped>
@keyframes bouncing-loader {
    to {
        opacity: 0.1;
        transform: translate3d(0, -20px, 0);
    }
}

.bouncing-loader {
    display: flex;
    justify-content: center;
}
.bouncing-loader > div {
    width: 25px;
    height: 25px;
    margin: 30px 4px;
    background: #8385aa;
    border-radius: 50%;
    animation: bouncing-loader 0.6s infinite alternate;
}
.bouncing-loader > div:nth-child(2) {
    animation-delay: 0.2s;
}
.bouncing-loader > div:nth-child(3) {
    animation-delay: 0.4s;
}
</style>
