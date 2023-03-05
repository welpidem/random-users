import { computed, ref } from 'vue';
import { useFetch } from './use-fetch';

const { userData } = useFetch()

const hoverName = ref(true)
const hoverEmail = ref(false)
const hoverDob = ref(false)
const hoverPhone = ref(false)
const hoverAddress = ref(false)

export function useViewUser() {

    const uuid = ref('')
    
    const viewUser = computed(() => {
        return userData.value.filter(userData => {
            return userData.login.uuid.includes(uuid.value)
        })
    })

    const formatDate = (date: string) => {
        const finalDate = new Date(date);
        return new Intl.DateTimeFormat('en-US').format(finalDate)
    }

    const showName = () =>{
        resetTabState();
        hoverName.value = true;
    }
    
    const showEmail = () =>{
        resetTabState();
        hoverEmail.value = true;
    }
    
    const showDob = () =>{
        resetTabState();
        hoverDob.value = true;
    }
    
    const showPhone = () =>{
        resetTabState();
        hoverPhone.value = true;
    }
    
    const showAddress = () =>{
        resetTabState();
        hoverAddress.value = true;
    }

    const resetTabState = () => {
        hoverName.value = false
        hoverEmail.value= false
        hoverDob.value = false
        hoverPhone.value = false
        hoverAddress.value = false
    }

    return {
        viewUser,
        formatDate,
        uuid,
        hoverEmail,
        hoverAddress,
        hoverDob,
        hoverName,
        hoverPhone,
        showAddress,
        showDob,
        showEmail,
        showName,
        showPhone,
        resetTabState,
    }
}