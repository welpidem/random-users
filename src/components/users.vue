<script setup lang="ts">
import { useComputed } from "@/composables/use-computed"
import { ref, onMounted } from 'vue'
import Search from './search-user.vue'
import UsersResults from './users-result.vue'

const { prevPage, nextPage, gender, pageNum } = useComputed();
const ispageOne = ref(false);

const firstPage = () => {
  ispageOne.value = pageNum.value === 1;
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
    <UsersResults />
    <div style="margin: 5% 40% 5% 40%">
      <button type="button" class="btn btn-info mr-2" @click="prevPage(), firstPage()"
        :disabled="ispageOne">Previous</button>
      <button type="button" class="btn btn-info" @click="nextPage(), firstPage()">Next</button>
    </div>
  </div>
</template>

<style scoped>
button,
button:hover,
button:disabled {
  color: white;
}
</style>
