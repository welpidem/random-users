<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import NavBar from './components/nav-bar.vue'
import Users from './views/user-dashboard.vue'
</script>

<template>
  <NavBar />
  <RouterView />
</template>

<style>
body{
  background-color: rgba(214, 214, 214, 0.935);
}
a{
  text-decoration: none;
}
</style>

