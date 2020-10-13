<template>
  <div class="app">
    <main>
      main
      <test></test>
    </main>
    <main>main</main>
  </div>
</template>

<script>
export default {}
</script>

<style>
.container {
  height: 100vh;
  display: flex;
  flex-direction: column;
}
header,
footer {
  height: 100px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 1210px;
  background-color: #77940d;
}
main {
  width: 1210px;
  min-width: 1210px;
  margin: 0 auto;
  height: 100vh;
  display: flex;
  background-color: #14d172;
}
.links {
  margin: 0 15px;
}
</style>
