<template>
<router-view v-slot="{ Component }">
  <keep-alive>
    <component :is="Component" />
  </keep-alive>
</router-view>
</template>

<script setup>
defineOptions({
  name: 'App'
});
</script>

<style>
.container_bg{
  background-image: url('/Фон_отели.png');
  background-size: cover;
  background-attachment: fixed;
  background-repeat: no-repeat;
}
.container {
  max-width: 60vw;
  margin: 0 auto;
}
.indent {
  text-indent: 20px;
}
</style>