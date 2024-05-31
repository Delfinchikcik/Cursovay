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
.aside{
  width: 14vw;
  position: fixed;
  top: 17%;
  left: .3%;
  border-radius: 20px;
  padding: 1rem;
  background-color: #a8d0e071;
  margin: 0 auto;
}
.aside_title{
  font-size: 1.1rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: .1rem;
}
.aside_item{
  padding: 6px;
  min-height: fit-content;
  
}
</style>