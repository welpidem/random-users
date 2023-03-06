<script setup lang="ts">
import { useFetch } from "@/composables/use-fetch"
import { ref, onMounted } from "vue";
import Search from './search-user.vue'
import { useRouteConstants } from '@/composables/use-route-constants'

const {routeName} = useRouteConstants();
const { prevPage, nextPage, filtered, gender, page } = useFetch();
const ispageOne = ref(false);

const firstPage = () => {
  ispageOne.value = page.value === 1
}

onMounted(() => {
  firstPage();
})

</script>

<template>
  <div class="my-5" style="margin-left: 10%;">
    <Search />
    <div>
      <label class="mr-3">
        <h5>Filter: </h5>
      </label>
      <button type="button" class="btn btn-info btn-sm mr-3 my-3" @click="gender = ''"> Show All </button>
      <button type="button" class="btn btn-info btn-sm mr-3 my-3" @click="gender = 'male'"> &#128102; Male</button>
      <button type="button" class="btn btn-info btn-sm my-3" @click="gender = 'female'"> &#128105; Female</button>
    </div>
  </div>
  <div class="container">
    <div class="row row-cols-5 row-cols-md-9 g-4">
      <div class="col" v-for="(user, index) in filtered" :key="index">
        <div class="card grow">
          <img :src="user.picture.large" :alt="user.name.first">
          <div class="card-body">
            <h5 class="card-title">{{ user.name.first }} {{ user.name.last }}</h5>
            <p class="card-text">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#ffc107" class="bi bi-geo-alt-fill"
                viewBox="0 0 16 16">
                <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
              </svg>
              <i>{{ user.location.city }} {{ user.location.state }}, {{ user.location.country }}</i>
            </p>
            <button type="button" class="btn btn-outline-primary" id="profile" @click="$router.push({name: routeName.profile, params: { id: user.login.uuid }})">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                  class="bi bi-person-fill" viewBox="0 0 16 16">
                  <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                </svg>
                View Profile
            </button>
          </div>
        </div>
      </div>
    </div>
    <div style="margin: 5% 40% 5% 40%">
      <button type="button" class="btn btn-info mr-2" @click="prevPage(), firstPage()"
        :disabled="ispageOne">Previous</button>
      <button type="button" class="btn btn-info" @click="nextPage(), firstPage()">Next</button>
    </div>
  </div>
</template>

<style scoped>
img {
  width: 100%;
  height: 100%;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
}

.card {
  margin-bottom: 4%;
  max-height: 390px;
  min-height: 390px;
}

.card:hover {
  box-shadow: 0 5px 10px rgba(205, 165, 184, 0.306);
}

a {
  text-decoration: none;
}

a:hover {
  color: white;
}

.grow {
  transition: all .2s ease-in-out;
}

.grow:hover {
  transform: scale(1.1);
}

#profile{
  color: #0275d8;
}

#profile:hover{
  color: white;
}

button, button:hover, button:disabled {
  color: white;
}
</style>
