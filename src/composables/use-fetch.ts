import { ref, onMounted, computed } from 'vue';
import type RandomUser from '@/types/random-users';

const userData = ref<RandomUser[]>([]);
const page = ref(1)

export function useFetch() {

    const searchTerm = ref('')
    const gender = ref('')
    const searching = ref(false)

    const getURL = () =>{
        const paramsObj = {page: page.value.toString(), results: '15', seed: 'abc'}
        const BASE_URL = ('https://randomuser.me/api/?')
        const searchParams = new URLSearchParams(paramsObj).toString()
        const URL = BASE_URL + searchParams
        return URL
    }
    
    const fetchUsers = async () => {
        try {
            const response = await fetch(getURL())
            const data = await response.json()
            userData.value = data.results
        } catch (error) {
            console.error(error)
        }
    }

    const prevPage = () => {
        if (page.value > 1) {
            page.value--
            fetchUsers()
        }
    }

    const nextPage = () => {
        page.value++
        fetchUsers()
    }

    onMounted(() => {
        fetchUsers()
    })

    const searchUser = (text: string) => {
        searchTerm.value = text
        searching.value = true
    }

    const searchResults = computed(() => {
        return userData.value.filter(userData => {
            const fullname = userData.name.first + ' ' + userData.name.last
            return fullname.toLowerCase().includes(searchTerm.value.toLowerCase())
        })
    })

    const filtered = computed(() => {
        return userData.value.filter(userData => {
            return userData.gender.startsWith(gender.value)
        })

    })


    return {
        userData,
        page,
        searchTerm,
        searchUser,
        prevPage,
        nextPage,
        searching,
        filtered,
        gender,
        searchResults,
    }
}


