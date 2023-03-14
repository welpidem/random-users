import { computed, ref } from 'vue';
import { useAPI } from './use-api';

const { userData } = useAPI()

const hoverName = ref(true)
const hoverEmail = ref(false)
const hoverDob = ref(false)
const hoverPhone = ref(false)
const hoverAddress = ref(false)
const userIndex = ref(0)

export function useViewUser() {

    const uuid = ref('')
    
    const viewUser = computed(() => {
        return userData.value.filter(userData => {
            return userData.login.uuid.includes(uuid.value)
        })
    })

    const dob = computed (() => {
        return userData.value.map(userData =>{
            const finalDate = new Date(userData.dob.date);
            return new Intl.DateTimeFormat('en-US').format(finalDate)
        })
    })

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
        hoverName.value = false;
        hoverEmail.value= false;
        hoverDob.value = false;
        hoverPhone.value = false;
        hoverAddress.value = false;
    }

    return {
        viewUser,
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
        dob,
        userIndex,
    }
}