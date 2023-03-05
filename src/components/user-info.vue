<script setup lang="ts">
import { useRoute } from 'vue-router'
import { onMounted } from 'vue'
import { useViewUser } from '@/composables/use-view-user'
import InfoIcons from './user-info-icons.vue'

const { viewUser, 
        formatDate, 
        uuid, 
        hoverEmail,
        hoverAddress,
        hoverDob,
        hoverName,
        hoverPhone, } = useViewUser();

const route = useRoute();

onMounted(() => {
    const id = route.params.id;
    uuid.value = id.toString();
})
</script>
<template>
    <section class="text-center bg-image gradient-custom-2" style="height: 635px">
        <div class="container pt-5 mb-5" v-for="(user, index) in viewUser" :key="index">
            <div class="container py-5 h-100">
                <div class="row d-flex justify-content-center align-items-center h-100">
                    <div class="col col-lg-9 col-xl-7">
                        <div class="mt-5 card rounded-bottom border-bottom shadow">
                            <div class="pt-4 rounded-top d-flex flex-row" style="background-color: #555455; height:155px;">
                                <div class="mx-auto d-flex flex-column" style="width: 120px;">
                                    <img :src="user.picture.large" :alt="user.name.first.toUpperCase()"
                                        class="rounded-circle border-secondary img-fluid img-thumbnail mt-5 mb-2"
                                        data-toggle="tooltip" data-placement="bottom" :title="user.name.first + ' ' + user.name.last"
                                        style="width: 150px; z-index: 1">
                                </div>
                            </div>
                            <div class="pt-4 text-black" style="background-color: #f8f9fa;">
                                <div class="justify-content-center text-center py-2" style="height: max-content;">
                                    <div v-show="hoverName" class="pt-3">
                                        <h4 class="small text-muted mb-0">Hi, my name is</h4>
                                        <h2 class="mb-1 h2">{{ user.name.first }} {{ user.name.last }}</h2>
                                    </div>
                                    <div v-show="hoverEmail" class="pt-3">
                                        <h4 class="small text-muted mb-0">My email address is</h4>
                                        <h2 class="mb-1 h2">{{ user.email }}</h2>
                                    </div>
                                    <div v-show="hoverDob" class="pt-3">
                                        <h4 class="small text-muted mb-0">My birthday is</h4>
                                        <h2 class="mb-1 h2">{{ formatDate(user.dob.date) }}</h2>
                                    </div>
                                    <div v-show="hoverAddress" class="pt-3">
                                        <h4 class="small text-muted mb-0">My address is</h4>
                                        <h2 class="mb-1 h2">{{ user.location.city }} {{ user.location.state }}, {{
                                            user.location.country }}</h2>
                                    </div>
                                    <div v-show="hoverPhone" class="pt-3">
                                        <h4 class="small text-muted mb-0">My phone number is</h4>
                                        <h2 class="mb-1 h2">{{ user.phone }}</h2>
                                    </div>
                                </div>
                            </div>
                            <InfoIcons />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.gradient-custom-2 {
    background: linear-gradient(to right, rgb(246, 211, 236), rgb(192, 212, 246))
}
</style>
