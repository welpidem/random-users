<script setup lang="ts">
import { useFetch } from "@/composables/use-fetch"
import { ref, type PropType } from "vue"
import { useRouteConstants } from '@/composables/use-route-constants'

const {routeName} = useRouteConstants();
const { searchTerm, searchUser, searching, searchResults } = useFetch();

const clear = ref(false);

const cleared = () => {
    clear.value = true

    if (searchTerm.value === '') {
        searching.value = false
    }
}

</script>
<template>
    <form class="form-inline my-2 my-lg-0" @submit.prevent="searchUser(searchTerm), cleared()">
        <input class="form-control mr-xl-3" type="search" placeholder="Search a User" aria-label="Search" required
            style="width: 50%;" @keydown="cleared()" @keyup="cleared()" @keypress="searchUser(searchTerm)"
            v-model="searchTerm">
        <button class="btn btn-info mr-2 my-2 my-sm-0" type="submit" @click="">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search"
                viewBox="0 0 16 16">
                <path
                    d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
            </svg>
            Search
        </button>
    </form>
    <div class="scroll" v-if="searching">
        <ul id="userList">
            <li v-for="(user, index) in searchResults" :key="index" @click="$router.push({name: routeName.profile, params: { id: user.login.uuid }})">
                <img :src="user.picture.large" alt="user photo" class="results">
                    {{ user.name.first }} {{ user.name.last }}
            </li>
            <li v-if="searchResults.length === 0"> {{ searchTerm }} not found. </li>
        </ul>
    </div>
</template>

<style scoped>
input {
    width: 100%;
}

input:hover,
input:focus {
    border: 1.5px solid #24a0ed;
    background-color: white;
    outline: none;
}

.scroll {
    width: 50%;
    height: 220px;
    position: absolute;
    overflow: auto;
    z-index: 1000;
    top: 10;
}

ul {
    padding-left: 0;
    z-index: 1000;
    top: 10;
    position: absolute;
    width: 100%;
}

img.results {
    border-radius: 5px;
    margin-right: 10px;
    width: 10%;
    height: 10%;
}

#userList li {
    width: 100%;
    border: 1px solid #ddd;
    margin-top: -1px;
    margin-right: -1px;
    background-color: #f6f6f6;
    padding: 12px;
    text-decoration: none;
    font-size: 18px;
    color: black;
    display: block;
}

#userList li:hover {
    background-color: #bfbebe;
    cursor: pointer;
}

a {
    text-decoration: none;
    font-size: 18px;
    color: black;
}

a:hover {
    font-size: 18px;
    color: rgb(47, 47, 47);
}

button, button:hover, button:disabled {
    color: white;
}
</style>