<script setup lang="ts">
import { useComputed } from "@/composables/use-computed"
import { useViewUser } from '@/composables/use-view-user'
import route from '@/constants/route-constants'

const {routeName} = route();
const { userIndex } = useViewUser();
const { filtered, completeName, completeAddress, searching, searchResults, searchTerm } = useComputed();

</script>
<template>
    <div class="row row-cols-5 row-cols-md-9 g-4" v-if="searching === false">
        <div class="col" v-for="(user, index) in filtered" :key="index">
            <div class="card grow">
                <img :src="user.picture.large" :alt="user.name.first">
                <!-- TODO: Refactor -->
                <div class="card-body">
                    <h5 class="card-title">{{ completeName[index] }}</h5>
                    <p class="card-text">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#ffc107"
                            class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                            <path
                                d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                        </svg>
                        <i>{{ completeAddress[index] }}</i>
                    </p>
                    <button type="button" class="btn btn-outline-primary" id="profile"
                        @click="$router.push({ name: routeName.profile, params: { id: user.login.uuid } }), userIndex = index">
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
    <div class="row row-cols-5 row-cols-md-9 g-4" v-else>
        <div class="col" v-for="(user, index) in searchResults" :key="index">
            <div class="card grow">
                <img :src="user.picture.large" :alt="user.name.first">
                <div class="card-body">
                    <h5 class="card-title">{{ user.name.first }} {{ user.name.last }}</h5>
                    <p class="card-text">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#ffc107"
                            class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                            <path
                                d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                        </svg>
                        <i>{{ user.location.city }} {{ user.location.state }}, {{ user.location.country }}</i>
                    </p>
                    <button type="button" class="btn btn-outline-primary" id="profile"
                        @click="$router.push({ name: routeName.profile, params: { id: user.login.uuid } }), userIndex = index">
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
    <h2 v-if="searchResults.length === 0"> {{ searchTerm }} not found. </h2>
</template>
<style scoped>
h2{
    text-align: center;
}
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

#profile {
    color: #0275d8;
}

#profile:hover {
    color: white;
}

button,
button:hover,
button:disabled {
    color: white;
}
</style>