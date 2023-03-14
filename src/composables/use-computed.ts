import { ref, onMounted, computed } from 'vue';
import { useAPI } from './use-api';

const {fetchUsers, userData, pageNum} = useAPI();
const searching = ref(false)
const searchTerm = ref('')
const clear = ref(false);
const gender = ref('')

export function useComputed() {
    onMounted(() => {
        fetchUsers()
    })
    
    const prevPage = () => {
        if (pageNum.value > 1) {
            pageNum.value--
            fetchUsers()
        }
    }

    const nextPage = () => {
        pageNum.value++
        fetchUsers()
    }

    const searchUser = (text: string) => {
        searchTerm.value = text
        searching.value = true
    }

    const cleared = () => {
        clear.value = true;
    
        if (searchTerm.value === '') {
            searching.value = false;
        }
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

    const completeName = computed(()=> {
        return userData.value.map(userData => {
            return userData.name.first + ' ' + userData.name.last
        })
    })

    const completeAddress = computed(()=> {
        return userData.value.map(userData => {
            return userData.location.city + ' ' + userData.location.state + ', ' + userData.location.country
        })
    })


    return {
        pageNum,
        searchTerm,
        searchUser,
        prevPage,
        nextPage,
        searching,
        filtered,
        gender,
        searchResults,
        completeName,
        completeAddress,
        clear,
        cleared,
    }
}


