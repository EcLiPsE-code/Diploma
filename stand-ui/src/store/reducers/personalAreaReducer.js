const initialState = {
    name: 'Солодков',
    surname: 'Михаил',
    lastName: 'Анатольевич',
    phone: '+375336825667',
    email: 'fantazermyname@gmail.com',
    password: 'zxasv'
}

export default function personalAreaReducer(state=initialState, action){
    switch (action.type){
        default: return state
    }
}