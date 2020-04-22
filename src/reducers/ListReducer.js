export default function ListReducer(state = [], action) {
    switch (action.type) {
        case 'ADD NEW CARD':
            return [...state.map(board => {
                if(board.id === action.boardID) {
                    return {...board, lists: [...board.lists.map(list => {
                        if(list.id === action.listID) {
                            return {...list, cards: [...list.cards, action.card]}
                        }
                        return list
                        })]}
                }
                return board
            })];
        case 'DRAG CARD':
            return [...state.map(board => {
                if(board.id === action.boardID) {
                    return {...board, lists: [...board.lists.map(list => {
                            if(list.id === action.listID) {
                                return {...list, cards: action.cards}
                            }
                            return list
                        })] }
                }
                return board
            })];
        case 'ADD NEW LIST':
            return [...state.map(board => {
                if(board.id === action.boardID) {
                    return {...board, lists: [...board.lists, action.list]}
                }
                return board
            })];
        default:
            return state;
    }
}