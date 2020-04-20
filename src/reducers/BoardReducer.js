export default function BoardReducer(state = [], action) {
    switch(action.type) {
        case 'ADD BOARD':
            return [...state, action.board];
        case 'ADD BOARDS':
            return [...action.boards];
        default:
            return state
    }
}