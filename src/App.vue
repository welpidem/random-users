<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import { useRouteConstants } from '@/composables/use-route-constants'
import NavBar from './components/nav-bar.vue'

const {routeName} = useRouteConstants();
const next = ref(false);

</script>
<template>
  <div class="page-wrapper" v-if="next === false">
        <div class="content-wrapper shadow">
            <section id="section-1">
                <div class="image-container">
                    <img src='/src/assets/landing.jpg' alt="">
                </div>
                <div class="info-container">
                    <h1>Random <i>Users</i></h1>
                    <label for="toggle2" @click="next = true, $router.push({name: routeName.home})">Click Here.</label>
                </div>
            </section>
        </div>
    </div>
    <NavBar v-else/>
  <RouterView />
</template>

<style scoped>
body{
  background-color: rgba(214, 214, 214, 0.935);
}
a{
  text-decoration: none;
}

.page-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

.content-wrapper {
    display: flex;
    width: 80vw;
    min-height: 80vh;
    position: relative;
}

input {
    display: none;
}

#section-1,
#section-2 {
    display: flex;
    width: 80vw;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
}

#section-1 {
    opacity: 1;
    z-index: 5;
    transition: transform 0.5s, opacity 0.8s;
}

.image-container {
    width: 70%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
}

img {
    flex-shrink: 0;
    min-width: 100%;
    min-height: 100%;
}

.info-container {
    width: 50%;
    height: 100%;
    background-color: #EDA4C2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

label {
    display: block;
    border: solid 2px black;
    padding: 1em 2em;
    border-radius: 5px;
    cursor: pointer;
}
</style>

