const initialState = {
    tester: [],
    position1: {
        protocol: null,
        model: null,
        size: null,
        number: null,
        rDin: null,
        method: null
    },
    position2: {
        protocol: null,
        model: null,
        size: null,
        number: null,
        rDin: null,
        method: null
    }
}

export default function testReducer(state=initialState, action){
    switch (action.type){
        default: return state
    }
}