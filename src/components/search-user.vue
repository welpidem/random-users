<script setup lang="ts">
import { useComputed } from "@/composables/use-computed"

const { searchTerm, searchUser, searching, clear, cleared } = useComputed();

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

button, button:hover, button:disabled {
    color: white;
}
</style>