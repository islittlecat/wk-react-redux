export const accumulation = (state = 0, action) => {
    let { type, payload = 1 } = action;
    switch (type) {
        case 'ADD':
            return state + payload;
        case 'MINUS':
            return state - payload
        default:
            return state;
    }
}