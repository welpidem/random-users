<template>
    <nav class="navbar sticky-top navbar-expand-lg shadow">
        <div class="collapse navbar-collapse">
            <a class="navbar-brand ml-4">
                <RouterLink :to="{
                    name: 'users'
                }">
                Random Users App
                </RouterLink>
            </a>
            <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
            </ul>
        </div>
    </nav>
</template>

<style scoped>
nav {
    background-color: #555455;
}

a {
    color: white;
    text-decoration: none;
}
a:hover {
    color: rgb(246, 211, 236);
}
</style>