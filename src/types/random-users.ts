interface RandomUsers{
    id: number,
    gender: string,
    name: {
        first: string,
        last: string,
    },
    location: {
        city: string,
        state: string,
        country: string
    },
    dob: {
        date: string,
    }
    picture: {
        large: string
    },
    email: string,
    phone: string,
    login: {
        uuid: string
    }
}

export default RandomUsers;