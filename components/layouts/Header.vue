<template>
    <header>
        <el-menu
            :default-active="activeIndex"
            mode="horizontal"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"
            @select="handleSelect"
        >
            <el-menu-item index="/"> 首页 </el-menu-item>
            <el-menu-item index="/home"> home </el-menu-item>
            <el-menu-item index="/mall"> mall </el-menu-item>
            <el-submenu index="2">
                <template slot="title">我的工作台</template>
                <el-menu-item index="2-1">选项1</el-menu-item>
                <el-menu-item index="2-2">选项2</el-menu-item>
                <el-menu-item index="2-3">选项3</el-menu-item>
                <el-submenu index="2-4">
                    <template slot="title">选项4</template>
                    <el-menu-item index="2-4-1">选项1</el-menu-item>
                    <el-menu-item index="2-4-2">选项2</el-menu-item>
                    <el-menu-item index="2-4-3">选项3</el-menu-item>
                </el-submenu>
            </el-submenu>
            <div class="flexc" style="height: 60px; width: 60px; outline: none">
                <color-picker />
            </div>
        </el-menu>
    </header>
</template>
<script>
import ColorPicker from '../other/ColorPicker'
export default {
    components: {
        ColorPicker,
    },
    data() {
        return {
            activeIndex: '1',
        }
    },
    methods: {
        handleSelect(key, keyPath) {
            console.log(key, keyPath)
            this.$router.push(key)
        },
    },
}
</script>
<style lang="scss" scoped></style>
