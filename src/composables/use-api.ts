import { ref, onMounted, computed } from 'vue';
import type RandomUser from '@/types/random-users';

const userData = ref<RandomUser[]>([]);
const pageNum = ref(1)

export function useAPI(){
    const getURL = () =>{
        const paramsObj = {page: pageNum.value.toString(), results: '15', seed: 'abc'}
        const baseURL = ('https://randomuser.me/api/?')
        const searchParams = new URLSearchParams(paramsObj).toString()
        const URL = baseURL + searchParams
        return URL
    }

    const fetchUsers = async () => {
        try {
            const response = await fetch(getURL(), {
                method: "GET"
            }) //TODO: refactor
            const data = await response.json()
            userData.value = data.results
        } catch (error) {
            console.error(error)
        }
    }

    return{
        fetchUsers,
        userData,
        pageNum,
    }
}