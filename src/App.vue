<script setup lang="ts">
import SidebarView from '@/views/SidebarView.vue'
import Food from '@/views/FoodShare/regionalCuisine.vue'
</script>

<template>
    <!-- <SidebarView id="sidebar" /> -->
    <Food  id="food"/>
    <!-- <RouterView id="router" /> -->
</template>

<style scoped>

body {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

#app {
  /* display: flex;
  flex-direction: column; */
  max-width: 1200px;
  /* margin: 10px auto; */
  height: 100vh;
}

#food {
  /* flex-grow: 1; */
  /* border: 1px solid red; */
  width: 100%;
  height: 100%;
  overflow: auto
}
</style>
